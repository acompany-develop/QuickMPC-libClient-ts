import {sanitize} from './Sanitize'
import {createHash} from 'crypto'

// If val is a number, convert as is; if it is a string, hash it
function toNumber(val: string): number {
    const valNum = Number(val);
    if(!Number.isNaN(valNum)) { return valNum; }
    // k,m are constants used in the comparison operation
    // Due to the limitation of comparison operation, k bits are taken out and divided by 2^m.
    const k = 48;
    const m = 16;
    const hs = createHash('sha512').update(val).digest('hex')
    const valInt = parseInt(hs.substring(0, (k>>2)), 16)
    const valFloat = valInt / (1 << m)
    return valFloat
}


// 文字列に変換されたcsvファイルをスキーマ、秘密情報に分割する
export function parseCsv(data: string): [string[], number[][]]{
    const array: string[] = sanitize(data).split(/\r\n|\n|\r/).filter((el)=>el.match(/[^,\s]/)); // サニタイズ処理とcsvの空白分の削除処理
    const schema: string[] = array[0].split(',');
    const secrets: number[][] = [];

    for(let i = 1; i < array.length; ++i) {
        const line: string[] = array[i].split(',')
        const numLine: number[] = line.map(toNumber)

        if(numLine.includes(NaN) == true) {
            throw new TypeError("配列の要素が不適切です") // 配列の型の要素チェック
        }

        if (schema.length != numLine.length) {
            throw new Error("要素数が列数と一致しません. line : " + i) // 要素数チェック
        }

        secrets.push(numLine); // secretを文字列から数値に変換
    }

    return [schema, secrets];
}

function checkPieceSize(pieceSize: number) {
    const lowerLimitSize: number = 1
    const upperLimitSize: number = 1_000_000
    if (pieceSize < lowerLimitSize) {
        throw new Error(
          "piece size " + pieceSize.toString() + " is under " +
          "specified limit size " + lowerLimitSize.toString()
        );
    }
    if (pieceSize > upperLimitSize) {
        throw new Error(
          "piece size " + pieceSize.toString() + " is over " +
          "specified limit size " + upperLimitSize.toString()
        );
    }
}

// couchbaseに1回で保存できる上限が1MBなので、デフォルトでは1MBで分割する
export function makePiece(secrets: number[][], pieceSize: number = 1000000): number[][][]{
    checkPieceSize(pieceSize);
    let bytes: number = 0;
    let secretsPiece: number[][][] = [];
    secretsPiece.push([]);
    for(const row of secrets) {
        bytes += row.map(String).join().length;
        if(bytes >= pieceSize) { // pieceSizeごとに分割
            secretsPiece.push([]);
            bytes = 0;
        }
        secretsPiece[secretsPiece.length-1].push(row);
    }
    return secretsPiece;
}

export function makePieceStr(str: string, pieceSize: number = 1000000): string[]{
    checkPieceSize(pieceSize);

    const strPiece: string[] = [];
    let current: string = ""
    for (const ch of str) {
        current += ch;
        if (current.length == pieceSize) {
            strPiece.push(current);
            current = "";
        }
    }
    if (current.length > 0) {
        strPiece.push(current);
    }
    return strPiece;
}



export function parseCsvVector(data: string): number[] {
    const array: string[] = sanitize(data).split(/\r\n|\n|\r/).filter((el)=>el.match(/[^,\s]/)); // サニタイズ処理とcsvの空白分の削除処理
    const vector: number[] = array[0].split(',').map(toNumber);
    return vector;
}

export function parseJsonVector(data: string): object[] {
    const json: object[] = JSON.parse(data);
    return json;
}

import {sanitize} from './Sanitize'
import {createHash} from 'crypto'

// If val is a number, convert as is; if it is a string, hash it
function toNumber(val: string): number {
    const valNum = Number(val);
    if(!Number.isNaN(valNum)) { return valNum; }
    // k,m are constants used in the comparison operation
    // Due to the limitation of comparison operation, k bits are taken out and divided by 2^m.
    const k = 32;
    const m = 16;
    const bin= Array.prototype.map.call(val, (c)=>{
        return c.codePointAt(0).toString(2);
    }).join("");
    const valInt = parseInt(bin.substring(0, k), 2)
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

// couchbaseに1回で保存できる上限が1MBなので、デフォルトでは1MBで分割する
export function makePiece(secrets: number[][], pieceSize: number = 1000000): number[][][]{
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

export function parseCsvVector(data: string): number[] {
    const array: string[] = sanitize(data).split(/\r\n|\n|\r/).filter((el)=>el.match(/[^,\s]/)); // サニタイズ処理とcsvの空白分の削除処理
    const vector: number[] = array[0].split(',').map(toNumber);
    return vector;
}

export function parseJsonVector(data: string): object[] {
    const json: object[] = JSON.parse(data);
    return json;
}

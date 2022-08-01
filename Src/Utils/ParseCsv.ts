import {sanitize} from './Sanitize'

// 数値であればそのまま変換，文字列ならば36進数と解釈して10進数に変換
function toNumber(val: string): number {
    const valNum = Number(val);
    if(Number.isNaN(valNum)) { return parseInt(val, 36); }
    return valNum;
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

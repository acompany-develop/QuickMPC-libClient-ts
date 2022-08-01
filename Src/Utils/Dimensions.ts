// dimとvalidatorを組み合わせている
export function getDim(array: any[]): number {
    const d = dim(array);
    if(d.length == 1 || d.length == 2 || d.length == 3) {
        if(validator(d)(array)) return d.length;
        else throw new Error("不正な形式の配列が与えられています.");
    } else {
        throw new Error("不正な次元数の配列が与えられています.");
    }
}

// 多次元配列を受け取り、次元の配列を返す
// 最下階層の配列の要素数が異なる配列ではうまく動かないのでvalidatorと併用する
function dim(array: any[]): any[] {
    if (array instanceof Array) {
        return [array.length].concat(dim(array[0]));
    } else {
        return [];
    }
}

// 有効な多次元配列かどうか判定する関数を返す
function validator(d: any[]): any {
    return function (array: any[]) {
        if (array instanceof Array) {
            return d.length > 0
                && d[0] === array.length
                // 再帰で多次元配列の全ての階層の全ての要素が条件を満たすかチェック
                && array.every(validator(d.slice(1))); 
        } else {
            return d.length === 0;
        }
    };
}
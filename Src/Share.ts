import * as dimensions from './Utils/Dimensions';
import * as csprng from './Utils/Csprng';

type Container = { sort: 'function' };
export const getTypeName = function(x: any): string {
    // オーバーロードのために型を区別する
    // numberを含むものをsharizeで用いられる
    // stringを含むものはreconsで用いられる
    // objectを含むものをいずれも用いられる
    if(typeof x == "number") {
        return "number";
    }
    if((x as Container).sort !== undefined) {
        const dim = dimensions.getDim(x);
        if(dim == 1) {
            if(typeof x[0] == "number" || typeof x[0] == "string") {
                return "container_1dim";
            } else {
                return "json_1dim";
            }
        }
        if(dim == 2) {
            return "container_2dim";
        }
        if(dim == 3) {
            return "container_3dim";
        }
    }
    return "json";
}


export function sharize(secrets: number, partySize: number): string[]
export function sharize(secrets: number[], partySize: number): string[][]
export function sharize(secrets: number[][], partySize: number): string[][][]
export function sharize(secrets: object, partySize: number): object[]
export function sharize(secrets: object[], partySize: number): object[][]
export function sharize(secrets: any, partySize: number = 3): any {

    const type_name = getTypeName(secrets);

    // scalar値のシェア化
    if(type_name == 'number') {
        let shares: string[] = [];
        let sum: number = 0;
        for(let j = 0; j < partySize; j++) {
            if(j == partySize-1) {
                shares[j] = (secrets - sum).toString();
            } else {
                shares[j] = csprng.getRandFloat().toString();
                sum += parseFloat(shares[j]);
            }
        }
        return shares;
    }

    // 1次元配列のシェア化
    if(type_name == "container_1dim") {
        if(secrets.length == 0) {
            throw new TypeError("空の配列が存在します."); // 空の配列のチェック
        }
        for(let i = 0; i < secrets.length; i++) {
            if(typeof(secrets[i]) != "number") {
                throw new TypeError("配列要素の型が不適切です."); // 配列の要素型チェック
            } 
        }

        let shares: string[][] = [];

        for(let i = 0; i < partySize; i++) {
            shares[i] = [];
        }

        for(let i = 0; i < secrets.length; i++) {
            let sum: number = 0;

            for(let j = 0; j < partySize; j++) {
                if(j == partySize-1) {
                    shares[j][i] = (secrets[i] - sum).toString();
                } else {
                    shares[j][i] = csprng.getRandFloat().toString();
                    sum += parseFloat(shares[j][i]);
                }
            }
        }
        return shares;
    }

    // 2次元配列のシェア化
    if(type_name == "container_2dim") {
        for(let i = 0; i < secrets.length; i++) {
            if(secrets[i].length === 0) {
                throw new TypeError("空の配列が存在します."); // 空の配列のチェック
            }
            for(let j = 0; j < secrets[i].length; j++) {
                if(typeof(secrets[i][j]) != "number") {
                    throw new TypeError("配列要素の型が不適切です."); // 配列の要素型チェック
                } 
            }
        }

        let shares: string[][][] = [];

        for(let i = 0; i < partySize; i++) {
            shares[i] = [];
            for(let j = 0; j < secrets.length; j++){
                shares[i][j] = [];
            }
        }

        for(let i = 0; i < secrets.length; i++) {
            for(let j = 0; j < secrets[i].length; j++) {
                let sum: number = 0;
                for(let k = 0; k < partySize; k++) {
                    if(k == partySize-1) {
                        shares[k][i][j] = (secrets[i][j] - sum).toString();
                    } else {
                        shares[k][i][j] = csprng.getRandFloat().toString();
                        sum += parseFloat(shares[k][i][j]);
                    }
                }
            }
        }

      return shares;
      }

      // jsonのシェア化
      if(type_name == "json") {
          return sharize_json(secrets, partySize)
      }
      // json配列のシェア化
      if(type_name == "json_1dim") {
          return sharize_json_array(secrets, partySize)
      }

      throw new Error("不正な形式のsecretsが与えられています.");
}

function sharize_json(secrets: object, partySize: number): object[] {
    let shares = [];
    for(let i = 0; i < partySize; ++i) {
        shares[i] = JSON.parse(`{}`);
    }

    const secrets_json = function(json: object) {
        try {
            return JSON.parse(JSON.stringify(json));
        } catch(e) {
            throw e;
        }
    }(secrets);

    for (const item in secrets_json) {
        const s = sharize(secrets_json[item], partySize);
        for(let i = 0; i < partySize; ++i) {
            shares[i][item] = s[i];
        }
    }
    return shares;
}

function sharize_json_array(secrets: object[], partySize: number): object[][] {
    let shares = [];
    for(let i = 0; i < partySize; ++i) {
        shares[i] = JSON.parse(`[]`);
    }

    const secrets_json = JSON.parse(JSON.stringify(secrets));
    for(const item in secrets_json) {
        const share = sharize(secrets_json[item], partySize);
        for(let i = 0; i < partySize; ++i) {
            shares[i][item] = share[i];
        }
    }
    return shares;
}


export function recons(shares: string[]): number
export function recons(shares: string[][]): number[]
export function recons(shares: string[][][]): number[][]
export function recons(shares: object[]): object
export function recons(shares: any): any {

    const type_name = getTypeName(shares);

    // 1次元配列Shareの復元
    if(type_name == "container_1dim") {
        for(const x of shares) {
            if(typeof(x) != "string") {
                throw new TypeError("配列要素の型が不適切です."); // 配列の要素型チェック
            }
        }

        let secrets: number = 0;
        for(const x of shares) {
            const val = Number(x);
            // 数値でない値はreconsできないのでそのまま返す
            if(Number.isNaN(val)) {
                return x;
            }
            secrets += val;
        }
        return secrets;
    }

    // 2次元配列Shareの復元
    if(type_name == "container_2dim") {
        for(const arr of shares) {
            if(arr.length === 0) {
                throw new TypeError("空の配列が存在します."); // 空の配列のチェック
            }
        }

        let secrets: number[] = [];
        for(let i = 0; i < shares[0].length; i++) {
            let sharesInner: string[] = [];
            for(const arr of shares) {
              sharesInner.push(arr[i]);
            }
            secrets.push(recons(sharesInner));
        }
        return secrets;
    }

    // 3次元配列Shareの復元
    if(type_name == "container_3dim") {
        for(const arr of shares) {
            if(arr.length === 0) {
                throw new TypeError("空の配列が存在します."); // 空の配列のチェック
            }
        }

        let secrets: number[][] = [];
        for(let i = 0; i < shares[0].length; i++) {
            let sharesInner: string[][] = [];
            for(const arr of shares) {
                sharesInner.push(arr[i]);
            }
            secrets.push(recons(sharesInner));
        }
        return secrets;
    }

    // jsonShareの復元
    if (type_name == "json_1dim") {
        let secrets = JSON.parse(`{}`);
        for(const key in shares[0]) {
            let sharesInner: object[] = []
            for(const s of shares) {
                sharesInner.push(s[key]);
            }
            secrets[key] = recons(sharesInner);
        }
        return secrets;
    }

    throw new Error("不正な形式のsharesが与えられています.");
}

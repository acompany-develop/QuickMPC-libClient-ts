export {}; // Cannot redeclare block-scoped variable 'Share'. のエラーを回避するためにつけている
import * as Share from '../../Src/Share';

const partySize: number = 3;

function testTwoDimensionsSharesRecons(secrets: number[], shares: string[][]) {
    for(let i = 0; i < secrets.length; i++) {
        const secret: number = Number(shares[0][i]) + Number(shares[1][i]) + Number(shares[2][i]);
        expect(secret).toBeCloseTo(secrets[i], 5); // 小数点5桁の精度でpass
    }
}

function testThreeDimensionsSharesRecons(secrets: number[][], shares: string[][][]) {
    for(let i = 0; i < secrets.length; i++) {
        for(let j = 0; j < secrets[i].length; j++) {
            const secret: number =  Number(shares[0][i][j]) + Number(shares[1][i][j]) + Number(shares[2][i][j]);
            expect(secret).toBeCloseTo(secrets[i][j], 5); // 小数点5桁の精度でpass
        }
    }
}

function testJsonSharesRecons(shares: object[], secret: object) {
    const merge_json = function(val: any, key: string="") {
        let ret = JSON.parse(`{}`);
        if(typeof val == 'number') {
            ret[key] = val;
        } else if(typeof val == 'string') {
            ret[key] = Number(val);
        } else {
            const json = JSON.parse(JSON.stringify(val));
            for(const k in json) {
                ret = {...ret, ...merge_json(json[k], key+k)}
            }
        }
        return ret
    }
    const secret_json = merge_json(secret)
    let shares_json = JSON.parse(`{}`);
    for(const item in secret_json) {
        shares_json[item] = 0
    }

    for(const share of shares) {
        const share_json = merge_json(share);
        for(const item in share_json) {
            shares_json[item] += share_json[item];
        }
    }

    for(const item in secret_json) {
        expect(secret_json[item]).toBeCloseTo(shares_json[item], 5); // 小数点5桁の精度でpass
    }
}
function testJsonArraySharesRecons(shares: object[][], secret: object[]) {
    for(const it in secret) {
        let shares_it: object[] = []
        for(const pt in shares) {
            shares_it[pt] = shares[pt][it];
        }
        testJsonSharesRecons(shares_it, secret[it]);
    }
}

// 1次元配列秘密情報のテスト
test('sharize must return proper shares when dimensions of secrets array is one', () => {
    let secrets: number[] = [1, 2, 3];
    let shares = Share.sharize(secrets, partySize);
    testTwoDimensionsSharesRecons(secrets, shares);

    secrets = [3.0, 5.12, 21.05];
    shares = Share.sharize(secrets, partySize);
    testTwoDimensionsSharesRecons(secrets, shares);

    secrets = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    shares = Share.sharize(secrets, partySize);
    testTwoDimensionsSharesRecons(secrets, shares);

    secrets = [0, 1, 0];
    shares = Share.sharize(secrets, partySize);
    testTwoDimensionsSharesRecons(secrets, shares);
});


// 2次元配列秘密情報のテスト
test('sharize must return proper shares when dimensions of secrets array is two', () => {
    let secrets: number[][] = [[1]];
    let shares = Share.sharize(secrets, partySize);
    testThreeDimensionsSharesRecons(secrets, shares);

    secrets = [[3000, 500, 2100], [100, 2500, 1100]];
    shares = Share.sharize(secrets, partySize);
    testThreeDimensionsSharesRecons(secrets, shares);

    secrets = [[2.1, 3.2]];
    shares = Share.sharize(secrets, partySize);
    testThreeDimensionsSharesRecons(secrets, shares);

    secrets = [[1, 2, 3, 4, 5],[6, 7, 8, 9, 10],[11, 12, 13, 14, 15],[16, 17, 18, 19, 20],[21, 22, 23, 24, 25]];
    shares = Share.sharize(secrets, partySize);
    testThreeDimensionsSharesRecons(secrets, shares);

    secrets = [[1, 0],[2, 0]];
    shares = Share.sharize(secrets, partySize);
    testThreeDimensionsSharesRecons(secrets, shares);
});

// json秘密情報のテスト
test('sharize must return proper shares when secrets is json', () => {
    const secrets: object = JSON.parse(`{"a":2, "b":5, "c":{"c1": 10, "c2":8}}`);
    const shares: object[] = Share.sharize(secrets, partySize);
    testJsonSharesRecons(shares, secrets);

    const secrets_ar: any = JSON.parse(`[{"a":2, "b":{"c": 10}}, {"d": 1, "e": 2}]`)
    const shares_ar: any = Share.sharize(secrets_ar, partySize);
    testJsonArraySharesRecons(shares_ar, secrets_ar);
});

// 異常値を与えてエラーが出るかテスト
test('sharize must throw error when secrets form is invalid', () => {
    expect(() => { Share.sharize([[1, 2], [1]], partySize); }).toThrow();
    expect(() => { Share.sharize([[], []], partySize); }).toThrow();
})

test('sharize must throw error when secrets form is invalid', () => {
    const x1 = {"a": 1};
    const type1 = Share.getTypeName(x1);
    expect(type1).toBe("json");

    const x2 = [1];
    const type2 = Share.getTypeName(x2);
    expect(type2).toBe("container_1dim");

    const x3 = [[1]];
    const type3 = Share.getTypeName(x3);
    expect(type3).toBe("container_2dim");

    const x4 = 1;
    const type4 = Share.getTypeName(x4);
    expect(type4).toBe("number");

    const x5 = [{"a": 1}];
    const type5 = Share.getTypeName(x5);
    expect(type5).toBe("json_1dim");
})

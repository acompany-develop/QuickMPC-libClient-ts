export {}; // Cannot redeclare block-scoped variable 'Share'. のエラーを回避するためにつけている
import * as Share from '../../Src/Share';

const partySize: number = 3;

function testOneDimensionsSecrets(expectedSecrets: number[], secrets: number[]) {
    for(let i = 0; i < expectedSecrets.length; i++) {
        expect(secrets[i]).toBeCloseTo(expectedSecrets[i], 5); // 小数点5桁の精度でpass
    }
}

function testTwoDimensionsSecrets(expectedSecrets: number[][], secrets: number[][]) {
    for(let i = 0; i < expectedSecrets.length; i++) {
        for(let j = 0; j < expectedSecrets[i].length; j++) {
            expect(secrets[i][j]).toBeCloseTo(expectedSecrets[i][j], 5); // 小数点5桁の精度でpass
        }
    }
}

function testJsonSharesRecons(expectedSecrets: object, secret: object) {
    // jsonをフラット化する
    const flatJson = function(val: any, key: string="") {
        let ret = JSON.parse(`{}`);
        if(typeof val == 'number') {
            ret[key] = val;
        } else if(typeof val == 'string') {
            ret[key] = Number(val);
        } else {
            const json = JSON.parse(JSON.stringify(val));
            for(const k in json) {
                ret = {...ret, ...flatJson(json[k], key+k)}
            }
        }
        return ret
    }
    const secretJson = flatJson(secret)
    const expectedSecretsJson = flatJson(expectedSecrets)

    for(const item in expectedSecretsJson) {
        expect(secretJson[item]).toBeCloseTo(expectedSecretsJson[item], 5); // 小数点5桁の精度でpass
    }
}

// 2次元配列シェアのテスト
test('recons must return proper secrets when dimensions of shares array is two', () => {
    // nパーティのシェア化，復元が正しくできてるかTest
    for(let i = 2; i < 11; i++) {
        let expectedSecrets: number[] = [1];
        let shares: string[][] = Share.sharize(expectedSecrets, partySize);
        let secrets: number[] = Share.recons(shares);
        testOneDimensionsSecrets(expectedSecrets, secrets);

        expectedSecrets = [3.0, 5.12, 21.05];
        shares = Share.sharize(expectedSecrets, partySize);
        secrets = Share.recons(shares);
        testOneDimensionsSecrets(expectedSecrets, secrets);

        expectedSecrets = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        shares = Share.sharize(expectedSecrets, partySize);
        secrets = Share.recons(shares);
        testOneDimensionsSecrets(expectedSecrets, secrets);

        expectedSecrets = [0, 1, 0];
        shares = Share.sharize(expectedSecrets, partySize);
        secrets = Share.recons(shares);
        testOneDimensionsSecrets(expectedSecrets, secrets);
    }
});

// 3次元配列シェアのテスト
test('recons must return proper secrets when dimensions of shares array is three', () => {
    // nパーティのシェア化，復元が正しくできてるかTest
    for(let i = 2; i < 11; i++) {
        let expectedSecrets: number[][] = [[1]];
        let shares: string[][][] = Share.sharize(expectedSecrets, partySize);
        let secrets: number[][] = Share.recons(shares);
        testTwoDimensionsSecrets(expectedSecrets, secrets);

        expectedSecrets = [[3000, 500, 2100], [100, 2500, 1100]];
        shares = Share.sharize(expectedSecrets, partySize);
        secrets = Share.recons(shares);
        testTwoDimensionsSecrets(expectedSecrets, secrets);

        expectedSecrets = [[2.1, 3.2]];
        shares = Share.sharize(expectedSecrets, partySize);
        secrets = Share.recons(shares);
        testTwoDimensionsSecrets(expectedSecrets, secrets);

        expectedSecrets = [[1, 2, 3, 4, 5],[6, 7, 8, 9, 10],[11, 12, 13, 14, 15],[16, 17, 18, 19, 20],[21, 22, 23, 24, 25]];
        shares = Share.sharize(expectedSecrets, partySize);
        secrets = Share.recons(shares);
        testTwoDimensionsSecrets(expectedSecrets, secrets);

        expectedSecrets = [[0, 2], [1, 0]];
        shares = Share.sharize(expectedSecrets, partySize);
        secrets = Share.recons(shares);
        testTwoDimensionsSecrets(expectedSecrets, secrets);
    }
});

// jsonシェアのテスト
test('recons must return proper secrets when json', () => {
    // nパーティのシェア化，復元が正しくできてるかTest
    for(let i = 2; i < 11; i++) {
        let expectedSecrets: object = JSON.parse(`{"a":2, "b":5, "c":{"c1": 10, "c2":8}}`);
        let shares: object[] = Share.sharize(expectedSecrets, partySize);
        let secrets: object = Share.recons(shares);
        testJsonSharesRecons(expectedSecrets, secrets);

        expectedSecrets = JSON.parse(`{"a":2, "b": [1, 2, 3], "c": {"c1": 1, "c2": [1, 2]}}`);
        shares = Share.sharize(expectedSecrets, partySize);
        secrets = Share.recons(shares);
        testJsonSharesRecons(expectedSecrets, secrets);
    }
});

// 異常値を与えてエラーが出るかテスト
test('recons must throw error when shares form is invalid', () => {
    expect(() => { Share.recons([[], [], []]); }).toThrow();
})

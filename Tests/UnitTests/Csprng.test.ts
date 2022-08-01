import * as csprng from '../../Src/Utils/Csprng';

function testCspngInterval(lower: number, upper: number): void {
    for(let i = 0; i < 1000; i++) {
        const x: number = csprng.getRand(lower, upper);
        expect(x < lower || upper <= x).toBe(false);
    }
}

// 半開区間内で生成されるかのtest
test('getRand must return CSPRN', () => {
    testCspngInterval(-20000, 20001); // デフォルト
    testCspngInterval(0, 10); // 正のみ
    testCspngInterval(-5, 5); // 正負 
    testCspngInterval(-10, 0); // 負のみ
    testCspngInterval(0, 1); // 範囲が1
    testCspngInterval((2**31)-1, (2**31)); // 32bit最大値
    testCspngInterval(-(2**31), -(2**31)+1); // 32bit最小値
});

function testCspngIntervalFloat(lower: number, upper: number): void {
    for(let i = 0; i < 1000; i++) {
        const x: number = csprng.getRandFloat(lower, upper);
        expect(x < lower || upper <= x).toBe(false);
    }
}

// 半開区間内で生成されるかのtest
test('getRand must return CSPRN ok', () => {
    testCspngIntervalFloat(-20000.0, 20000.0); // デフォルト
    testCspngIntervalFloat(0.0, 10.0); // 正のみ
    testCspngIntervalFloat(-5.0, 5.0); // 正負
    testCspngIntervalFloat(-10.0, 0.0); // 負のみ
    testCspngIntervalFloat(0.0, 1.0); // 範囲が1
    testCspngIntervalFloat((2**31)-1, (2**31)); // 32bit最大値
    testCspngIntervalFloat(-(2**31), -(2**31)+1); // 32bit最小値
});

// 異常値を与えてエラーが出るかテスト
test('getRand must throw error when augs are invalid', () => {
    expect(() => { csprng.getRand(0, 0); }).toThrow();
    expect(() => { csprng.getRand(10, 0); }).toThrow();
    expect(() => { csprng.getRand(0.2, 1.2); }).toThrow();
    expect(() => { csprng.getRandFloat(0, 0); }).toThrow();
    expect(() => { csprng.getRandFloat(10, 0); }).toThrow();
})


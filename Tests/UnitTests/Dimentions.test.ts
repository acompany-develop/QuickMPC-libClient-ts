import * as dimensions from '../../Src/Utils/Dimensions';

test('getDim must return proper dimensions or array', () => {
    expect(dimensions.getDim([1])).toStrictEqual(1);
    expect(dimensions.getDim([1, 2])).toStrictEqual(1);
    expect(dimensions.getDim([[1, 2],[1, 2]])).toStrictEqual(2);
    expect(dimensions.getDim([[1, 2],[1, 2],[1, 2]])).toStrictEqual(2);
    expect(dimensions.getDim([[[1, 2, 3],[1, 2, 4]],[[2, 1, 3],[4, 4, 6]]])).toStrictEqual(3);
});

// 異常値を与えてエラーが出るかテスト
test('getDim must throw error when array form is invalid', () => {
    expect(() => { dimensions.getDim([[1, 2], [3]]); }).toThrow(); 
    expect(() => { dimensions.getDim([[[1, 2, 3], [1, 2, 4]], [[2, 1], [4, 4]]]); }).toThrow(); 
})
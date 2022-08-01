import { makePiece, parseCsv, parseCsvVector, parseJsonVector } from "../../Src/Utils/ParseCsv";

const data: string = `id,attr1,attr2,attr3,attr4,attr5,attr6
hoge,0,0.77,0.63,0.35,0.39,0.35
huga,0,0.37,0.36,0.43,0.41,0.39
piyo,1,0.34,0.34,0.44,0.50,0.32
moge,1,0.47,0.43,0.34,0.29,0.34
moga,0,0.67,0.41,0.25,0.49,0.25`

const errData1: string = `id,attr1,attr2,attr3,attr4,attr5,attr6
    ,      ,    ,    ,    ,
huga,0,0.37,0.36,0.43,0.41
piyo,1,0.34,0.34,0.44,0.32
moge,1,0.47,0.43,0.34,0.29,0.34
moga,0,0.67,0.41,0.25,0.49,0.25`

const errData2: string = `id,attr1,attr2,attr3,attr4,attr5,attr6
    ,   ,  ,    ,    ,    ,
huga,0,0.37,0.36,'nyan',0.41,0.39
piyo,1,0.34,0.34,0.44,"neko,0.32
moge,1,0.47,0.43,0.34,0.29,0.34
moga,0,0.67,0.41,0.25,0.49,0.25`

const data_schema = ['id', 'attr1', 'attr2', 'attr3', 'attr4', 'attr5', 'attr6'];
const data_secrets = [
    [824846, 0, 0.77, 0.63, 0.35, 0.39, 0.35],
    [832618, 0, 0.37, 0.36, 0.43, 0.41, 0.39],
    [1190976, 1, 0.34, 0.34, 0.44, 0.5, 0.32],
    [1058126, 1, 0.47, 0.43, 0.34, 0.29, 0.34],
    [1058122, 0, 0.67, 0.41, 0.25, 0.49, 0.25],
];

const piece_1000000= [
    [
      [824846, 0, 0.77, 0.63, 0.35, 0.39, 0.35],
      [832618, 0, 0.37, 0.36, 0.43, 0.41, 0.39],
      [1190976, 1, 0.34, 0.34, 0.44, 0.5, 0.32],
      [1058126, 1, 0.47, 0.43, 0.34, 0.29, 0.34],
      [1058122, 0, 0.67, 0.41, 0.25, 0.49, 0.25],
    ]
];
const piece_100= [
    [
      [824846, 0, 0.77, 0.63, 0.35, 0.39, 0.35],
      [832618, 0, 0.37, 0.36, 0.43, 0.41, 0.39],
      [1190976, 1, 0.34, 0.34, 0.44, 0.5, 0.32],
    ],
    [
      [1058126, 1, 0.47, 0.43, 0.34, 0.29, 0.34],
      [1058122, 0, 0.67, 0.41, 0.25, 0.49, 0.25],
    ]
];

test('parseCsv must parse csv properly', () => {
    const [schema, secrets] = parseCsv(data); // デフォルトの1MBごと分割
    expect(JSON.stringify(schema) == JSON.stringify(data_schema)).toBe(true);
    expect(JSON.stringify(secrets) == JSON.stringify(data_secrets)).toBe(true);
})

test('parseCsv must not parse csv', () => {
  expect(() => {parseCsv(errData1)}).toThrow(); // 要素数チェック
  expect(() => {parseCsv(errData2)}).toThrow(); // 型チェック
})

test('makePiece must make table pieces', () => {
    const [_, secrets1] = parseCsv(data); // デフォルトの1MBごと分割
    const pieces1 = makePiece(secrets1);
    expect(JSON.stringify(pieces1) == JSON.stringify(piece_1000000)).toBe(true);

    const [__, secrets2] = parseCsv(data); // デフォルトの1MBごと分割
    const pieces2 = makePiece(secrets2, 100);
    expect(JSON.stringify(pieces2) == JSON.stringify(piece_100)).toBe(true);
})


const model_data: string = `0,0.67,0.41,0.25,0.49,0.25`;
const model_vector = [0, 0.67, 0.41, 0.25, 0.49,0.25];

test('parseCsv_vector must parse csv properly', () => {
    const res = parseCsvVector(model_data);
    expect(JSON.stringify(res) == JSON.stringify(model_vector)).toBe(true);
})

const model_data_json: string =
`[{
    "a": 5,
    "b": {
      "c": 2,
      "d": 3
    }
  },{
    "a": 5,
    "b": 100
  }
]`;
const model_json = JSON.parse(`[{ "a": 5, "b": { "c": 2, "d": 3 } },{ "a": 5, "b": 100 }]`);


test('parseCsv_json must parse json properly', () => {
    const res = parseJsonVector(model_data_json);
    expect(JSON.stringify(res) == JSON.stringify(model_json)).toBe(true);
})

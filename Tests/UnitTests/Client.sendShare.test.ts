import * as Share from '../../Src/Share'
import { Client } from "../../Src/Client";

const qmpcClient: Client = new Client([
  "http://localhost:9001",
  "http://localhost:9002",
  "http://localhost:9003",],
  "token_demo",
);

const sharesDefault: string[][] = Share.sharize([1, 2, 3], 3); 
const sharesTest: string[][] = Share.sharize([1, 2, 3], 2); 
const schema: string[] = ['ids','att1', 'att2', 'att3'];
const dataid: string = "dataID1";
const pieceIdDefault: number = 1;
const pieceIdTest: number = -1;

test('share count check', () => {
  expect.assertions(1);
  return qmpcClient.sendShare(sharesTest, schema, dataid, pieceIdDefault).catch(e => expect(e.message).toBe('シェアの形式がパーティ数に対応していません.'));
});

test('pieceId check', () => {
  expect.assertions(1);
  return qmpcClient.sendShare(sharesDefault, schema, dataid, pieceIdTest).catch(e => expect(e.message).toBe('pieceIdの値が正ではありません.'));
});

import * as Share from '../../Src/Share'
import { Client } from "../../Src/Client"
import { ComputationMethod } from '../../Src/Proto/common_types/common_types_pb';

const qmpcClient: Client = new Client([
  "http://localhost:9001",
  "http://localhost:9002",
  "http://localhost:9003",],
  "token_demo",
);

const dataids: string[] = ["dataID1"];
const methodIdDefault: ComputationMethod = ComputationMethod.COMPUTATION_METHOD_SUM;
const methodIdTest: ComputationMethod = -1;
const join_orderDefault: [string[], number[], number[]] = [["neko", "nyan", "nyago"],[1, 0], [1, 1, 1]];
const join_orderTest: [string[], number[], number[]] = [["neko", "nyan", "nyago"],[1, 3], [1, 1, 1]];
const inpDefault: [number[], number[]] = [[1, 2, 3], [4, 5, 6]];
const inpTest1: [number[], number[]] = [[1, -2, 3], [4, 5, -6]];
const inpTest2: [number[], number[]] = [[1, 2, 3], [4, 5, -6]];

test('methodId check', () => {
  expect.assertions(1);
  return qmpcClient.executeComputation(methodIdTest, join_orderDefault, inpDefault).catch(e => expect(e.message).toBe('methodIdが不正な値です.'));
});

test('join_order check', () => {
  expect.assertions(1);
  return qmpcClient.executeComputation(methodIdDefault, join_orderTest, inpDefault).catch(e => expect(e.message).toBe('joinの値が0または1ではありません.'));
});

test('src check', () => {
  expect.assertions(1);
  return qmpcClient.executeComputation(methodIdDefault, join_orderDefault, inpTest1).catch(e => expect(e.message).toBe('srcの値が正の値ではありません.'));
});

test('target check', () => {
  expect.assertions(1);
  return qmpcClient.executeComputation(methodIdDefault, join_orderDefault, inpTest2).catch(e => expect(e.message).toBe('targetの値が正の値ではありません.'));
});

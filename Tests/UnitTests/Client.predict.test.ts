import { Client } from "../../Src/Client"
import { PredictMethod } from '../../Src/Proto/common_types/common_types_pb';

const qmpcClient: Client = new Client([
  "http://localhost:9001",
  "http://localhost:9002",
  "http://localhost:9003",],
  "token_demo",
);

const dataids: string[] = ["dataID1"];
const modelIdDefault: PredictMethod = PredictMethod.PREDICT_METHOD_LINEAR_REGRESSION;
const modelIdTest: PredictMethod = -1;
const join_orderDefault: [string[], number[], number[]] = [["neko", "nyan", "nyago"],[1, 0], [1, 1, 1]];
const join_orderTest: [string[], number[], number[]] = [["neko", "nyan", "nyago"],[1, 3], [1, 1, 1]];
const srcDefault: number[] = [1, 2, 3]
const srcTest: number[] = [1, -2, 3]
const modelParamJobUuidTest: string = 'd9428888-122b-11e1-b85c-61cd3cbb321>';
const modelParamJobUuidDefault: string = '109156be-c4fb-41ea-b1b4-efe1671c5836';

test('jobUuid check', () => {
  expect.assertions(1);
  return qmpcClient.predict(modelParamJobUuidTest, modelIdDefault, join_orderDefault, srcDefault).catch(e => expect(e.message).toBe('modelParamJobUuidが正しい形式ではありません.'));
});

test('modelId check', () => {
  expect.assertions(1);
  return qmpcClient.predict(modelParamJobUuidDefault, modelIdTest, join_orderDefault, srcDefault).catch(e => expect(e.message).toBe('modelIdが不正な値です.'));
});

test('join_order check', () => {
  expect.assertions(1);
  return qmpcClient.predict(modelParamJobUuidDefault, modelIdDefault, join_orderTest, srcDefault).catch(e => expect(e.message).toBe('joinの値が0または1ではありません.'));
});

test('src check', () => {
  expect.assertions(1);
  return qmpcClient.predict(modelParamJobUuidDefault, modelIdDefault, join_orderDefault, srcTest).catch(e => expect(e.message).toBe('srcの値が正の値ではありません.'));
});

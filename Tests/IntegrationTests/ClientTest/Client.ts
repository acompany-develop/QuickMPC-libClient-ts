import { Client } from '../../../Src/Client';
import { v4 as uuidv4 } from 'uuid';
import * as Share from '../../../Src/Share';
import { JobStatus } from '../../../Src/Proto/common_types/common_types_pb';

// ローカルで起動したenvoyに対して通信を行う
const qmpcClient: Client = new Client([
  "http://localhost:9001",
  "http://localhost:9002",
  "http://localhost:9003",],
  "token_demo",
);

// validationを通すためのTest用ID
const dataID1: string = "bfb3292bd44698b4fce1e7ce15b346d7362ac12da1aa9f71f3d424da0786bd18";
const dataID2: string = "123185f9faee0e51cf702203f0e2be304e9dd3e75389c40ace151f3dcd63513d";
const jobUuid: string = "381fa8bf-5367-4352-84b1-2e49dc788608";

async function testSendShares() {
    const shares: string[][] = Share.sharize([1, 2, 3], 3);
    await qmpcClient.sendShare(shares, ["id", "attr1", "attr2", "attr3"], dataID1, 1)
    .then((res: [boolean, string, string]) => {
        if(res[0] && res[1] != "") {
            console.log('sendShare Test: \u001b[32m' + 'Passed');
        } else {
            console.log('sendShare Test: \u001b[31m' + 'Failed');
        }
    })
    .catch((err: Error) => {
        console.log(err);
    });
    return;
}

async function testExecuteComputation() {
    await qmpcClient.executeComputation(1, [[dataID1, dataID2], [0], [1, 1]], [[0, 1], [2]])
    .then((res: [boolean, string, string]) => {
        if(res[0] && res[1] == "ok" && res[2] == "job_uuid") {
            console.log('executeComputation Test: \u001b[32m' + 'Passed');
        } else {
            console.log('executeComputation Test: \u001b[31m' + 'Failed');
        }
    })
    .catch((err: Error) => {
        console.log(err);
    });
    return;
}

async function testGetComputationResult() {
    await qmpcClient.getComputationResult(jobUuid)
    .then((res: [boolean, string, JobStatus[], string[][] | string[][][]]) => {
        const expectedStatus = [JobStatus.COMPLETED, JobStatus.COMPLETED, JobStatus.COMPLETED];
        const expectedResult = [[3],[6],[9]];
        if(res[0]
           && JSON.stringify(res[2]) == JSON.stringify(expectedStatus)
           && JSON.stringify(res[3]) == JSON.stringify(expectedResult)) {
            console.log('getComputationResult Test: \u001b[32m' + 'Passed');
        } else {
            console.log('getComputationResult Test: \u001b[31m' + 'Failed');
        }
    })
    .catch((err: Error) => {
        console.log(err);
    });
    return;
}

async function testGetSchema() {
    await qmpcClient.getSchema(dataID1)
    .then((res: [boolean, string, string[]]) => {
        if(res[0] && res[1].length != 0) {
            console.log('getSchema Test: \u001b[32m' + 'Passed');
        } else {
            console.log('getSchema Test: \u001b[31m' + 'Failed');
        }
    })
    .catch((err: Error) => {
        console.log(err);
    });
    return;
}

async function testSendModelParams() {
    const params: string[][] = Share.sharize([1, 2, 3], 3);
    await qmpcClient.sendModelParams(params)
    .then((res: [boolean, string]) => {
        if(res[0] && res[1] != "") {
            console.log('sendModelParams Test: \u001b[32m' + 'Passed');
        } else {
            console.log('sendModelParams Test: \u001b[31m' + 'Failed');
        }
    })
    .catch((err: Error) => {
        console.log(err);
    });
    return;
}

async function testPredict() {
    await qmpcClient.predict(jobUuid, 1, [[dataID1], []], [0, 1])
    .then((res: [boolean, string, string[][] | string[][][]]) => {
        if(res[0] && res[1] == "ok") {
            console.log('predict Test: \u001b[32m' + 'Passed');
        } else {
            console.log('predict Test: \u001b[31m' + 'Failed');
        }
    })
    .catch((err: Error) => {
        console.log(err);
    });
    return;
}

testSendShares();
testGetSchema();
testExecuteComputation();
testGetComputationResult();
testSendModelParams();
testPredict();

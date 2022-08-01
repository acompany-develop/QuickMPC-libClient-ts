// grpc-webクライアントテストに使用するgrpcサーバの実装
import * as grpc from '@grpc/grpc-js';
import { SendSharesResponse, GetSchemaResponse, ExecuteComputationResponse, GetComputationResultResponse, SendModelParamResponse, PredictResponse } from '../../../Src/Proto/libc_to_manage_pb';
import { LibcToManageService } from '../../../Src/Proto/libc_to_manage_grpc_pb';
import { JobStatus } from '../../../Src/Proto/common_types/common_types_pb';

function sendShares(call: any, callback: any) {
    const res = new SendSharesResponse();
    res.setMessage("ok");
    res.setIsOk(true);
    callback(null, res);
}

function getSchema(call: any, callback: any) {
    const res = new GetSchemaResponse();
    res.setMessage("ok");
    res.setIsOk(true);
    res.setSchemaList(["attr1", "attr2", "attr3"]);
    callback(null, res);
}

function executeComputation(call: any, callback: any) {
    const res = new ExecuteComputationResponse();
    res.setMessage("ok");
    res.setIsOk(true);
    res.setJobUuid("job_uuid");
    callback(null, res);
}

function getComputationResult(call: any, callback: any) {
    const res = new GetComputationResultResponse();
    res.setMessage("ok");
    res.setIsOk(true);
    res.setStatus(JobStatus.COMPLETED);
    res.setResult("[[\"1\"],[\"2\"],[\"3\"]]");
    callback(null, res);
}

function sendModelParam(call: any, callback: any) {
    const res = new SendModelParamResponse();
    res.setMessage("ok");
    res.setIsOk(true);
    callback(null, res);
}

function predict(call: any, callback: any) {
    const res = new PredictResponse();
    res.setMessage("ok");
    res.setIsOk(true);
    callback(null, res);
}

export async function serve(num: number) {
    const grpcServer = new grpc.Server();

    grpcServer.addService(LibcToManageService, {
        sendShares,
        getSchema,
        executeComputation,
        getComputationResult,
        sendModelParam,
        predict
    });
    await grpcServer.bindAsync(`localhost:700${num}`, grpc.ServerCredentials.createInsecure(), () => {
        grpcServer.start();
    });
    return grpcServer;
}

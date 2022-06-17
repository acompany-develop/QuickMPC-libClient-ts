import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import * as Share from './Share';
import { validateDataId, validateJobId } from './Utils/ValidataId';
import { SendSharesRequest, DeleteSharesRequest, GetDataListRequest, GetSchemaRequest, ExecuteComputationRequest, GetComputationResultRequest, JoinOrder, Input, SendModelParamRequest, PredictRequest } from "./Proto/libc_to_manage_pb";
import { LibcToManageClient } from './Proto/Libc_to_manageServiceClientPb';
import { ComputationMethod, PredictMethod, JobStatus } from './Proto/common_types/common_types_pb';
import { handleGrpcError } from './Utils/HandleError';

export class Client {
    private endpoints: string[];
    private clients: LibcToManageClient[];
    private token: string;

    constructor(endpoints: string[], token: string) {
        this.endpoints = endpoints;
        this.clients = [];
        this.token = token;
        for(let i = 0; i < endpoints.length; i++) {
            this.clients[i] = new LibcToManageClient(this.endpoints[i], null, null);
        }
    }

    async sendShare(shares: string[][] | string[][][], schema: string[], dataId: string, pieceId: number): Promise<[boolean, string, string]> {

        if(shares.length != this.endpoints.length) {
            throw new Error("シェアの形式がパーティ数に対応していません.");
        }

        if(pieceId < 0){
            throw new Error("pieceIdの値が正ではありません.");
        }

        if(!validateDataId(dataId)) {
            throw new Error("dataIdが正しい形式ではありません.")
        }

        const sentAt = dayjs().locale('ja').format("YYYY-MM-DD HH:mm:ss");
        let reqs: SendSharesRequest[] = [];
        for(let i = 0; i < shares.length; i++) {
            const req = new SendSharesRequest();
            req.setDataId(dataId);
            req.setShares(JSON.stringify(shares[i]));
            req.setSchemaList(schema);
            req.setPieceId(pieceId);
            req.setSentAt(sentAt);
            req.setToken(this.token);
            reqs.push(req);
        }

        let isOk: boolean = true;
        let message: string = "ok";

        const promises = [];
        for(let i = 0; i < this.clients.length; i++) {
            promises.push(this.clients[i].sendShares(reqs[i], {}))
        }

        await Promise.all(promises)
        .then((res) => {
            for(let i = 0; i < res.length; i++) {
                if(!res[i].getIsOk()) {
                    message = res[i].getMessage();
                    isOk = false;
                    break;
                }
            }
        })
        .catch((err) => {
            if (err) {
                handleGrpcError(err.code);
            }
        });

        return [isOk, message, dataId];
    }

    async deleteShare(dataIds: string[]): Promise<[boolean, string]> {
        for (const dataId of dataIds) {
            if(!validateDataId(dataId)) {
                throw new Error("dataIdが正しい形式ではありません.")
            }
        }

        const req = new DeleteSharesRequest();
        req.setDataidsList(dataIds);
        req.setToken(this.token);

        let isOk: boolean = true;
        let message: string = "ok";

        const promises = [];
        for(let i = 0; i < this.clients.length; i++) {
            promises.push(this.clients[i].deleteShares(req, {}))
        }

        await Promise.all(promises)
        .then((res) => {
            for(let i = 0; i < res.length; i++) {
                if(!res[i].getIsOk()) {
                    message = res[i].getMessage();
                    isOk = false;
                    break;
                }
            }
        })
        .catch((err) => {
            if (err) {
                handleGrpcError(err.code);
            }
        });

        return [isOk, message];
    }

    async getSchema(dataId: string): Promise<[boolean, string, string[]]> {
        if(!validateDataId(dataId)) {
            throw new Error("dataIdが正しい形式ではありません.")
        }

        const req = new GetSchemaRequest();
        req.setDataId(dataId);
        req.setToken(this.token);


        let isOk: boolean = true;
        let message: string = "ok";
        let schema: string[] = [];

        await this.clients[0].getSchema(req, {})
        .then((res) => {
            if(!res.getIsOk()) {
                isOk = false;
                message = res.getMessage();
                return [isOk, message, schema];
            }
            schema = res.getSchemaList();
        })
        .catch((err) => {
            if (err) {
                handleGrpcError(err.code);
            }
        });

        return [isOk, message, schema];
    }

    async executeComputation(methodId: ComputationMethod, join_order: [string[], number[], number[]], inp: [number[], number[]?]): Promise<[boolean, string, string]>{
        if(join_order[1].find(element => element !== 0 && element !== 1) != undefined){
            throw new Error("joinの値が0または1ではありません.");
        }

        const methodList = Object.values(ComputationMethod) as number[];
        if(!methodList.includes(methodId) || methodId == ComputationMethod.COMPUTATION_METHOD_UNSPECIFIED){
            throw new Error("methodIdが不正な値です.");
        }

        if(inp[0].find(element => element < 0) != undefined) {
            throw new Error("srcの値が正の値ではありません.");
        }

        if(inp[1] !== undefined) {
            if(inp[1].find(element => element < 0) != undefined) {
                throw new Error("targetの値が正の値ではありません.");
            }
        }

        for (const dataId of join_order[0]) {
            if(!validateDataId(dataId)) {
                throw new Error("join_orderが正しい形式ではありません.")
            }
        }

        const req = new ExecuteComputationRequest();
        req.setMethodId(methodId);
        req.setToken(this.token);
        const table = new JoinOrder()
        table.setDataidsList(join_order[0])
        table.setJoinList(join_order[1])
        table.setIndexList(join_order[2])
        req.setTable(table)
        const arg = new Input()
        arg.setSrcList(inp[0])
        if(inp[1] !== undefined) {
            arg.setTargetList(inp[1])
        }
        req.setArg(arg)

        let isOk: boolean = true;
        let message: string = "ok";
        let jobUuid: string = "_";

        const promises = [];
        for(let i = 0; i < this.clients.length; i++) {
            promises.push(this.clients[i].executeComputation(req, {}))
        }

        await Promise.all(promises)
        .then((res) => {
            for(let i = 0; i < res.length; i++) {
                if(!res[i].getIsOk()) {
                    isOk = false;
                    message = res[i].getMessage();
                    return [isOk, message, jobUuid];
                }
            }
            jobUuid = res[0].getJobUuid();
        })
        .catch((err) => {
            if (err) {
                handleGrpcError(err.code);
            }
        });

        return [isOk, message, jobUuid];
    }

    async getComputationResult(jobUuid: string): Promise<[boolean, string, JobStatus[], any]> {
        if(!validateJobUuid(jobUuid)) {
            throw new Error("jobUuidが正しい形式ではありません.")
        }

        const req = new GetComputationResultRequest();
        req.setJobUuid(jobUuid);
        req.setToken(this.token);

        let isOk = true;
        let message: string = "ok";
        let statuses: JobStatus[] = [];
        let results: string[][] | string[][][] = [];
        let secrets: any = [];

        const promises = [];
        for(let i = 0; i < this.clients.length; i++) {
            promises.push(this.clients[i].getComputationResult(req, {}))
        }

        await Promise.all(promises)
        .then((res) => {
            for(let i = 0; i < res.length; i++) {
                statuses.push(res[i].getStatus());
            }

            for(let i = 0; i < res.length; i++) {
                if(!res[i].getIsOk()) {
                    isOk = false;
                    message = res[i].getMessage();
                    return [isOk, message, statuses, secrets];
                }
            }

            for(let i = 0; i < res.length; i++) {
                results.push(JSON.parse(res[i].getResult()));
            }
        })
        .catch((err) => {
            if (err) {
                handleGrpcError(err.code);
                throw err;
            }
        });

        // statusが全てCOMPLETEDでなければ復元せず返却する
        for(const s of statuses) {
            if(s != JobStatus.COMPLETED) {
                isOk = false;
                return [isOk, message, statuses, secrets];
            }
        }

        try {
            secrets = Share.recons(results as any);
        } catch(err) {
            throw new Error("シェアの復元に失敗しました.");
        }

        return [isOk, message, statuses, secrets];
    }

    async sendModelParams(params: string[][] | object[]): Promise<[boolean, string, string]> {
        if(params.length != this.endpoints.length) {
            throw new Error("パラメータのシェアの形式がパーティ数に対応していません.");
        }

        const modelParamJobUuid: string = uuidv4();
        let reqs: SendModelParamRequest[] = [];
        for(const param of params) {
            const req = new SendModelParamRequest();
            req.setJobUuid(modelParamJobUuid);
            req.setParams(JSON.stringify(param));
            req.setToken(this.token);
            reqs.push(req);
        }

        let isOk: boolean = true;
        let message: string = "ok";

        const promises = [];
        for(let i = 0; i < this.clients.length; i++) {
            promises.push(this.clients[i].sendModelParam(reqs[i], {}))
        }

        await Promise.all(promises)
        .then((res) => {
            for(let i = 0; i < res.length; i++) {
                if(!res[i].getIsOk()) {
                    message = res[i].getMessage();
                    isOk = false;
                    break;
                }
            }
        })
        .catch((err) => {
            if (err) {
                handleGrpcError(err.code);
            }
        });

        return [true, message, modelParamJobUuid];
    }

    async predict(modelParamJobUuid: string, modelId: PredictMethod, join_order: [string[], number[], number[]], src: number[]): Promise<[boolean, string, string]>{
        if(join_order[1].find(element => element !== 0 && element !== 1) != undefined){
            throw new Error("joinの値が0または1ではありません.");
        }

        const modelList = Object.values(PredictMethod) as number[];
        if(!modelList.includes(modelId) || modelId == PredictMethod.PREDICT_METHOD_UNSPECIFIED){
            throw new Error("modelIdが不正な値です.");
        }

        if(src.find(element => element < 0) != undefined) {
            throw new Error("srcの値が正の値ではありません.");
        }

        if(!validateJobUuid(modelParamJobUuid)) {
            throw new Error("modelParamJobUuidが正しい形式ではありません.")
        }

        for (const dataId of join_order[0]) {
            if(!validateDataId(dataId)) {
                throw new Error("join_orderが正しい形式ではありません.")
            }
        }

        const jobUuid: string = uuidv4();
        const req = new PredictRequest();
        req.setJobUuid(jobUuid);
        req.setModelParamJobUuid(modelParamJobUuid);
        req.setModelId(modelId);
        const table = new JoinOrder();
        table.setDataidsList(join_order[0]);
        table.setJoinList(join_order[1]);
        table.setIndexList(join_order[2]);
        req.setTable(table);
        req.setSrcList(src);
        req.setToken(this.token);

        let isOk: boolean = true;
        let message: string = "ok";

        const promises = [];
        for(let i = 0; i < this.clients.length; i++) {
            promises.push(this.clients[i].predict(req, {}))
        }

        await Promise.all(promises)
        .then((res) => {
            for(let i = 0; i < res.length; i++) {
                if(!res[i].getIsOk()) {
                    isOk = false;
                    message = res[i].getMessage();
                    return [isOk, message, jobUuid];
                }
            }
        })
        .catch((err) => {
            if (err) {
                handleGrpcError(err.code);
            }
        });

        return [isOk, message, jobUuid];
    }

    async getDataList(): Promise<[boolean, string[]]> {
        const req = new GetDataListRequest();
        req.setToken(this.token);

        let isOk: boolean = true;
        let dataList: string[] = []

        await this.clients[0].getDataList(req, {})
        .then((res) => {
            if(!res.getIsOk()) {
                isOk = false;
                return [isOk, dataList];
            }
            dataList = res.getResult();
        })
        .catch((err) => {
            if (err) {
                handleGrpcError(err.code);
            }
        });
        return [isOk, dataList];
    }
}

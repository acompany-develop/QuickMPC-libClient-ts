import crypto from 'crypto';
import { Client } from './Client';
import * as Share from './Share';
import { makePiece, parseCsv, parseCsvVector, parseJsonVector } from './Utils/ParseCsv';
import { ComputationMethod, PredictMethod, JobStatus } from './Proto/common_types/common_types_pb';

export class QuickMPC {
    private client: Client;
    private partySize: number;

    constructor(endpoints: string[], token = "token_demo") {
        this.partySize = endpoints.length;
        this.client = new Client(endpoints, token);
    }

    private sharize(secrets: any): any {
        return Share.sharize(secrets, this.partySize);
    }

    private recons(shares: any): any {
        return Share.recons(shares);
    }

    private generateDataId(data: string): string {
        // データとタイムスタンプを元にデータIDを生成
        return crypto.createHash('sha256').update(JSON.stringify(data + Date.now()), 'utf8').digest('hex');
    }

    async sendShare(data: string, matchingColumn: number = 1): Promise<[boolean, string, string]> {
        // dataをparseしてpieceごとに分割
        const [schema, secrets] = ((): [string[], number[][][]] => {
          try {
              const [schema, secrets] = parseCsv(data);
              secrets.sort((a, b):number => a[matchingColumn-1] - b[matchingColumn-1]);
              const secretsPiece = makePiece(secrets);
              return [schema, secretsPiece];
          } catch(err) {
              throw new Error("CSVのパースに失敗しました.");
          }
        })();

        let shares: string[][][] | string[][][][] = [];
        try {
            for(let i = 0; i < secrets.length; i++) {
                shares[i] = this.sharize(secrets[i]);
            }
        } catch(err) {
            throw new Error("シェア化に失敗しました.");
        }

        const dataId: string = this.generateDataId(data);
        let isOk = true, message = "ok";
        try {
            for(let i = 0; i < shares.length; i++) {
                [isOk, message] = await this.client.sendShare(shares[i], schema, dataId, i+1);
                if(!isOk) {
                    return [isOk, message, dataId]
                }
            }
        } catch(err) {
            throw err;
        }

        return [isOk, message, dataId];
    }

    async deleteShare(dataIds: string[]): Promise<[boolean, string]> {
        return await this.client.deleteShare(dataIds);
    }

    async getSchema(dataId: string): Promise<[boolean, string, string[]]> {
        return await this.client.getSchema(dataId);
    }

    async mean(join_order: [string[], number[], number[]], src: number[]): Promise<[boolean, string, string]> {
        try {
            return await this.client.executeComputation(ComputationMethod.COMPUTATION_METHOD_MEAN, join_order, [src, []]);
        } catch(err) {
            throw err;
        }
    }

    async variance(join_order: [string[], number[], number[]], src: number[]): Promise<[boolean, string, string]> {
        try {
            return await this.client.executeComputation(ComputationMethod.COMPUTATION_METHOD_VARIANCE, join_order, [src, []]);
        } catch(err) {
            throw err;
        }
    }

    async sum(join_order: [string[], number[], number[]], src: number[]): Promise<[boolean, string, string]> {
        try {
            return await this.client.executeComputation(ComputationMethod.COMPUTATION_METHOD_SUM, join_order, [src, []]);
        } catch(err) {
            throw err;
        }
    }

    async correl(join_order: [string[], number[], number[]], inp: [number[], number[]]): Promise<[boolean, string, string]> {
        try {
            return await this.client.executeComputation(ComputationMethod.COMPUTATION_METHOD_CORREL, join_order, inp);
        } catch(err) {
            throw err;
        }
    }

    async linearRegression(join_order: [string[], number[], number[]], inp: [number[], number[]]): Promise<[boolean, string, string]> {
        try {
            return await this.client.executeComputation(ComputationMethod.COMPUTATION_METHOD_LINEAR_REGRESSION, join_order, inp);
        } catch(err) {
            throw err;
        }
    }

    async logisticRegression(join_order: [string[], number[], number[]], inp: [number[], number[]]): Promise<[boolean, string, string]> {
        try {
            return await this.client.executeComputation(ComputationMethod.COMPUTATION_METHOD_LOGISTIC_REGRESSION, join_order, inp);
        } catch(err) {
            throw err;
        }
    }

    async getJoinTable(join_order: [string[], number[], number[]]): Promise<[boolean, string, string]> {
        try {
            return await this.client.executeComputation(ComputationMethod.COMPUTATION_METHOD_JOIN_TABLE, join_order, [[],[]]);
        } catch(err) {
            throw err;
        }
    }

    async getComputationResult(jobUuid: string): Promise<[boolean, string, JobStatus[], number[] | number[][]]> {
        try {
            return await this.client.getComputationResult(jobUuid);
        } catch(err) {
            throw err;
        }
    }

    async sendModelParams(data: string): Promise<[boolean, string, string]> {
        const params = parseCsvVector(data);

        let params_shares: string[][];
        try {
            params_shares = this.sharize(params);
        } catch(err) {
            throw new Error("シェア化に失敗しました.");
        }

        let isOk = true;
        let message = "ok";
        let modelParamJobUuid: string;
        try {
            [isOk, message, modelParamJobUuid] = await this.client.sendModelParams(params_shares);
            if(!isOk) {
                return [isOk, message, modelParamJobUuid]
            }
        } catch(err) {
            throw err;
        }

        return [isOk, message, modelParamJobUuid];
    }

    async sendModelParamsJson(data: string): Promise<[boolean, string, string]> {
        const params = parseJsonVector(data);

        let params_shares: object[];
        try {
            params_shares = this.sharize(params);
        } catch(err) {
            throw new Error("シェア化に失敗しました.");
        }

        let isOk = true;
        let message = "ok";
        let modelParamJobUuid: string;
        try {
            [isOk, message, modelParamJobUuid] = await this.client.sendModelParams(params_shares);
            if(!isOk) {
                return [isOk, message, modelParamJobUuid]
            }
        } catch(err) {
            throw err;
        }

        return [isOk, message, modelParamJobUuid];
    }

    async linearRegressionPredict(modelParamJobUuid: string, join_order: [string[], number[], number[]], src: number[]): Promise<[boolean, string, string]> {
        try {
            return await this.client.predict(modelParamJobUuid, PredictMethod.PREDICT_METHOD_LINEAR_REGRESSION, join_order, src);
        } catch(err) {
            throw err;
        }
    }

    async logisticRegressionPredict(modelParamJobUuid: string, join_order: [string[], number[], number[]], src: number[]): Promise<[boolean, string, string]> {
        try {
            return await this.client.predict(modelParamJobUuid, PredictMethod.PREDICT_METHOD_LOGISTIC_REGRESSION, join_order, src);
        } catch(err) {
            throw err;
        }
    }

    async decisionTreePredict(modelParamJobUuid: string, join_order: [string[], number[], number[]], src: number[]): Promise<[boolean, string, string]> {
        try {
            return await this.client.predict(modelParamJobUuid, PredictMethod.PREDICT_METHOD_DECISION_TREE, join_order, src);
        } catch(err) {
            throw err;
        }
    }

    async getDataList(): Promise<[boolean, object[]]> {
        return await this.client.getDataList();
    }
}

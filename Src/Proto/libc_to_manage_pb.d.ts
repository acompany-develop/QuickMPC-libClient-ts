import * as jspb from 'google-protobuf'

import * as common_types_common_types_pb from './common_types/common_types_pb';


export class SendSharesRequest extends jspb.Message {
  getDataId(): string;
  setDataId(value: string): SendSharesRequest;

  getShares(): string;
  setShares(value: string): SendSharesRequest;

  getSchemaList(): Array<string>;
  setSchemaList(value: Array<string>): SendSharesRequest;
  clearSchemaList(): SendSharesRequest;
  addSchema(value: string, index?: number): SendSharesRequest;

  getPieceId(): number;
  setPieceId(value: number): SendSharesRequest;

  getSentAt(): string;
  setSentAt(value: string): SendSharesRequest;

  getToken(): string;
  setToken(value: string): SendSharesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendSharesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendSharesRequest): SendSharesRequest.AsObject;
  static serializeBinaryToWriter(message: SendSharesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendSharesRequest;
  static deserializeBinaryFromReader(message: SendSharesRequest, reader: jspb.BinaryReader): SendSharesRequest;
}

export namespace SendSharesRequest {
  export type AsObject = {
    dataId: string,
    shares: string,
    schemaList: Array<string>,
    pieceId: number,
    sentAt: string,
    token: string,
  }
}

export class SendSharesResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): SendSharesResponse;

  getIsOk(): boolean;
  setIsOk(value: boolean): SendSharesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendSharesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendSharesResponse): SendSharesResponse.AsObject;
  static serializeBinaryToWriter(message: SendSharesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendSharesResponse;
  static deserializeBinaryFromReader(message: SendSharesResponse, reader: jspb.BinaryReader): SendSharesResponse;
}

export namespace SendSharesResponse {
  export type AsObject = {
    message: string,
    isOk: boolean,
  }
}

export class DeleteSharesRequest extends jspb.Message {
  getDataidsList(): Array<string>;
  setDataidsList(value: Array<string>): DeleteSharesRequest;
  clearDataidsList(): DeleteSharesRequest;
  addDataids(value: string, index?: number): DeleteSharesRequest;

  getToken(): string;
  setToken(value: string): DeleteSharesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSharesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSharesRequest): DeleteSharesRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteSharesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSharesRequest;
  static deserializeBinaryFromReader(message: DeleteSharesRequest, reader: jspb.BinaryReader): DeleteSharesRequest;
}

export namespace DeleteSharesRequest {
  export type AsObject = {
    dataidsList: Array<string>,
    token: string,
  }
}

export class DeleteSharesResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): DeleteSharesResponse;

  getIsOk(): boolean;
  setIsOk(value: boolean): DeleteSharesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSharesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSharesResponse): DeleteSharesResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteSharesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSharesResponse;
  static deserializeBinaryFromReader(message: DeleteSharesResponse, reader: jspb.BinaryReader): DeleteSharesResponse;
}

export namespace DeleteSharesResponse {
  export type AsObject = {
    message: string,
    isOk: boolean,
  }
}

export class GetSchemaRequest extends jspb.Message {
  getDataId(): string;
  setDataId(value: string): GetSchemaRequest;

  getToken(): string;
  setToken(value: string): GetSchemaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSchemaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSchemaRequest): GetSchemaRequest.AsObject;
  static serializeBinaryToWriter(message: GetSchemaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSchemaRequest;
  static deserializeBinaryFromReader(message: GetSchemaRequest, reader: jspb.BinaryReader): GetSchemaRequest;
}

export namespace GetSchemaRequest {
  export type AsObject = {
    dataId: string,
    token: string,
  }
}

export class GetSchemaResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): GetSchemaResponse;

  getIsOk(): boolean;
  setIsOk(value: boolean): GetSchemaResponse;

  getSchemaList(): Array<string>;
  setSchemaList(value: Array<string>): GetSchemaResponse;
  clearSchemaList(): GetSchemaResponse;
  addSchema(value: string, index?: number): GetSchemaResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSchemaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSchemaResponse): GetSchemaResponse.AsObject;
  static serializeBinaryToWriter(message: GetSchemaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSchemaResponse;
  static deserializeBinaryFromReader(message: GetSchemaResponse, reader: jspb.BinaryReader): GetSchemaResponse;
}

export namespace GetSchemaResponse {
  export type AsObject = {
    message: string,
    isOk: boolean,
    schemaList: Array<string>,
  }
}

export class JoinOrder extends jspb.Message {
  getDataidsList(): Array<string>;
  setDataidsList(value: Array<string>): JoinOrder;
  clearDataidsList(): JoinOrder;
  addDataids(value: string, index?: number): JoinOrder;

  getJoinList(): Array<number>;
  setJoinList(value: Array<number>): JoinOrder;
  clearJoinList(): JoinOrder;
  addJoin(value: number, index?: number): JoinOrder;

  getIndexList(): Array<number>;
  setIndexList(value: Array<number>): JoinOrder;
  clearIndexList(): JoinOrder;
  addIndex(value: number, index?: number): JoinOrder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinOrder.AsObject;
  static toObject(includeInstance: boolean, msg: JoinOrder): JoinOrder.AsObject;
  static serializeBinaryToWriter(message: JoinOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinOrder;
  static deserializeBinaryFromReader(message: JoinOrder, reader: jspb.BinaryReader): JoinOrder;
}

export namespace JoinOrder {
  export type AsObject = {
    dataidsList: Array<string>,
    joinList: Array<number>,
    indexList: Array<number>,
  }
}

export class Input extends jspb.Message {
  getSrcList(): Array<number>;
  setSrcList(value: Array<number>): Input;
  clearSrcList(): Input;
  addSrc(value: number, index?: number): Input;

  getTargetList(): Array<number>;
  setTargetList(value: Array<number>): Input;
  clearTargetList(): Input;
  addTarget(value: number, index?: number): Input;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Input.AsObject;
  static toObject(includeInstance: boolean, msg: Input): Input.AsObject;
  static serializeBinaryToWriter(message: Input, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Input;
  static deserializeBinaryFromReader(message: Input, reader: jspb.BinaryReader): Input;
}

export namespace Input {
  export type AsObject = {
    srcList: Array<number>,
    targetList: Array<number>,
  }
}

export class ExecuteComputationRequest extends jspb.Message {
  getMethodId(): common_types_common_types_pb.ComputationMethod;
  setMethodId(value: common_types_common_types_pb.ComputationMethod): ExecuteComputationRequest;

  getToken(): string;
  setToken(value: string): ExecuteComputationRequest;

  getTable(): JoinOrder | undefined;
  setTable(value?: JoinOrder): ExecuteComputationRequest;
  hasTable(): boolean;
  clearTable(): ExecuteComputationRequest;

  getArg(): Input | undefined;
  setArg(value?: Input): ExecuteComputationRequest;
  hasArg(): boolean;
  clearArg(): ExecuteComputationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteComputationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteComputationRequest): ExecuteComputationRequest.AsObject;
  static serializeBinaryToWriter(message: ExecuteComputationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteComputationRequest;
  static deserializeBinaryFromReader(message: ExecuteComputationRequest, reader: jspb.BinaryReader): ExecuteComputationRequest;
}

export namespace ExecuteComputationRequest {
  export type AsObject = {
    methodId: common_types_common_types_pb.ComputationMethod,
    token: string,
    table?: JoinOrder.AsObject,
    arg?: Input.AsObject,
  }
}

export class ExecuteComputationResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): ExecuteComputationResponse;

  getIsOk(): boolean;
  setIsOk(value: boolean): ExecuteComputationResponse;

  getJobUuid(): string;
  setJobUuid(value: string): ExecuteComputationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteComputationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteComputationResponse): ExecuteComputationResponse.AsObject;
  static serializeBinaryToWriter(message: ExecuteComputationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteComputationResponse;
  static deserializeBinaryFromReader(message: ExecuteComputationResponse, reader: jspb.BinaryReader): ExecuteComputationResponse;
}

export namespace ExecuteComputationResponse {
  export type AsObject = {
    message: string,
    isOk: boolean,
    jobUuid: string,
  }
}

export class GetComputationResultRequest extends jspb.Message {
  getJobUuid(): string;
  setJobUuid(value: string): GetComputationResultRequest;

  getToken(): string;
  setToken(value: string): GetComputationResultRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetComputationResultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetComputationResultRequest): GetComputationResultRequest.AsObject;
  static serializeBinaryToWriter(message: GetComputationResultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetComputationResultRequest;
  static deserializeBinaryFromReader(message: GetComputationResultRequest, reader: jspb.BinaryReader): GetComputationResultRequest;
}

export namespace GetComputationResultRequest {
  export type AsObject = {
    jobUuid: string,
    token: string,
  }
}

export class GetComputationResultResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): GetComputationResultResponse;

  getIsOk(): boolean;
  setIsOk(value: boolean): GetComputationResultResponse;

  getResult(): string;
  setResult(value: string): GetComputationResultResponse;

  getStatus(): common_types_common_types_pb.JobStatus;
  setStatus(value: common_types_common_types_pb.JobStatus): GetComputationResultResponse;

  getPieceId(): number;
  setPieceId(value: number): GetComputationResultResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetComputationResultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetComputationResultResponse): GetComputationResultResponse.AsObject;
  static serializeBinaryToWriter(message: GetComputationResultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetComputationResultResponse;
  static deserializeBinaryFromReader(message: GetComputationResultResponse, reader: jspb.BinaryReader): GetComputationResultResponse;
}

export namespace GetComputationResultResponse {
  export type AsObject = {
    message: string,
    isOk: boolean,
    result: string,
    status: common_types_common_types_pb.JobStatus,
    pieceId: number,
  }
}

export class SendModelParamRequest extends jspb.Message {
  getJobUuid(): string;
  setJobUuid(value: string): SendModelParamRequest;

  getParams(): string;
  setParams(value: string): SendModelParamRequest;

  getPieceId(): number;
  setPieceId(value: number): SendModelParamRequest;

  getToken(): string;
  setToken(value: string): SendModelParamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendModelParamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendModelParamRequest): SendModelParamRequest.AsObject;
  static serializeBinaryToWriter(message: SendModelParamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendModelParamRequest;
  static deserializeBinaryFromReader(message: SendModelParamRequest, reader: jspb.BinaryReader): SendModelParamRequest;
}

export namespace SendModelParamRequest {
  export type AsObject = {
    jobUuid: string,
    params: string,
    pieceId: number,
    token: string,
  }
}

export class SendModelParamResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): SendModelParamResponse;

  getIsOk(): boolean;
  setIsOk(value: boolean): SendModelParamResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendModelParamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendModelParamResponse): SendModelParamResponse.AsObject;
  static serializeBinaryToWriter(message: SendModelParamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendModelParamResponse;
  static deserializeBinaryFromReader(message: SendModelParamResponse, reader: jspb.BinaryReader): SendModelParamResponse;
}

export namespace SendModelParamResponse {
  export type AsObject = {
    message: string,
    isOk: boolean,
  }
}

export class PredictRequest extends jspb.Message {
  getJobUuid(): string;
  setJobUuid(value: string): PredictRequest;

  getModelParamJobUuid(): string;
  setModelParamJobUuid(value: string): PredictRequest;

  getModelId(): common_types_common_types_pb.PredictMethod;
  setModelId(value: common_types_common_types_pb.PredictMethod): PredictRequest;

  getTable(): JoinOrder | undefined;
  setTable(value?: JoinOrder): PredictRequest;
  hasTable(): boolean;
  clearTable(): PredictRequest;

  getSrcList(): Array<number>;
  setSrcList(value: Array<number>): PredictRequest;
  clearSrcList(): PredictRequest;
  addSrc(value: number, index?: number): PredictRequest;

  getToken(): string;
  setToken(value: string): PredictRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PredictRequest): PredictRequest.AsObject;
  static serializeBinaryToWriter(message: PredictRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictRequest;
  static deserializeBinaryFromReader(message: PredictRequest, reader: jspb.BinaryReader): PredictRequest;
}

export namespace PredictRequest {
  export type AsObject = {
    jobUuid: string,
    modelParamJobUuid: string,
    modelId: common_types_common_types_pb.PredictMethod,
    table?: JoinOrder.AsObject,
    srcList: Array<number>,
    token: string,
  }
}

export class PredictResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): PredictResponse;

  getIsOk(): boolean;
  setIsOk(value: boolean): PredictResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PredictResponse): PredictResponse.AsObject;
  static serializeBinaryToWriter(message: PredictResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictResponse;
  static deserializeBinaryFromReader(message: PredictResponse, reader: jspb.BinaryReader): PredictResponse;
}

export namespace PredictResponse {
  export type AsObject = {
    message: string,
    isOk: boolean,
  }
}

export class GetDataListRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): GetDataListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDataListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDataListRequest): GetDataListRequest.AsObject;
  static serializeBinaryToWriter(message: GetDataListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDataListRequest;
  static deserializeBinaryFromReader(message: GetDataListRequest, reader: jspb.BinaryReader): GetDataListRequest;
}

export namespace GetDataListRequest {
  export type AsObject = {
    token: string,
  }
}

export class GetDataListResponse extends jspb.Message {
  getResult(): string;
  setResult(value: string): GetDataListResponse;

  getIsOk(): boolean;
  setIsOk(value: boolean): GetDataListResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDataListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDataListResponse): GetDataListResponse.AsObject;
  static serializeBinaryToWriter(message: GetDataListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDataListResponse;
  static deserializeBinaryFromReader(message: GetDataListResponse, reader: jspb.BinaryReader): GetDataListResponse;
}

export namespace GetDataListResponse {
  export type AsObject = {
    result: string,
    isOk: boolean,
  }
}


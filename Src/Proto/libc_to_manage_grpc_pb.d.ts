// package: libctomanage
// file: libc_to_manage.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as libc_to_manage_pb from "./libc_to_manage_pb";
import * as common_types_common_types_pb from "./common_types/common_types_pb";

interface ILibcToManageService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sendShares: ILibcToManageService_ISendShares;
    deleteShares: ILibcToManageService_IDeleteShares;
    getSchema: ILibcToManageService_IGetSchema;
    executeComputation: ILibcToManageService_IExecuteComputation;
    getComputationResult: ILibcToManageService_IGetComputationResult;
    sendModelParam: ILibcToManageService_ISendModelParam;
    predict: ILibcToManageService_IPredict;
    getDataList: ILibcToManageService_IGetDataList;
}

interface ILibcToManageService_ISendShares extends grpc.MethodDefinition<libc_to_manage_pb.SendSharesRequest, libc_to_manage_pb.SendSharesResponse> {
    path: "/libctomanage.LibcToManage/SendShares";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<libc_to_manage_pb.SendSharesRequest>;
    requestDeserialize: grpc.deserialize<libc_to_manage_pb.SendSharesRequest>;
    responseSerialize: grpc.serialize<libc_to_manage_pb.SendSharesResponse>;
    responseDeserialize: grpc.deserialize<libc_to_manage_pb.SendSharesResponse>;
}
interface ILibcToManageService_IDeleteShares extends grpc.MethodDefinition<libc_to_manage_pb.DeleteSharesRequest, libc_to_manage_pb.DeleteSharesResponse> {
    path: "/libctomanage.LibcToManage/DeleteShares";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<libc_to_manage_pb.DeleteSharesRequest>;
    requestDeserialize: grpc.deserialize<libc_to_manage_pb.DeleteSharesRequest>;
    responseSerialize: grpc.serialize<libc_to_manage_pb.DeleteSharesResponse>;
    responseDeserialize: grpc.deserialize<libc_to_manage_pb.DeleteSharesResponse>;
}
interface ILibcToManageService_IGetSchema extends grpc.MethodDefinition<libc_to_manage_pb.GetSchemaRequest, libc_to_manage_pb.GetSchemaResponse> {
    path: "/libctomanage.LibcToManage/GetSchema";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<libc_to_manage_pb.GetSchemaRequest>;
    requestDeserialize: grpc.deserialize<libc_to_manage_pb.GetSchemaRequest>;
    responseSerialize: grpc.serialize<libc_to_manage_pb.GetSchemaResponse>;
    responseDeserialize: grpc.deserialize<libc_to_manage_pb.GetSchemaResponse>;
}
interface ILibcToManageService_IExecuteComputation extends grpc.MethodDefinition<libc_to_manage_pb.ExecuteComputationRequest, libc_to_manage_pb.ExecuteComputationResponse> {
    path: "/libctomanage.LibcToManage/ExecuteComputation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<libc_to_manage_pb.ExecuteComputationRequest>;
    requestDeserialize: grpc.deserialize<libc_to_manage_pb.ExecuteComputationRequest>;
    responseSerialize: grpc.serialize<libc_to_manage_pb.ExecuteComputationResponse>;
    responseDeserialize: grpc.deserialize<libc_to_manage_pb.ExecuteComputationResponse>;
}
interface ILibcToManageService_IGetComputationResult extends grpc.MethodDefinition<libc_to_manage_pb.GetComputationResultRequest, libc_to_manage_pb.GetComputationResultResponse> {
    path: "/libctomanage.LibcToManage/GetComputationResult";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<libc_to_manage_pb.GetComputationResultRequest>;
    requestDeserialize: grpc.deserialize<libc_to_manage_pb.GetComputationResultRequest>;
    responseSerialize: grpc.serialize<libc_to_manage_pb.GetComputationResultResponse>;
    responseDeserialize: grpc.deserialize<libc_to_manage_pb.GetComputationResultResponse>;
}
interface ILibcToManageService_ISendModelParam extends grpc.MethodDefinition<libc_to_manage_pb.SendModelParamRequest, libc_to_manage_pb.SendModelParamResponse> {
    path: "/libctomanage.LibcToManage/SendModelParam";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<libc_to_manage_pb.SendModelParamRequest>;
    requestDeserialize: grpc.deserialize<libc_to_manage_pb.SendModelParamRequest>;
    responseSerialize: grpc.serialize<libc_to_manage_pb.SendModelParamResponse>;
    responseDeserialize: grpc.deserialize<libc_to_manage_pb.SendModelParamResponse>;
}
interface ILibcToManageService_IPredict extends grpc.MethodDefinition<libc_to_manage_pb.PredictRequest, libc_to_manage_pb.PredictResponse> {
    path: "/libctomanage.LibcToManage/Predict";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<libc_to_manage_pb.PredictRequest>;
    requestDeserialize: grpc.deserialize<libc_to_manage_pb.PredictRequest>;
    responseSerialize: grpc.serialize<libc_to_manage_pb.PredictResponse>;
    responseDeserialize: grpc.deserialize<libc_to_manage_pb.PredictResponse>;
}
interface ILibcToManageService_IGetDataList extends grpc.MethodDefinition<libc_to_manage_pb.GetDataListRequest, libc_to_manage_pb.GetDataListResponse> {
    path: "/libctomanage.LibcToManage/GetDataList";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<libc_to_manage_pb.GetDataListRequest>;
    requestDeserialize: grpc.deserialize<libc_to_manage_pb.GetDataListRequest>;
    responseSerialize: grpc.serialize<libc_to_manage_pb.GetDataListResponse>;
    responseDeserialize: grpc.deserialize<libc_to_manage_pb.GetDataListResponse>;
}

export const LibcToManageService: ILibcToManageService;

export interface ILibcToManageServer extends grpc.UntypedServiceImplementation {
    sendShares: grpc.handleUnaryCall<libc_to_manage_pb.SendSharesRequest, libc_to_manage_pb.SendSharesResponse>;
    deleteShares: grpc.handleUnaryCall<libc_to_manage_pb.DeleteSharesRequest, libc_to_manage_pb.DeleteSharesResponse>;
    getSchema: grpc.handleUnaryCall<libc_to_manage_pb.GetSchemaRequest, libc_to_manage_pb.GetSchemaResponse>;
    executeComputation: grpc.handleUnaryCall<libc_to_manage_pb.ExecuteComputationRequest, libc_to_manage_pb.ExecuteComputationResponse>;
    getComputationResult: grpc.handleServerStreamingCall<libc_to_manage_pb.GetComputationResultRequest, libc_to_manage_pb.GetComputationResultResponse>;
    sendModelParam: grpc.handleUnaryCall<libc_to_manage_pb.SendModelParamRequest, libc_to_manage_pb.SendModelParamResponse>;
    predict: grpc.handleUnaryCall<libc_to_manage_pb.PredictRequest, libc_to_manage_pb.PredictResponse>;
    getDataList: grpc.handleUnaryCall<libc_to_manage_pb.GetDataListRequest, libc_to_manage_pb.GetDataListResponse>;
}

export interface ILibcToManageClient {
    sendShares(request: libc_to_manage_pb.SendSharesRequest, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.SendSharesResponse) => void): grpc.ClientUnaryCall;
    sendShares(request: libc_to_manage_pb.SendSharesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.SendSharesResponse) => void): grpc.ClientUnaryCall;
    sendShares(request: libc_to_manage_pb.SendSharesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.SendSharesResponse) => void): grpc.ClientUnaryCall;
    deleteShares(request: libc_to_manage_pb.DeleteSharesRequest, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.DeleteSharesResponse) => void): grpc.ClientUnaryCall;
    deleteShares(request: libc_to_manage_pb.DeleteSharesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.DeleteSharesResponse) => void): grpc.ClientUnaryCall;
    deleteShares(request: libc_to_manage_pb.DeleteSharesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.DeleteSharesResponse) => void): grpc.ClientUnaryCall;
    getSchema(request: libc_to_manage_pb.GetSchemaRequest, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.GetSchemaResponse) => void): grpc.ClientUnaryCall;
    getSchema(request: libc_to_manage_pb.GetSchemaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.GetSchemaResponse) => void): grpc.ClientUnaryCall;
    getSchema(request: libc_to_manage_pb.GetSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.GetSchemaResponse) => void): grpc.ClientUnaryCall;
    executeComputation(request: libc_to_manage_pb.ExecuteComputationRequest, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.ExecuteComputationResponse) => void): grpc.ClientUnaryCall;
    executeComputation(request: libc_to_manage_pb.ExecuteComputationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.ExecuteComputationResponse) => void): grpc.ClientUnaryCall;
    executeComputation(request: libc_to_manage_pb.ExecuteComputationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.ExecuteComputationResponse) => void): grpc.ClientUnaryCall;
    getComputationResult(request: libc_to_manage_pb.GetComputationResultRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<libc_to_manage_pb.GetComputationResultResponse>;
    getComputationResult(request: libc_to_manage_pb.GetComputationResultRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<libc_to_manage_pb.GetComputationResultResponse>;
    sendModelParam(request: libc_to_manage_pb.SendModelParamRequest, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.SendModelParamResponse) => void): grpc.ClientUnaryCall;
    sendModelParam(request: libc_to_manage_pb.SendModelParamRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.SendModelParamResponse) => void): grpc.ClientUnaryCall;
    sendModelParam(request: libc_to_manage_pb.SendModelParamRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.SendModelParamResponse) => void): grpc.ClientUnaryCall;
    predict(request: libc_to_manage_pb.PredictRequest, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.PredictResponse) => void): grpc.ClientUnaryCall;
    predict(request: libc_to_manage_pb.PredictRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.PredictResponse) => void): grpc.ClientUnaryCall;
    predict(request: libc_to_manage_pb.PredictRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.PredictResponse) => void): grpc.ClientUnaryCall;
    getDataList(request: libc_to_manage_pb.GetDataListRequest, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.GetDataListResponse) => void): grpc.ClientUnaryCall;
    getDataList(request: libc_to_manage_pb.GetDataListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.GetDataListResponse) => void): grpc.ClientUnaryCall;
    getDataList(request: libc_to_manage_pb.GetDataListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.GetDataListResponse) => void): grpc.ClientUnaryCall;
}

export class LibcToManageClient extends grpc.Client implements ILibcToManageClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public sendShares(request: libc_to_manage_pb.SendSharesRequest, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.SendSharesResponse) => void): grpc.ClientUnaryCall;
    public sendShares(request: libc_to_manage_pb.SendSharesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.SendSharesResponse) => void): grpc.ClientUnaryCall;
    public sendShares(request: libc_to_manage_pb.SendSharesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.SendSharesResponse) => void): grpc.ClientUnaryCall;
    public deleteShares(request: libc_to_manage_pb.DeleteSharesRequest, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.DeleteSharesResponse) => void): grpc.ClientUnaryCall;
    public deleteShares(request: libc_to_manage_pb.DeleteSharesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.DeleteSharesResponse) => void): grpc.ClientUnaryCall;
    public deleteShares(request: libc_to_manage_pb.DeleteSharesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.DeleteSharesResponse) => void): grpc.ClientUnaryCall;
    public getSchema(request: libc_to_manage_pb.GetSchemaRequest, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.GetSchemaResponse) => void): grpc.ClientUnaryCall;
    public getSchema(request: libc_to_manage_pb.GetSchemaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.GetSchemaResponse) => void): grpc.ClientUnaryCall;
    public getSchema(request: libc_to_manage_pb.GetSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.GetSchemaResponse) => void): grpc.ClientUnaryCall;
    public executeComputation(request: libc_to_manage_pb.ExecuteComputationRequest, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.ExecuteComputationResponse) => void): grpc.ClientUnaryCall;
    public executeComputation(request: libc_to_manage_pb.ExecuteComputationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.ExecuteComputationResponse) => void): grpc.ClientUnaryCall;
    public executeComputation(request: libc_to_manage_pb.ExecuteComputationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.ExecuteComputationResponse) => void): grpc.ClientUnaryCall;
    public getComputationResult(request: libc_to_manage_pb.GetComputationResultRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<libc_to_manage_pb.GetComputationResultResponse>;
    public getComputationResult(request: libc_to_manage_pb.GetComputationResultRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<libc_to_manage_pb.GetComputationResultResponse>;
    public sendModelParam(request: libc_to_manage_pb.SendModelParamRequest, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.SendModelParamResponse) => void): grpc.ClientUnaryCall;
    public sendModelParam(request: libc_to_manage_pb.SendModelParamRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.SendModelParamResponse) => void): grpc.ClientUnaryCall;
    public sendModelParam(request: libc_to_manage_pb.SendModelParamRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.SendModelParamResponse) => void): grpc.ClientUnaryCall;
    public predict(request: libc_to_manage_pb.PredictRequest, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.PredictResponse) => void): grpc.ClientUnaryCall;
    public predict(request: libc_to_manage_pb.PredictRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.PredictResponse) => void): grpc.ClientUnaryCall;
    public predict(request: libc_to_manage_pb.PredictRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.PredictResponse) => void): grpc.ClientUnaryCall;
    public getDataList(request: libc_to_manage_pb.GetDataListRequest, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.GetDataListResponse) => void): grpc.ClientUnaryCall;
    public getDataList(request: libc_to_manage_pb.GetDataListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.GetDataListResponse) => void): grpc.ClientUnaryCall;
    public getDataList(request: libc_to_manage_pb.GetDataListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: libc_to_manage_pb.GetDataListResponse) => void): grpc.ClientUnaryCall;
}

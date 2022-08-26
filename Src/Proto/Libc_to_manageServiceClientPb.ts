/**
 * @fileoverview gRPC-Web generated client stub for libctomanage
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as libc_to_manage_pb from './libc_to_manage_pb';


export class LibcToManageClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoSendShares = new grpcWeb.MethodDescriptor(
    '/libctomanage.LibcToManage/SendShares',
    grpcWeb.MethodType.UNARY,
    libc_to_manage_pb.SendSharesRequest,
    libc_to_manage_pb.SendSharesResponse,
    (request: libc_to_manage_pb.SendSharesRequest) => {
      return request.serializeBinary();
    },
    libc_to_manage_pb.SendSharesResponse.deserializeBinary
  );

  sendShares(
    request: libc_to_manage_pb.SendSharesRequest,
    metadata: grpcWeb.Metadata | null): Promise<libc_to_manage_pb.SendSharesResponse>;

  sendShares(
    request: libc_to_manage_pb.SendSharesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: libc_to_manage_pb.SendSharesResponse) => void): grpcWeb.ClientReadableStream<libc_to_manage_pb.SendSharesResponse>;

  sendShares(
    request: libc_to_manage_pb.SendSharesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: libc_to_manage_pb.SendSharesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/libctomanage.LibcToManage/SendShares',
        request,
        metadata || {},
        this.methodInfoSendShares,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/libctomanage.LibcToManage/SendShares',
    request,
    metadata || {},
    this.methodInfoSendShares);
  }

  methodInfoDeleteShares = new grpcWeb.MethodDescriptor(
    '/libctomanage.LibcToManage/DeleteShares',
    grpcWeb.MethodType.UNARY,
    libc_to_manage_pb.DeleteSharesRequest,
    libc_to_manage_pb.DeleteSharesResponse,
    (request: libc_to_manage_pb.DeleteSharesRequest) => {
      return request.serializeBinary();
    },
    libc_to_manage_pb.DeleteSharesResponse.deserializeBinary
  );

  deleteShares(
    request: libc_to_manage_pb.DeleteSharesRequest,
    metadata: grpcWeb.Metadata | null): Promise<libc_to_manage_pb.DeleteSharesResponse>;

  deleteShares(
    request: libc_to_manage_pb.DeleteSharesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: libc_to_manage_pb.DeleteSharesResponse) => void): grpcWeb.ClientReadableStream<libc_to_manage_pb.DeleteSharesResponse>;

  deleteShares(
    request: libc_to_manage_pb.DeleteSharesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: libc_to_manage_pb.DeleteSharesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/libctomanage.LibcToManage/DeleteShares',
        request,
        metadata || {},
        this.methodInfoDeleteShares,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/libctomanage.LibcToManage/DeleteShares',
    request,
    metadata || {},
    this.methodInfoDeleteShares);
  }

  methodInfoGetSchema = new grpcWeb.MethodDescriptor(
    '/libctomanage.LibcToManage/GetSchema',
    grpcWeb.MethodType.UNARY,
    libc_to_manage_pb.GetSchemaRequest,
    libc_to_manage_pb.GetSchemaResponse,
    (request: libc_to_manage_pb.GetSchemaRequest) => {
      return request.serializeBinary();
    },
    libc_to_manage_pb.GetSchemaResponse.deserializeBinary
  );

  getSchema(
    request: libc_to_manage_pb.GetSchemaRequest,
    metadata: grpcWeb.Metadata | null): Promise<libc_to_manage_pb.GetSchemaResponse>;

  getSchema(
    request: libc_to_manage_pb.GetSchemaRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: libc_to_manage_pb.GetSchemaResponse) => void): grpcWeb.ClientReadableStream<libc_to_manage_pb.GetSchemaResponse>;

  getSchema(
    request: libc_to_manage_pb.GetSchemaRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: libc_to_manage_pb.GetSchemaResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/libctomanage.LibcToManage/GetSchema',
        request,
        metadata || {},
        this.methodInfoGetSchema,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/libctomanage.LibcToManage/GetSchema',
    request,
    metadata || {},
    this.methodInfoGetSchema);
  }

  methodInfoExecuteComputation = new grpcWeb.MethodDescriptor(
    '/libctomanage.LibcToManage/ExecuteComputation',
    grpcWeb.MethodType.UNARY,
    libc_to_manage_pb.ExecuteComputationRequest,
    libc_to_manage_pb.ExecuteComputationResponse,
    (request: libc_to_manage_pb.ExecuteComputationRequest) => {
      return request.serializeBinary();
    },
    libc_to_manage_pb.ExecuteComputationResponse.deserializeBinary
  );

  executeComputation(
    request: libc_to_manage_pb.ExecuteComputationRequest,
    metadata: grpcWeb.Metadata | null): Promise<libc_to_manage_pb.ExecuteComputationResponse>;

  executeComputation(
    request: libc_to_manage_pb.ExecuteComputationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: libc_to_manage_pb.ExecuteComputationResponse) => void): grpcWeb.ClientReadableStream<libc_to_manage_pb.ExecuteComputationResponse>;

  executeComputation(
    request: libc_to_manage_pb.ExecuteComputationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: libc_to_manage_pb.ExecuteComputationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/libctomanage.LibcToManage/ExecuteComputation',
        request,
        metadata || {},
        this.methodInfoExecuteComputation,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/libctomanage.LibcToManage/ExecuteComputation',
    request,
    metadata || {},
    this.methodInfoExecuteComputation);
  }

  methodInfoGetComputationResult = new grpcWeb.MethodDescriptor(
    '/libctomanage.LibcToManage/GetComputationResult',
    grpcWeb.MethodType.SERVER_STREAMING,
    libc_to_manage_pb.GetComputationResultRequest,
    libc_to_manage_pb.GetComputationResultResponse,
    (request: libc_to_manage_pb.GetComputationResultRequest) => {
      return request.serializeBinary();
    },
    libc_to_manage_pb.GetComputationResultResponse.deserializeBinary
  );

  getComputationResult(
    request: libc_to_manage_pb.GetComputationResultRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/libctomanage.LibcToManage/GetComputationResult',
      request,
      metadata || {},
      this.methodInfoGetComputationResult);
  }

  methodInfoSendModelParam = new grpcWeb.MethodDescriptor(
    '/libctomanage.LibcToManage/SendModelParam',
    grpcWeb.MethodType.UNARY,
    libc_to_manage_pb.SendModelParamRequest,
    libc_to_manage_pb.SendModelParamResponse,
    (request: libc_to_manage_pb.SendModelParamRequest) => {
      return request.serializeBinary();
    },
    libc_to_manage_pb.SendModelParamResponse.deserializeBinary
  );

  sendModelParam(
    request: libc_to_manage_pb.SendModelParamRequest,
    metadata: grpcWeb.Metadata | null): Promise<libc_to_manage_pb.SendModelParamResponse>;

  sendModelParam(
    request: libc_to_manage_pb.SendModelParamRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: libc_to_manage_pb.SendModelParamResponse) => void): grpcWeb.ClientReadableStream<libc_to_manage_pb.SendModelParamResponse>;

  sendModelParam(
    request: libc_to_manage_pb.SendModelParamRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: libc_to_manage_pb.SendModelParamResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/libctomanage.LibcToManage/SendModelParam',
        request,
        metadata || {},
        this.methodInfoSendModelParam,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/libctomanage.LibcToManage/SendModelParam',
    request,
    metadata || {},
    this.methodInfoSendModelParam);
  }

  methodInfoPredict = new grpcWeb.MethodDescriptor(
    '/libctomanage.LibcToManage/Predict',
    grpcWeb.MethodType.UNARY,
    libc_to_manage_pb.PredictRequest,
    libc_to_manage_pb.PredictResponse,
    (request: libc_to_manage_pb.PredictRequest) => {
      return request.serializeBinary();
    },
    libc_to_manage_pb.PredictResponse.deserializeBinary
  );

  predict(
    request: libc_to_manage_pb.PredictRequest,
    metadata: grpcWeb.Metadata | null): Promise<libc_to_manage_pb.PredictResponse>;

  predict(
    request: libc_to_manage_pb.PredictRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: libc_to_manage_pb.PredictResponse) => void): grpcWeb.ClientReadableStream<libc_to_manage_pb.PredictResponse>;

  predict(
    request: libc_to_manage_pb.PredictRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: libc_to_manage_pb.PredictResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/libctomanage.LibcToManage/Predict',
        request,
        metadata || {},
        this.methodInfoPredict,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/libctomanage.LibcToManage/Predict',
    request,
    metadata || {},
    this.methodInfoPredict);
  }

  methodInfoGetDataList = new grpcWeb.MethodDescriptor(
    '/libctomanage.LibcToManage/GetDataList',
    grpcWeb.MethodType.UNARY,
    libc_to_manage_pb.GetDataListRequest,
    libc_to_manage_pb.GetDataListResponse,
    (request: libc_to_manage_pb.GetDataListRequest) => {
      return request.serializeBinary();
    },
    libc_to_manage_pb.GetDataListResponse.deserializeBinary
  );

  getDataList(
    request: libc_to_manage_pb.GetDataListRequest,
    metadata: grpcWeb.Metadata | null): Promise<libc_to_manage_pb.GetDataListResponse>;

  getDataList(
    request: libc_to_manage_pb.GetDataListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: libc_to_manage_pb.GetDataListResponse) => void): grpcWeb.ClientReadableStream<libc_to_manage_pb.GetDataListResponse>;

  getDataList(
    request: libc_to_manage_pb.GetDataListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: libc_to_manage_pb.GetDataListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/libctomanage.LibcToManage/GetDataList',
        request,
        metadata || {},
        this.methodInfoGetDataList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/libctomanage.LibcToManage/GetDataList',
    request,
    metadata || {},
    this.methodInfoGetDataList);
  }

}


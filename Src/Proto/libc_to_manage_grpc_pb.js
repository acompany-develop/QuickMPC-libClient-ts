// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var libc_to_manage_pb = require('./libc_to_manage_pb.js');
var common_types_common_types_pb = require('./common_types/common_types_pb.js');

function serialize_libctomanage_DeleteSharesRequest(arg) {
  if (!(arg instanceof libc_to_manage_pb.DeleteSharesRequest)) {
    throw new Error('Expected argument of type libctomanage.DeleteSharesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_libctomanage_DeleteSharesRequest(buffer_arg) {
  return libc_to_manage_pb.DeleteSharesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_libctomanage_DeleteSharesResponse(arg) {
  if (!(arg instanceof libc_to_manage_pb.DeleteSharesResponse)) {
    throw new Error('Expected argument of type libctomanage.DeleteSharesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_libctomanage_DeleteSharesResponse(buffer_arg) {
  return libc_to_manage_pb.DeleteSharesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_libctomanage_ExecuteComputationRequest(arg) {
  if (!(arg instanceof libc_to_manage_pb.ExecuteComputationRequest)) {
    throw new Error('Expected argument of type libctomanage.ExecuteComputationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_libctomanage_ExecuteComputationRequest(buffer_arg) {
  return libc_to_manage_pb.ExecuteComputationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_libctomanage_ExecuteComputationResponse(arg) {
  if (!(arg instanceof libc_to_manage_pb.ExecuteComputationResponse)) {
    throw new Error('Expected argument of type libctomanage.ExecuteComputationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_libctomanage_ExecuteComputationResponse(buffer_arg) {
  return libc_to_manage_pb.ExecuteComputationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_libctomanage_GetComputationResultRequest(arg) {
  if (!(arg instanceof libc_to_manage_pb.GetComputationResultRequest)) {
    throw new Error('Expected argument of type libctomanage.GetComputationResultRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_libctomanage_GetComputationResultRequest(buffer_arg) {
  return libc_to_manage_pb.GetComputationResultRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_libctomanage_GetComputationResultResponse(arg) {
  if (!(arg instanceof libc_to_manage_pb.GetComputationResultResponse)) {
    throw new Error('Expected argument of type libctomanage.GetComputationResultResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_libctomanage_GetComputationResultResponse(buffer_arg) {
  return libc_to_manage_pb.GetComputationResultResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_libctomanage_GetDataListRequest(arg) {
  if (!(arg instanceof libc_to_manage_pb.GetDataListRequest)) {
    throw new Error('Expected argument of type libctomanage.GetDataListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_libctomanage_GetDataListRequest(buffer_arg) {
  return libc_to_manage_pb.GetDataListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_libctomanage_GetDataListResponse(arg) {
  if (!(arg instanceof libc_to_manage_pb.GetDataListResponse)) {
    throw new Error('Expected argument of type libctomanage.GetDataListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_libctomanage_GetDataListResponse(buffer_arg) {
  return libc_to_manage_pb.GetDataListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_libctomanage_GetSchemaRequest(arg) {
  if (!(arg instanceof libc_to_manage_pb.GetSchemaRequest)) {
    throw new Error('Expected argument of type libctomanage.GetSchemaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_libctomanage_GetSchemaRequest(buffer_arg) {
  return libc_to_manage_pb.GetSchemaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_libctomanage_GetSchemaResponse(arg) {
  if (!(arg instanceof libc_to_manage_pb.GetSchemaResponse)) {
    throw new Error('Expected argument of type libctomanage.GetSchemaResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_libctomanage_GetSchemaResponse(buffer_arg) {
  return libc_to_manage_pb.GetSchemaResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_libctomanage_PredictRequest(arg) {
  if (!(arg instanceof libc_to_manage_pb.PredictRequest)) {
    throw new Error('Expected argument of type libctomanage.PredictRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_libctomanage_PredictRequest(buffer_arg) {
  return libc_to_manage_pb.PredictRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_libctomanage_PredictResponse(arg) {
  if (!(arg instanceof libc_to_manage_pb.PredictResponse)) {
    throw new Error('Expected argument of type libctomanage.PredictResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_libctomanage_PredictResponse(buffer_arg) {
  return libc_to_manage_pb.PredictResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_libctomanage_SendModelParamRequest(arg) {
  if (!(arg instanceof libc_to_manage_pb.SendModelParamRequest)) {
    throw new Error('Expected argument of type libctomanage.SendModelParamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_libctomanage_SendModelParamRequest(buffer_arg) {
  return libc_to_manage_pb.SendModelParamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_libctomanage_SendModelParamResponse(arg) {
  if (!(arg instanceof libc_to_manage_pb.SendModelParamResponse)) {
    throw new Error('Expected argument of type libctomanage.SendModelParamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_libctomanage_SendModelParamResponse(buffer_arg) {
  return libc_to_manage_pb.SendModelParamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_libctomanage_SendSharesRequest(arg) {
  if (!(arg instanceof libc_to_manage_pb.SendSharesRequest)) {
    throw new Error('Expected argument of type libctomanage.SendSharesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_libctomanage_SendSharesRequest(buffer_arg) {
  return libc_to_manage_pb.SendSharesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_libctomanage_SendSharesResponse(arg) {
  if (!(arg instanceof libc_to_manage_pb.SendSharesResponse)) {
    throw new Error('Expected argument of type libctomanage.SendSharesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_libctomanage_SendSharesResponse(buffer_arg) {
  return libc_to_manage_pb.SendSharesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// *
// LibcToManage service
var LibcToManageService = exports.LibcToManageService = {
  sendShares: {
    path: '/libctomanage.LibcToManage/SendShares',
    requestStream: false,
    responseStream: false,
    requestType: libc_to_manage_pb.SendSharesRequest,
    responseType: libc_to_manage_pb.SendSharesResponse,
    requestSerialize: serialize_libctomanage_SendSharesRequest,
    requestDeserialize: deserialize_libctomanage_SendSharesRequest,
    responseSerialize: serialize_libctomanage_SendSharesResponse,
    responseDeserialize: deserialize_libctomanage_SendSharesResponse,
  },
  deleteShares: {
    path: '/libctomanage.LibcToManage/DeleteShares',
    requestStream: false,
    responseStream: false,
    requestType: libc_to_manage_pb.DeleteSharesRequest,
    responseType: libc_to_manage_pb.DeleteSharesResponse,
    requestSerialize: serialize_libctomanage_DeleteSharesRequest,
    requestDeserialize: deserialize_libctomanage_DeleteSharesRequest,
    responseSerialize: serialize_libctomanage_DeleteSharesResponse,
    responseDeserialize: deserialize_libctomanage_DeleteSharesResponse,
  },
  getSchema: {
    path: '/libctomanage.LibcToManage/GetSchema',
    requestStream: false,
    responseStream: false,
    requestType: libc_to_manage_pb.GetSchemaRequest,
    responseType: libc_to_manage_pb.GetSchemaResponse,
    requestSerialize: serialize_libctomanage_GetSchemaRequest,
    requestDeserialize: deserialize_libctomanage_GetSchemaRequest,
    responseSerialize: serialize_libctomanage_GetSchemaResponse,
    responseDeserialize: deserialize_libctomanage_GetSchemaResponse,
  },
  executeComputation: {
    path: '/libctomanage.LibcToManage/ExecuteComputation',
    requestStream: false,
    responseStream: false,
    requestType: libc_to_manage_pb.ExecuteComputationRequest,
    responseType: libc_to_manage_pb.ExecuteComputationResponse,
    requestSerialize: serialize_libctomanage_ExecuteComputationRequest,
    requestDeserialize: deserialize_libctomanage_ExecuteComputationRequest,
    responseSerialize: serialize_libctomanage_ExecuteComputationResponse,
    responseDeserialize: deserialize_libctomanage_ExecuteComputationResponse,
  },
  getComputationResult: {
    path: '/libctomanage.LibcToManage/GetComputationResult',
    requestStream: false,
    responseStream: true,
    requestType: libc_to_manage_pb.GetComputationResultRequest,
    responseType: libc_to_manage_pb.GetComputationResultResponse,
    requestSerialize: serialize_libctomanage_GetComputationResultRequest,
    requestDeserialize: deserialize_libctomanage_GetComputationResultRequest,
    responseSerialize: serialize_libctomanage_GetComputationResultResponse,
    responseDeserialize: deserialize_libctomanage_GetComputationResultResponse,
  },
  sendModelParam: {
    path: '/libctomanage.LibcToManage/SendModelParam',
    requestStream: false,
    responseStream: false,
    requestType: libc_to_manage_pb.SendModelParamRequest,
    responseType: libc_to_manage_pb.SendModelParamResponse,
    requestSerialize: serialize_libctomanage_SendModelParamRequest,
    requestDeserialize: deserialize_libctomanage_SendModelParamRequest,
    responseSerialize: serialize_libctomanage_SendModelParamResponse,
    responseDeserialize: deserialize_libctomanage_SendModelParamResponse,
  },
  predict: {
    path: '/libctomanage.LibcToManage/Predict',
    requestStream: false,
    responseStream: false,
    requestType: libc_to_manage_pb.PredictRequest,
    responseType: libc_to_manage_pb.PredictResponse,
    requestSerialize: serialize_libctomanage_PredictRequest,
    requestDeserialize: deserialize_libctomanage_PredictRequest,
    responseSerialize: serialize_libctomanage_PredictResponse,
    responseDeserialize: deserialize_libctomanage_PredictResponse,
  },
  getDataList: {
    path: '/libctomanage.LibcToManage/GetDataList',
    requestStream: false,
    responseStream: false,
    requestType: libc_to_manage_pb.GetDataListRequest,
    responseType: libc_to_manage_pb.GetDataListResponse,
    requestSerialize: serialize_libctomanage_GetDataListRequest,
    requestDeserialize: deserialize_libctomanage_GetDataListRequest,
    responseSerialize: serialize_libctomanage_GetDataListResponse,
    responseDeserialize: deserialize_libctomanage_GetDataListResponse,
  },
};

exports.LibcToManageClient = grpc.makeGenericClientConstructor(LibcToManageService);

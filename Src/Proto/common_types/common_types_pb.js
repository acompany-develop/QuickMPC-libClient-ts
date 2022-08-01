// source: common_types/common_types.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.pb_common_types.ComputationMethod', null, global);
goog.exportSymbol('proto.pb_common_types.JobStatus', null, global);
goog.exportSymbol('proto.pb_common_types.PredictMethod', null, global);
/**
 * @enum {number}
 */
proto.pb_common_types.JobStatus = {
  UNKNOWN: 0,
  PRE_JOB: 1,
  READ_DB: 2,
  COMPUTE: 3,
  WRITE_DB: 4,
  COMPLETED: 5
};

/**
 * @enum {number}
 */
proto.pb_common_types.ComputationMethod = {
  COMPUTATION_METHOD_UNSPECIFIED: 0,
  COMPUTATION_METHOD_MEAN: 1,
  COMPUTATION_METHOD_VARIANCE: 2,
  COMPUTATION_METHOD_SUM: 3,
  COMPUTATION_METHOD_CORREL: 4,
  COMPUTATION_METHOD_LINEAR_REGRESSION: 5,
  COMPUTATION_METHOD_LOGISTIC_REGRESSION: 6,
  COMPUTATION_METHOD_MESH_CODE: 7,
  COMPUTATION_METHOD_DECISION_TREE: 8,
  COMPUTATION_METHOD_JOIN_TABLE: 9
};

/**
 * @enum {number}
 */
proto.pb_common_types.PredictMethod = {
  PREDICT_METHOD_UNSPECIFIED: 0,
  PREDICT_METHOD_LINEAR_REGRESSION: 1,
  PREDICT_METHOD_LOGISTIC_REGRESSION: 2,
  PREDICT_METHOD_DECISION_TREE: 3,
  PREDICT_METHOD_SID3_TREE: 4
};

goog.object.extend(exports, proto.pb_common_types);

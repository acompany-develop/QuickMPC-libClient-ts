import * as jspb from 'google-protobuf'



export enum JobStatus { 
  UNKNOWN = 0,
  PRE_JOB = 1,
  READ_DB = 2,
  COMPUTE = 3,
  WRITE_DB = 4,
  COMPLETED = 5,
}
export enum ComputationMethod { 
  COMPUTATION_METHOD_UNSPECIFIED = 0,
  COMPUTATION_METHOD_MEAN = 1,
  COMPUTATION_METHOD_VARIANCE = 2,
  COMPUTATION_METHOD_SUM = 3,
  COMPUTATION_METHOD_CORREL = 4,
  COMPUTATION_METHOD_LINEAR_REGRESSION = 5,
  COMPUTATION_METHOD_LOGISTIC_REGRESSION = 6,
  COMPUTATION_METHOD_MESH_CODE = 7,
  COMPUTATION_METHOD_DECISION_TREE = 8,
  COMPUTATION_METHOD_JOIN_TABLE = 9,
}
export enum PredictMethod { 
  PREDICT_METHOD_UNSPECIFIED = 0,
  PREDICT_METHOD_LINEAR_REGRESSION = 1,
  PREDICT_METHOD_LOGISTIC_REGRESSION = 2,
  PREDICT_METHOD_DECISION_TREE = 3,
  PREDICT_METHOD_SID3_TREE = 4,
}

// https://github.com/grpc/grpc-web/blob/35c16a9e4e113b65966e159dc879bc452c00526c/javascript/net/grpc/web/statuscode.js を参考
// grpcのエラーハンドリングを行う関数
export function handleGrpcError(code: number) {
    // envoyが立っていない時はUNKNOWN(2)に, envoyが立っておりMCが立っていない場合はUNAVAILABLE(14)になる
    if(code === 2 || code === 14) {
        throw new Error("リクエストの送信に失敗しました.");
    }
    // それ以外はInternal Server Errorとして処理
    else {
        throw new Error("サーバ内部でエラーが発生しました.");
    }
}
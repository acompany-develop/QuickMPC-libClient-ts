// grpc-webクライアントテストに使用するwebページのホスティングサーバとgrpcサーバを起動する
import express from 'express';
import * as grpcServer from './grpcServer';

const app: express.Express = express();

app.use(express.static('Static'));
app.use('/Dist', express.static('Dist'));

// ホスティングサーバの起動
app.listen(8080, function () {
    console.log('Direct your browser to http://localhost:8080/Client.html.');
});

// grpcサーバの起動
grpcServer.serve(1)
.then(() => {
    console.log('grpcServer1 listening on 7001...')
})
.catch((err: Error) => {
    console.log(err);
})

grpcServer.serve(2)
.then(() => {
    console.log('grpcServer2 listening on 7002...')
})
.catch((err: Error) => {
    console.log(err);
})

grpcServer.serve(3)
.then(() => {
    console.log('grpcServer3 listening on 7003...')
})
.catch((err: Error) => {
    console.log(err);
})
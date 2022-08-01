// デモに使用するwebページのホスティングサーバを起動する
const express = require('express');

const app = express();

app.use(express.static('Static'));
app.use('/Dist', express.static('Dist'));

// ホスティングサーバの起動
app.listen(8080, function () {
    console.log('Direct your browser to http://localhost:8080/Client.html.');
});
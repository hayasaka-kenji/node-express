const express = require('express');
const app = express();

// ミドルウェアなのでuseを使う
// user配下は./route/userを使うようにする
app.use('/user', require('./route/user'));

app.listen(3000);
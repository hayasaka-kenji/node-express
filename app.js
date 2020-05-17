const express = require('express');
const app = express();

app.set('view engine', 'ejs');

// 静的ファイルの配信(バックスラッシュを忘れないようにする)
app.use('/public',express.static(__dirname + '/public'));

app.use('/', require('./routes/index'));

app.listen(3000);

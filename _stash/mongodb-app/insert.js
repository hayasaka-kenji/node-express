const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://user:user@localost:27017/sample';

const connectOption = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

MongoClient.connect(url, connectOption, (err, db) => {
  if(err) {
    return;
  }
  const bulk = db.collection('products').initializeOrderedBulkOp();
  bulk.insert({name: 'pen', price: 120});
  bulk.insert({name: 'note', price: 120});
  bulk.insert({name: 'eraser', price: 100});
  bulk.insert({name: 'paste', price: 180});
  bulk.insert({name: 'ciseaux', price: 320});
  bulk.insert({name: 'tape', price: 80});
  bulk.execute((err, res) => {
    db.close();
  })
})
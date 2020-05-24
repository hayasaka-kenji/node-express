const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/';

/**
 * 追加オプション
 * MongoClient用オプション設定
 */
const connectOption = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

MongoClient.connect(url, connectOption, (error, client) => {
  const db = client.db('sample');

  db.collection('products1', (error, collection) => {
    // collection.find({name: { $regex: /e/g } }).toArray((error, docs) => {
    //     for (const doc of docs) {
    //       console.log(doc.name);
    //     }
    //     client.close();
    // });

    // collection.updateMany(
    //   {name: /e/g},
    //   {$inc: {price: 20}},
    //   (err , res) => {
    //     client.close();
    //   }
    // )

    collection.deleteMany(
      {name: /e/g},
      (err, res) => {
        client.close();
      }
    );
  });
});


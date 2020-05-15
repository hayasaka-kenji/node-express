var p1 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("p1 complete !");
  }, Math.random() * 3000);
});

var p2 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("p2 complete !");
  }, Math.random() * 3000);
});

// Promise.all([p1, p2]).then((value) => {
//   console.log(value);
// }, (reason) => {
//   console.log(reasom);
// });

Promise.race([p1, p2]).then((value) => {
  console.log(value);
}, (reason) => {
  console.log(reasom);
});

// all は複数のサーバーからすべて応答があったら展開する
// race は複数のサーバーからどれかあったら展開する
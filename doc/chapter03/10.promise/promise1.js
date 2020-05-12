var p1 = new Promise((resolve, reject) => {
  setTimeout(function() {
    // resolve("Hello World."); // then.valueが呼び出される。
    reject("Hello World."); // then.reasonとcatchが読み出される
  }, 100);
});

p1.then((value) => { // 成功したとき出力される
  console.log(`.then() onfullfiled : ${value}`);
}, (reason) => { // 失敗したときに出力される
  console.log(`.then() onrejected  : ${reason}`);
});

p1.catch((reason)=>{ // エラーが有った場合に呼ばれる
  console.log(`.catch() onrejected : ${reason}`);
});
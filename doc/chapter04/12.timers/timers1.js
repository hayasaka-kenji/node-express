setTimeout(() => {
  console.log('setTimeout');
}, 0);

setImmediate(() => {
  console.log('setImmediate');
})

// setTimeout, setImmediate 順番が入れ替わることがある（なんどか実行すると変わっていることが確認できる）
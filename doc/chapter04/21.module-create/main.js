(function () {
  // const module = require('./module-1');
  // module();
})();

(function () {
  // const module = require('./module-2');
  // console.log(module);
})();

(function () {
  // const module = require('./module-3');
  // console.log(module.square()); // 100

  // { width: 10, height: 10, square: [Function: square] }
})();

(function () {
  // const Square = require('./module-4');
  // // クラス型の場合、インスタンス化が必要
  // const obj = new Square(15, 10);
  // console.log(obj.area());
})();

(function () {
  // {}で別に読み込みする
  const {Square, Triangle} = require('./module-5');
  // 複合クラス型の場合
  const obj1 = new Square(15, 10);
  console.log(obj1.area());
  const obj2 = new Triangle(15, 10);
  console.log(obj2.area());
})();
// クラスで出力する

// 古い書き方

// var Square = function(width = 10, height = 10) {
//   this.width = 10;
//   this.height = 10;
// };

// Square.prototype.width = 10;
// Square.prototype.height = 10;
// Square.prototype.area = function() {
//   return this.width * this.height;
// }

class Square {
  constructor(width = 10, height = 10) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

module.exports = Square;
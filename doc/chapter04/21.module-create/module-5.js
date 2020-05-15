// 複合クラスで出力する

class Square {
  constructor(width = 10, height = 10) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Triangle {
  constructor(width = 10, height = 10) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height / 2.0;
  }
}


// 最後にオブジェクト化する
module.exports = {
  Square: Square,
  Triangle: Triangle
}
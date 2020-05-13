const util = require('util');
const EventEmitter = require('events').EventEmitter;

// 親クラス
const Animal = function() {
  EventEmitter.call(this); // もとの子クラスも継承
};
util.inherits(Animal, EventEmitter); // EventEmitterを継承
Animal.prototype.message = 'Baw';
Animal.prototype.say = function() {
  console.log(this.message);
  this.emit('say', this.message); // イベントの発火と引数を指定
}

// 子クラス
const Dog = function() {
  Animal.call(this);
  this.message = 'わん';
};
util.inherits(Dog, Animal);

// 子クラスの継承
const hachi = new Dog;
hachi.on('say', function(message) { // イベントのバインド
  console.log(message + ' ... !') 
});
hachi.say();
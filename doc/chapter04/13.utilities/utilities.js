const util = require('util');

const Animal = function() {

};
Animal.prototype.message = 'Baw';
Animal.prototype.say = function() {
  console.log(this.message);
}

const Dog = function() {
  Animal.call(this);
  this.message = 'わん';
};

util.inherits(Dog, Animal);
var kuro = new Dog;
kuro.say();
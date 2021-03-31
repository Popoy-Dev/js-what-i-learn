// literal object

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 2,
  },
  draw: function () {
    console.log("hello");
  },
};

// circle.draw(); uncomment if you want to see the output
//  if the object have more than method the literal object is not good to use, instead use factory or constructor function

// factory function

function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("hello");
    },
  };
}
const circleFactory = createCircle(1);
// circleFactory.draw(); uncomment if you want to see the output

// constructor function
// this refer in for the keys 'this' and 'new Object'
// when create new function 'new' there are 3 happened 1, is creating an object 2, 'this' is referring in object and last is returning the object into the function

function CircleConstructor(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("hello constructor");
  };
}

const constructorCircle = new CircleConstructor(1);
constructorCircle.location = "center-hello";

// constructorCircle.draw();

// evry object in javscript has consturctor   properties
let x = {};
// let x = new Object(); jscrpt engine translate in this code
// new Object() = ``, '', "" and etc properties, like literal
// function is actually objject in javascript

// 2 category of types
// value types also as primative and reference types
// value tpyes = number, string ,bool, symbol, undefiend, null
//  reference types Object, function and array
// primative type vs object
let a = 10;
let y = a; // in primative the value is independent in each other
a = 20;

let z = { value: 10 };
let e = z;
z.value = 20;
// console log to see the diff
// primative is copied by their value
// object are copied by their referrence

// primative sample
let number = 10;

function increase(number) {
  number++;
}

increase(number);
console.log(number);

// reference sample
let numbers = { val: 10 };

function increase(number) {
  number.val++;
}

increase(number);
console.log(number);

// bracket notation for the other ScreenOrientation

// propertyName[location] // braaket notation is good for searching the dynamic object confusing, when i google it, it also have access to an object

// for deleting properties in object

// delete operator then reference the property name -> delete circle.password

function Enumarate(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log(`hello ${radius}`);
  };
}

const enumarate = new Enumarate("enumarate");
for (let key in enumarate) {
  if (typeof enumarate[key] !== "function") console.log(key);
}
const keys = Object.keys(enumarate);
console.log(keys);
//  use 'in' to check if the object have given property

if ("radius" in enumarate) {
  console.log("circle has a radius");
}

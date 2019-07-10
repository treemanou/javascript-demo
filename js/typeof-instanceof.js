/**
 *  typeof: 印出型別
 *  注意：   array  => object
 *          unll   => onject
 * 
 *  instanceof 判斷原型練上是否有物件(是否為子物件)
 * 
 */

var a = 3;
console.log(typeof a);                          // number

var b = "good";
console.log(typeof b);                          // string

var c = {};
console.log(typeof c);                          // object 

var d = [];
console.log(typeof d);                          // object
console.log(Object.prototype.toString.call(d)); //[object Array]

var Person = function(name){
    this.name = name;
}
console.log(typeof e);                          // function

var joe = new Person();
console.log("f",typeof Person);      // object
console.log( joe instanceof Person)  // true
console.log(typeof undefined);       // undefined
console.log(typeof null);            // onject => javascript bug


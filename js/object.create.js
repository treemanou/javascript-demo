
// Object.create => pure prototypal inheritance

var Person = {
    firstname : "default",
    lastname:  "default" ,
    getFullName:  function(){
        return this.firstname + " " + this.lastname 
    }
}

var Person2 = function(){
    this.firstname = "John";
    this.lastname  = "Wick";
    function getFullName(){
        return this.firstname + " " + this.lastname 
    }
}

var A = new Person2();
var B = Object.create(Person);
console.log(A);         // 物件有東西   __proto__ => Person2
console.log(B);         // 空物件      __proto__ => Person      所有都放在原型鍊上

// polyfill for Object.create()
// 有時候會寫一些程式來填補某些瀏覽器不支援的情況，我們把這些程式稱做 polyfill。
if (!Object.create) {
    Object.create = function (o) {
      if (arguments.length > 1) {
        throw new Error('Object.create implementation only accepts the first parameter');
      }
  
      function F() {};
      F.prototype = o;
      return new F();
    };
  }
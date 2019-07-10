/**
 * 使用 new 產生物件
 * 
 * 1. 建立新物件{}
 * 2. 將this 指向該物件
 * 3. this.XXXX  = XXX 將所有數性設定至該物件上
 * 4. 回傳this (該物件)
 * 5. 若該函式有回傳值，就會回傳
 * 
 *  */


var Person = function(){

    console.log(this);
    this.firstname = "Jhon";
    this.lastname = "Doe";
    console.log(this);
}

var Jan = new Person();
console.log(Jan);

/**
 * Person {}
 * Person {firstname: "Jhon", lastname: "Doe"}
 * Person {firstname: "Jhon", lastname: "Doe"}
 */
 
var Person2 = function(){

    console.log(this);
    this.firstname = "Jhon";
    this.lastname = "Doe";
    console.log(this);
    return {firstname:"Sam"}
}
var Sam = new Person2();
console.log(Sam);
console.log(Sam.lastname);
/**
 * Person {}
 * Person {firstname: "Jhon", lastname: "Doe"}
 * {firstname: "Sam"}
 * undefined
 */

var Person3 = function(firstname,lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}
var Amy = new Person3("Amy","Lin");
console.log(Amy);   //obj.prototype 物件原型 指向 new 出物件的原型，可新增屬性及方法
//由此方法 new 出來的物件皆有此屬性及方法

var Person = function(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

var john = new Person("Jhon","Wick");
// console.log(john.getFullName()); //john.getFullName is not a function

//新增 getFullName 方法，之後所有new Person 的物件，皆有此方法
Person.prototype.getFullName = function(){
    return this.firstname +  " " + this.lastname;
}

console.log(john.getFullName()); //john.getFullName is not a function

var mary = new Person("Mary","Lee");
console.log(mary.getFullName());    //john.getFullName is not a function
console.log(mary.gender);           // undefined 

Person.prototype.gender = "male";
console.log(mary.gender);           // male 


// /新增 getFullName 方法，有mary 複寫 原Ｐerson 方法
mary.getFullName = function(){
    return this.firstname + ', ' + this.lastname; 
}
console.log(mary.getFullName());    // Mary, Lee  // mary 的 getFullName()
console.log(john.getFullName());    // Jhon Wick  // 原型 Person 的 getFullName()
/**
 * Person3 {firstname: "Amy", lastname: "Lin"}
 */

 /**    
  * 如果忘記寫 new
  * 不會回傳新物件，結果會是 undefined
  */
 var badVar = Person();
 console.log(badVar);     //undefined




//擴充原內建string 功能
String.prototype.isLengthGreaterThen = function(limit){
      return this.length > limit;
  }
console.log("Google".isLengthGreaterThen(2)); //true

/**
 * 不要使用純值的(String, Boolean, Number ...) new 建構式
 * new 出來的都是物件，比較上會有錯誤
 * 但可以使用來轉型
 */
var s  = new String(2);     // s = 物件
var n = new Number("3");     // n = 物件

var a = 3;
var b = new Number(3);
console.log(a === b);   //false 因為b   是物件，不是純值

//純轉型不要用new
var c = Number("3");
console.log(a === c);   // true 都是 純值
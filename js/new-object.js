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
console.log(Amy);   
/**
 * Person3 {firstname: "Amy", lastname: "Lin"}
 */
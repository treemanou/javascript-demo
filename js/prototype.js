//obj.prototype 物件原型 指向 new 出物件的原型，可新增屬性及方法
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
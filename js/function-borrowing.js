//function-borrowing: 功能借用
//使用bind or call or apply 借用別物件的方法

var person = {
    firstname:  "Jhon",
    lastname:   "Doe",
    getFullName: function(){
        return this.firstname + " " + this.lastname;
    }
}

var person2 = {
    firstname:  "Mary",
    lastname:   "Lee"
}

var fullName = person.getFullName.bind(person2);
console.log(fullName());                // Mary Lee
console.log(
    person.getFullName.apply(person2)
);                                      // Mary Lee
console.log(
    person.getFullName.call(person2)
);                                      // Mary Lee

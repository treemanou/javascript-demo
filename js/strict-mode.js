//use struct 樣放在程式第一行，如果是function效果就只限於該function
function logNewPerson() {
    "use strict";
    
    var person2;
    persom2 = {};           // Uncaught ReferenceError: persom2 is not defined
    console.log(persom2);
}

var person;
persom = {};
console.log(persom);
logNewPerson();
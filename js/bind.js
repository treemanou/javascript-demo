// bind 函數都有的方法，改變this 的指向
// fn.bind(傳入this物件)
// fn.bind(傳入this物件,參數一, 參數二, ....)

var person = {
    firstname: "Jhon",
    lastname:  "Doe",
    getFullName:  function() {
        var fullName = this.firstname + " " + this.lastname;
        return fullName;
    }
}


console.log(person.getFullName());

function log(){
    
    var lgoname = "Jhon wick";
    var getFullName = function(){
        return "Jhon wick";
    }

    // console.log(this);
    console.log("log: fullName is "+this.getFullName());
}

//使用 function expression 可以直接bind
var log2 = function(){
    console.log("log: fullName is "+this.getFullName());
}.bind(person);

//使用bind 改變this 參照
log.bind(person)(); // log: fullName is Jhon Doe
log2();             // log: fullName is Jhon Doe
log();              // error: this.getFullName is not funtion 


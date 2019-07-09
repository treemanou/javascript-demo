// call, apply  都是呼叫函數並改變this 參照
// 差別在參數傳入方式, call: 參數直接傳入, apply: 參數是一個陣列
// fn.call( this物件 , 參數一, 參數二, ....)
// fn.apply( this物件 , [參數一, 參數二, ....])

var person = {
    firstname: "John",
    lastname:   "Doe",
    getFullName: function(firstname,lastname){
        return this.firstname + " " + this.lastname;
    }
}

function saySomething(greeting, speak_words){
    var fullName = this.getFullName();
    console.log(greeting + " " + fullName + " " + speak_words);
}

saySomething.call(person,"Hi",",good morning!!");       // Hi John Doe ,good morning!!
saySomething.apply(person,["Hi",",good morning!!"]);    // Hi John Doe ,good morning!!

//也可以使用匿名函數
(function(greeting, speak_words){
    var fullName = this.getFullName();
    console.log(greeting + " " + fullName + " " + speak_words);
}).call(person,"Hi",",good afternoon!!");               // Hi John Doe ,good afternoon!!
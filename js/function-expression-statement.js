
greet();    // Hi

//function statement 陳述式 => 只陳述不傳值
function greet(){
    console.log("Hi");
}

anonymousGreet(); //anonymousGreet is not a function
var anonymousGreet = function(){
    console.log("Hi");
}
//錯誤原因：變數 anonymousGreet hoisting(提升但未賦予值)

//function expression 表達式 => 會回傳值
var anonymousGreet = function(){
    console.log("Hi");
}

anonymousGreet();
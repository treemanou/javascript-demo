//IIFE(Immediately Invoked Functions Expressions) 立即執行函數

//function statement
function greetFunc(name){
    console.log("Hi " + name );
}
greetFunc('Jhon');  // Hi Jhon

//funcoin expression
var greating = function(name){
    console.log("Hi " + name);
}();

console.log(greating); // Hi undefined

(function(name){
    var greeting = 'Hello';
    console.log(greeting + "" + name);
});
//closure 閉包

function buildFunc(){
    var arr = [];
    for(var i = 0; i < 3; i++ ){
        arr.push(
            function(){
                console.log(i);
            }
        );
    }
    return arr;
}

var fs = buildFunc();
fs[0]();
fs[1]();
fs[2]();
/**
 * 回傳結果
 * 
 * 0
 * 1
 * 2
 */

 function buildFunc2(){
     var arr = [];
     for(var i =0; i < 3; i++){
         arr.push(
            (function(j){
                return function(){console.log(j);}
            }(i))
         );
     }
    return arr;
 }

var fs2 = buildFunc2();
fs2[0]();
fs2[1]();
fs2[2]();

// setTimeout  就是一種 closuere
function sayHi(){
    var greeting = "Hi";
    setTimeout(function(){
        console.log(greeting),
        1500
    });
}

sayHi();
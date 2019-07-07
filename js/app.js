//*funtion內的變數會自動提升至最前面

var x = 1;

var doSomeThing = function(y) {
  console.log(x);   // undefined

  var x = 100;
  return x + y;
};

console.log( doSomeThing(50) );   // 150
console.log( x );                                // 1
//上面的function 等於
/*
var doSomeThing = function(y) {
  var x;
  console.log(x);   // undefined

  x = 100;
  return x + y;
};
*/
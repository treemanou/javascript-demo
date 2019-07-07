
// 運算子先後順序 
//  https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// operator 順序 "=" 是由右到左

 
var a = 2, b = 3, c = 4;
a = b = c;
console.log(a);  // 4
console.log(b);  // 4
console.log(c);  // 4

/* 
運算過程
b = c
a = b
*/
// 強制轉型
var a = 1 + '2';
console.log(a); // 12

console.log( 1 < 2 < 3); //true
/* 比較過程
1 < 2 => true
true < 3 => true  (true 轉型為 1)
*/
console.log( 3 < 2 < 1); //true
/* 比較過程
3 < 2 => false
false < 1 => true  (false 轉型為 0)
*/

//使用Ｎumber模擬強制轉型為數字
console.log(Number(false));     // 0
console.log(Number(true));      // 1
console.log(Number("1"));       // 1
console.log(Number(undefined))  // NaN (Not a Number)
console.log(Number(null))       // 0

//強制轉型後比較
console.log( "3" == 3)          // true 
console.log( false == 0)        // true

var b = false;
console.log( b == 0)            // true

console.log( null == 0)         // false
console.log( null < 1)          // true
console.log( "" < 1)            // true
console.log( "" < false)        // true

// 使用 === 不會強制轉型 ，解決上面問題
console.log( "3" === 3)          // true 
console.log( false === 0)        // true
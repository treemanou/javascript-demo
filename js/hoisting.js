// hoisting ：提升
// javascript 的變數及函數，會提升到程式碼最上層
// 正確解釋javascript 在執行時期，會先將有變數及函數放至記憶體，初始執行的時候沒有賦予值則為undefined，不會錯誤


b();            //hello b!
console.log(a); //undefind

var a = "hello a!";

function b(){
    console.log("hello b!");
}

/* 輸出結果：
hello b!
undefined
*/


////使用boolean 特性做數值判斷，變數是否不為 undefined, null, "" 空字串

//使用Boolean擬強制轉型
console.log(Boolean(undefined));    //false
console.log(Boolean(null));         //false
console.log(Boolean(""));           //false
console.log(Boolean(0));            //false

// 如果 0 也要排除 a === 0 可以不要
var a;

if (a || a === 0){
    console.log("somethig is here");
} 

//使用比較方式建立預設值(注意如果變數要是0，就要特別判斷)
console.log( Boolean("Hello"));         // true 
console.log( Boolean(undefined));       // false  
console.log( Boolean(null));            // false  
console.log( Boolean(""));              // false   
console.log( "Hi" || "Hello");          // Hi
console.log( 0 || 1);                   // 1
console.log( undefined || "Hello");     // Hello
console.log( null || "Hello");          // Hello
console.log( "" || "Hello");            // Hello

function hello(name){
    console.log("Hello " + name);
}
function hello_with_default_name(name){
    name = name || "<you default name>";
    console.log("Hello " + name);
}

hello("John");              // Hello
hello();                    // Hello undefined
hello_with_default_name();  // Hello <you default name>


//check global namespace
//如果有載入多隻js，會造成後js 覆蓋前js 設定，所以要先做檢查
var LibName = "LibName";    // js 1 設定
var LibName = "LibName2";   // js 2 設定 => 覆蓋 js 1 設定
//檢查後再設定
window.LibName = window.LibName || "LibName2";
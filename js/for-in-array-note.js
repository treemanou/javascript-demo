/**
 * 使用for in 陣列 及 prototype 時要注意
 * 會印出多的東西
 * 可改用for
 *  */

Array.prototype.alias = "List";

arr = ["Jhon", "Jim", "Joe"];
for(var key in arr){
    console.log(key + ":" +arr[key]);
}

/**
 0:Jhon
 1:Jim
 2:Joe
 alias:List  => 多印出
 */

 for(var i = 0; i < arr.length; i++){
    console.log(i + ":" + arr[i]);
}
/**
 0:Jhon
 1:Jim
 2:Joe
 */

function b(){
    //當內部找不到變數定義時會網外部環境找(上層是window)
    console.log(myVar); // 1
}
function a(){
    var myVar = 2;
    console.log(myVar); // 2
    b();

    function c(){
        //當內部找不到變數定義時會網外部環境找(上層是a)
        console.log(myVar); //2
    }
    c();
}
var myVar = 1;
a();
console.log(myVar);

/* 輸出結果：
2
1
2
1
*/
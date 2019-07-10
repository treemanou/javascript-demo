//function currying: 使用bind建立一個方法的拷貝，並設定預設的參數，參數設定後，無法再由傳入參數修改

function mutiply(a,b){
    console.log(arguments);
    return a*b;
}

//設定 a=2 
var mutiplyBy2 = mutiply.bind(this,2)
mutiplyBy2(3);  // 6

var mutiplyWith2and3 = mutiply.call(this,2,3);
mutiplyWith2and3();     // 6
mutiplyWith2and3(4);    // 6
mutiplyWith2and3(7,8);  // 6
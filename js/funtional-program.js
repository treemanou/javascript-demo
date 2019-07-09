function log(a){
    a();
}

//傳入一個function當變數
log(
    function(){
        console.log("Hi");
    }
);
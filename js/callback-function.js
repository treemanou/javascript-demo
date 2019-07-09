//callback function
//當某個函數執行完，你給他執行的函數

function do_something(callback){
    console.log("call do_something");
    callback();
}

do_something(function(){
    console.log("I'm done!!");
});

/**
 * call do_something
 * 
 * I'm done!!
 */

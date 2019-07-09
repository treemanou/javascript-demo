// arguments 為預設輸入參數的集合，用法很像陣列

function greet(firstname, lastname, language, ...other){

    //set defaule value
    language = language || "en";

    if (arguments.length === 0){
        console.log("you don't have any parametera!!");
        console.log("------------------");
        return;
    }
    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments);
    console.log("------------------");
}

greet();
greet('John');
greet('John', 'Doe');
greet('John', 'Doe', 'es');
greet('John', 'Doe', 'es','ok','not ok'); 
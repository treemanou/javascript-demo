//javascript 沒有overload
//所以我們用不同方法區隔

function greet(firestname, lastname, langeuage){
    if (langeuage === "en"){
        console.log("Hello!! "+firestname + " "+ langeuage);
    }
    
    if (langeuage === "es"){
        console.log("Hola!! "+firestname + " "+ langeuage);
    }
    
}

function greetEnglish(firestname, lastname){
    greet(firestname, lastname, 'en');
}
function greetSpanish(firestname, lastname){
    greet(firestname, lastname, 'es');
}

greetEnglish("Jhon","Doe");
greetSpanish("Jhon","Doe");
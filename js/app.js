var g = G$('John','Doe');

g   .setLang("cht")
    .log()          //  cht : John Doe
    .greet()        //  你好 John
    .greet(true)    //  您好,John Doe
    .setLang('en')
    .log()          //  en : John Doe
    .greet()        //  Hello John
    .greet(true)    //  Greetings,John Doe
    ;
   
$("#login").on("click",function(){
    var lang = $("#lang").val();
    var loginGrtr = G$('John','Doe');
    loginGrtr.setLang(lang)
            .HTMLGreeting("#greeting",true)
            .log();
});




     
     
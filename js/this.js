/*
javascript this 預設指向 window 除了在物件之內
物件內第一層function 內的this 指向自己，除此之外(在內層)皆指向 window
可使用 self = this ,讓self 指向正確物件
*/

function a(){
    console.log("a()",this);
    this.newavariable = "hello a !!";
}

var b = function(){
    console.log("b()",this);
}

a();
b();
console.log(this.newavariable);

var c = {
    name: "this is object c",
    log: function(){
            console.log("c.log()",this); // this 指向 c
            var that = this;
            var self = this;

            function updateName(updateName){
                var _self = self;

                self.name = updateName;
                
                console.log("c.log.updateName.this",this); // this 指向 window
                console.log("c.log.updateName.that",that); // that 指向 c
                console.log("c.log.updateName.self",_self); // that 指向 c

                function updateNameAgain(updateName2){
                    var __self = _self;

                    self.name = updateName2;
                    console.log("c.log.updateName.updateNameAgain.this",this);  // this 指向 window
                    console.log("c.log.updateName.updateNameAgain.that",that);  // that 指向 c 
                    console.log("c.log.updateName.updateNameAgain.self",__self);  // that 指向 c
                }
                updateNameAgain("update c name again!!"); 
            }
            updateName("update c name !!");
            
    }
}

c.log();
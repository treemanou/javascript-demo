(
    function(global,$){

        var Greetr = function(firstname, lastname, language){
          return new Greetr.init(firstname, lastname, language);
        }

        Greetr.prototype = {
            fullName:   function(){
                return this.firstname + " " + this.lastname;
            },
          
            validate: function(){
                if(supportedLangs.indexOf(this.language) === -1){
                    throw "Invvalidate language";
                }
                return this;
            },
            
            greeting: function(){
                return greetings[this.language] + " " + this.firstname;
            },

            formalGreeting: function(){
                return formalGreetings[this.language] + "," + this.fullName();
            },

            greet:  function(fomal){
                var msg ;

                if (fomal){
                    msg = this.formalGreeting();
                }else{
                    msg = this.greeting();
                }

                if (console){
                    console.log(msg);
                }

                return this;
            },

            getGreetMsg: function(fomal){
                var msg ;

                if (fomal){
                    msg = this.formalGreeting();
                }else{
                    msg = this.greeting();
                }

                if (console){
                    console.log("getGreetMsg: " + msg);
                }

                return msg;
            },


            log:    function(){
                if(console){
                    console.log(this.language + " : " + this.fullName());
                }
                return this;
            },

            setLang: function(lang){

                if(lang){
                    this.language = lang;
                }
                this.validate();

                return this;
            },

            HTMLGreeting: function(selector, formal) {
                if(!$){
                    throw "jQuery not loaded!!";
                }

                if(!selector){
                    throw "selector not exist!!";
                }

                var msg = this.getGreetMsg(formal);
                $(selector).html(msg);

                return this;
            }

        };


        var supportedLangs = ['en','cht'];
        var greetings = {
            en: "Hello",
            cht: "你好"
        }
        var formalGreetings = {
            en: "Greetings",
            cht: "您好"
        }
        var logMessage = {
            en: "Log in",
            cht: "登入"
        }
        

        Greetr.init = function(firstname, lastname, language){
            var self = this;
            self.firstname = firstname || "default";
            self.lastname = lastname || "default" ;
            self.language = language || "en";
        }

        Greetr.init.prototype = Greetr.prototype;
        global.Greetr = global.G$ = Greetr ;

    }
)(window,jQuery);


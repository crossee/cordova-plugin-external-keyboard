

    var argscheck = require('cordova/argscheck'),
       utils = require('cordova/utils'),
       exec = require('cordova/exec');

    var ExternalKeyboard = function() {
    };
    ExternalKeyboard.isUsed = false;

    ExternalKeyboard.checkOnce = function() {
       var self = this;

       exec(function(winParam){
            self.isUsed = winParam;
            console.log(self.isUsed);
            },
            function(error){ console.log(error); },
            "ExternalKeyboard",
            "isExternalKeyboardAttached",
            []
            );
       }
// for callback
    ExternalKeyboard.check = function(arg) {
       var self = this;
       var action = Object.assign({},
           {
              use : function() { console.log("use func not exist"); },
              unuse : function() { console.log("unuse func not exist"); }
           },
           arg||{});


        exec(function(winParam){
             self.isUsed = winParam;
             console.log(self.isUsed);
             if (self.isUsed) {
                 typeof action.use === "function" && action.use();
             } else {
                 typeof action.unuse === "function" && action.unuse();
             }
         },
         function(error){ console.log(error); },
         "ExternalKeyboard",
         "isExternalKeyboardAttached",
         []
         );
    }

    module.exports = ExternalKeyboard;



    var argscheck = require('cordova/argscheck'),
       utils = require('cordova/utils'),
       exec = require('cordova/exec');

    var ExternalKeyboard = function() {
    };
    ExternalKeyboard.isUsed = false;

    ExternalKeyboard.check = function() {
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
// 수시로 확인할 경우 사용
//       ExternalKeyboard.check = function() {
//
//          var action = Object.assign({},
//              {
//                 use : function() { console.log("use func not exist"); },
//                 unuse : function() { console.log("unuse func not exist"); }
//              },
//              arg||{});
//
//
//           exec(function(winParam){
//                if (winParam) {
//                    typeof action.use === "function" && action.use();
//                } else {
//                    typeof action.unuse === "function" && action.unuse();
//                }
//            },
//            function(error){ console.log(error); },
//            "CDVExternalKeyboardNotification",
//            "isExternalKeyboardAttached",
//            []
//            );
//       }
//
// study.js 에서 initKeyBoard 부분을 아래와 같이 사용
//               ExternalKeyboard.check({
//                   use: function() {
//                       외부 키보드가 사용될 경우 실행될 코드...
//                   },
//                   unuse: function() {
//                       외부 키보드가 없을 경우 실행될 코드...
//                   }
//                });

    module.exports = ExternalKeyboard;

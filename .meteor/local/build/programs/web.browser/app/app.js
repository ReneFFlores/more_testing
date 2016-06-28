var require = meteorInstall({"client":{"template.main.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// client/template.main.js                                                                           //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
                                                                                                     // 1
Template.body.addContent((function() {                                                               // 2
  var view = this;                                                                                   // 3
  return HTML.DIV({                                                                                  // 4
    "class": "row"                                                                                   // 5
  }, "\n    ", HTML.DIV({                                                                            // 6
    "class": "col-md-4 col-sm-4"                                                                     // 7
  }, Spacebars.include(view.lookupTemplate("userManagement"))), "\n    ", HTML.DIV({                 // 8
    "class": "col-md-8 col-sm-8"                                                                     // 9
  }, Spacebars.include(view.lookupTemplate("publicarBox"))), "\n  ");                                // 10
}));                                                                                                 // 11
Meteor.startup(Template.body.renderToDocument);                                                      // 12
                                                                                                     // 13
Template.__checkName("userManagement");                                                              // 14
Template["userManagement"] = new Template("Template.userManagement", (function() {                   // 15
  var view = this;                                                                                   // 16
  return HTML.DIV({                                                                                  // 17
    "class": "user-container"                                                                        // 18
  }, "\n    ", HTML.DIV({                                                                            // 19
    "class": "panel panel-default userBox"                                                           // 20
  }, "\n      ", HTML.DIV({                                                                          // 21
    "class": "panel-body"                                                                            // 22
  }, "\n        ", Blaze.If(function() {                                                             // 23
    return Spacebars.call(view.lookup("currentUser"));                                               // 24
  }, function() {                                                                                    // 25
    return [ "\n        ", HTML.P("Bienvenido ", HTML.STRONG("@", Blaze.View("lookup:currentUser.username", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("currentUser"), "username"));              // 27
    }))), "\n        ", HTML.BUTTON({                                                                // 28
      type: "button",                                                                                // 29
      "class": "btn btn-info fullbutton",                                                            // 30
      id: "logout"                                                                                   // 31
    }, "Salir"), "\n\n        " ];                                                                   // 32
  }, function() {                                                                                    // 33
    return [ "\n        ", HTML.H4("Ingrese jefe"), "\n        ", HTML.DIV({                         // 34
      "class": "form-group"                                                                          // 35
    }, "\n          ", HTML.INPUT({                                                                  // 36
      "class": "form-control input-sm",                                                              // 37
      id: "login-username",                                                                          // 38
      placeholder: "Username"                                                                        // 39
    }), "\n          ", HTML.INPUT({                                                                 // 40
      "class": "form-control input-sm",                                                              // 41
      id: "login-password",                                                                          // 42
      placeholder: "Password",                                                                       // 43
      type: "password"                                                                               // 44
    }), "\n        "), "\n\n        ", HTML.BUTTON({                                                 // 45
      type: "button",                                                                                // 46
      "class": "btn btn-info fullbutton login",                                                      // 47
      id: "login"                                                                                    // 48
    }, "Entrar"), "\n\n\n        ", HTML.Comment(" Sign up module "), "\n        ", HTML.H4("Agregando señor....primer testing solamente- eliminar depsues"), "\n        ", HTML.DIV({
      "class": "form-group"                                                                          // 50
    }, "\n          ", HTML.INPUT({                                                                  // 51
      "class": "form-control input-sm",                                                              // 52
      id: "signup-username",                                                                         // 53
      placeholder: "Usuario"                                                                         // 54
    }), "\n          ", HTML.INPUT({                                                                 // 55
      "class": "form-control input-sm",                                                              // 56
      id: "signup-password",                                                                         // 57
      placeholder: "Constraseña",                                                                    // 58
      type: "password"                                                                               // 59
    }), "\n        "), "\n\n        ", HTML.BUTTON({                                                 // 60
      type: "button",                                                                                // 61
      "class": "btn btn-info fullbutton",                                                            // 62
      id: "signup"                                                                                   // 63
    }, "Inscribirse"), "\n        " ];                                                               // 64
  }), "\n\n      "), "\n    "), "\n  ");                                                             // 65
}));                                                                                                 // 66
                                                                                                     // 67
Template.__checkName("publicarBox");                                                                 // 68
Template["publicarBox"] = new Template("Template.publicarBox", (function() {                         // 69
  var view = this;                                                                                   // 70
  return HTML.DIV({                                                                                  // 71
    "class": "publicarbox-container"                                                                 // 72
  }, "\n    ", HTML.DIV({                                                                            // 73
    "class": "panel panel-default publicarbox"                                                       // 74
  }, "\n      ", HTML.DIV({                                                                          // 75
    "class": "panel-body"                                                                            // 76
  }, "\n        ", HTML.Raw("<!-- Text box for publicar content -->"), "\n        ", HTML.TEXTAREA({
    "class": "form-control",                                                                         // 78
    id: "publicarText",                                                                              // 79
    placeholder: "Nombre del producto",                                                              // 80
    rows: "3"                                                                                        // 81
  }), "\n        ", HTML.TEXTAREA({                                                                  // 82
    "class": "form-control",                                                                         // 83
    id: "publicarText",                                                                              // 84
    placeholder: "Descripcion del pdoructo",                                                         // 85
    rows: "3"                                                                                        // 86
  }), "\n        ", HTML.TEXTAREA({                                                                  // 87
    "class": "form-control",                                                                         // 88
    id: "publicarText",                                                                              // 89
    placeholder: "Formula quimica del producto",                                                     // 90
    rows: "3"                                                                                        // 91
  }), "\n\n        ", HTML.Raw("<!-- Character count & button -->"), "\n        ", HTML.DIV({        // 92
    "class": "pull-right btnGroup"                                                                   // 93
  }, "\n          ", HTML.STRONG({                                                                   // 94
    "class": function() {                                                                            // 95
      return Spacebars.mustache(view.lookup("charClass"));                                           // 96
    }                                                                                                // 97
  }, Blaze.View("lookup:charCount", function() {                                                     // 98
    return Spacebars.mustache(view.lookup("charCount"));                                             // 99
  })), "\n\n          ", Blaze.If(function() {                                                       // 100
    return Spacebars.call(view.lookup("currentUser"));                                               // 101
  }, function() {                                                                                    // 102
    return [ "\n          ", HTML.BUTTON(HTML.Attrs({                                                // 103
      "class": "btn btn-info pull-right",                                                            // 104
      type: "button"                                                                                 // 105
    }, function() {                                                                                  // 106
      return Spacebars.attrMustache(view.lookup("disableButton"));                                   // 107
    }), "Publicar"), "\n          " ];                                                               // 108
  }, function() {                                                                                    // 109
    return [ "\n          ", HTML.BUTTON({                                                           // 110
      "class": "btn btn-info pull-right",                                                            // 111
      type: "button",                                                                                // 112
      disabled: ""                                                                                   // 113
    }, "Señor, usted debe de iniciar sesion"), "\n          " ];                                     // 114
  }), "\n        "), "\n\n      "), "\n    "), "\n  ");                                              // 115
}));                                                                                                 // 116
                                                                                                     // 117
///////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// client/main.js                                                                                    //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
Ingredientes = new Meteor.Collection("Ingredientes");                                                // 1
                                                                                                     //
if (Meteor.isClient) {                                                                               // 3
                                                                                                     //
  Template.userManagement.helpers({});                                                               // 5
                                                                                                     //
  Template.userManagement.events({                                                                   // 9
    'click #signup': function () {                                                                   // 10
      function clickSignup() {                                                                       // 10
        var user = {                                                                                 // 11
          username: $('#signup-username').val(),                                                     // 12
          password: $('#signup-password').val()                                                      // 13
        };                                                                                           // 11
                                                                                                     //
        Accounts.createUser(user, function (error) {                                                 // 16
          if (error) alert(error);                                                                   // 17
        });                                                                                          // 18
      }                                                                                              // 19
                                                                                                     //
      return clickSignup;                                                                            // 10
    }(),                                                                                             // 10
                                                                                                     //
    'click #login': function () {                                                                    // 21
      function clickLogin() {                                                                        // 21
        var username = $('#login-username').val();                                                   // 22
        var password = $('#login-password').val();                                                   // 23
                                                                                                     //
        Meteor.loginWithPassword(username, password, function (error) {                              // 25
          if (error) alert(error);                                                                   // 26
        });                                                                                          // 27
      }                                                                                              // 28
                                                                                                     //
      return clickLogin;                                                                             // 21
    }(),                                                                                             // 21
                                                                                                     //
    'click #logout': function () {                                                                   // 30
      function clickLogout() {                                                                       // 30
        Meteor.logout();                                                                             // 31
      }                                                                                              // 32
                                                                                                     //
      return clickLogout;                                                                            // 30
    }()                                                                                              // 30
  });                                                                                                // 9
                                                                                                     //
  Template.publicarBox.helpers({                                                                     // 38
    charCount: function () {                                                                         // 39
      function charCount() {                                                                         // 39
        return 140 - Session.get('numChars');                                                        // 40
      }                                                                                              // 41
                                                                                                     //
      return charCount;                                                                              // 39
    }(),                                                                                             // 39
                                                                                                     //
    charClass: function () {                                                                         // 43
      function charClass() {                                                                         // 43
        if (Session.get('numChars') > 140) {                                                         // 44
          return 'errCharCount';                                                                     // 45
        } else {                                                                                     // 46
          return 'charCount';                                                                        // 47
        }                                                                                            // 48
      }                                                                                              // 49
                                                                                                     //
      return charClass;                                                                              // 43
    }(),                                                                                             // 43
                                                                                                     //
    disableButton: function () {                                                                     // 51
      function disableButton() {                                                                     // 51
        if (Session.get('numChars') <= 0 || Session.get('numChars') > 140 || !Meteor.user()) {       // 52
          return 'disabled';                                                                         // 55
        }                                                                                            // 56
      }                                                                                              // 57
                                                                                                     //
      return disableButton;                                                                          // 51
    }()                                                                                              // 51
  });                                                                                                // 38
                                                                                                     //
  Template.publicarBox.events({                                                                      // 60
    'input #publicarText': function () {                                                             // 61
      function inputPublicarText() {                                                                 // 61
        Session.set('numChars', $('#publicarText').val().length);                                    // 62
      }                                                                                              // 63
                                                                                                     //
      return inputPublicarText;                                                                      // 61
    }(),                                                                                             // 61
                                                                                                     //
    'click button': function () {                                                                    // 65
      function clickButton() {                                                                       // 65
        var publicar = $('#publicarText').val();                                                     // 66
        $('#publicarText').val("");                                                                  // 67
        Session.set('numChars', 0);                                                                  // 68
        if (Meteor.user()) {                                                                         // 69
          Ingredientes.insert({ message: publicar, user: Meteor.user().username });                  // 70
        }                                                                                            // 71
      }                                                                                              // 72
                                                                                                     //
      return clickButton;                                                                            // 65
    }()                                                                                              // 65
  });                                                                                                // 60
                                                                                                     //
  Template.publicarBox.onRendered(function () {                                                      // 75
    Session.set('numChars', 0);                                                                      // 76
  });                                                                                                // 77
}                                                                                                    // 78
                                                                                                     //
if (Meteor.isServer) {                                                                               // 80
  Meteor.startup(function () {                                                                       // 81
    // code to run on server at startup                                                              //
  });                                                                                                // 83
}                                                                                                    // 84
///////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json",".html",".css"]});
require("./client/template.main.js");
require("./client/main.js");
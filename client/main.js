Ingredientes = new Meteor.Collection("Ingredientes");

if (Meteor.isClient) {

  Template.userManagement.helpers({

  });

  Template.userManagement.events({
    'click #signup': function() {
      var user = {
        username: $('#signup-username').val(),
        password: $('#signup-password').val(),
      };

      Accounts.createUser(user, function (error) {
        if(error) alert(error);
      });
    },

    'click #login': function() {
      var username = $('#login-username').val();
      var password = $('#login-password').val();

      Meteor.loginWithPassword(username, password, function(error) {
        if(error) alert(error);
      });
    },

    'click #logout': function() {
      Meteor.logout();
    }
  });




  Template.publicarBox.helpers({
    charCount: function() {
      return 140 - Session.get('numChars');
    },

    charClass: function() {
      if (Session.get('numChars') > 140) {
        return 'errCharCount';
      } else {
        return 'charCount';
      }
    },

    disableButton: function() {
      if (Session.get('numChars') <= 0 ||
          Session.get('numChars') > 140 ||
          !Meteor.user()) {
        return 'disabled';
      }
    }
  });

  Template.publicarBox.events({
    'input #publicarText': function(){
      Session.set('numChars', $('#publicarText').val().length);
    },

    'click button': function() {
      var publicar = $('#publicarText').val();
      $('#publicarText').val("");
      Session.set('numChars', 0);
      if (Meteor.user()) {
        Ingredientes.insert({message: publicar, user: Meteor.user().username});
      }
    }
  });

  Template.publicarBox.onRendered(function () {
    Session.set('numChars', 0);
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

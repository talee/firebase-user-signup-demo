(function() {
  'use strict';
  var db = new Firebase('https://scorching-torch-849.firebaseio.com/');
  db.unauth();
  var email;
  var password;
  document.getElementById('signup').addEventListener('submit', onSubmit);
  // Create user, signin, set profile info, then sign out
  function onSubmit(evt) {
    evt.preventDefault();
    email = document.getElementById('signupEmail').value;
    password = Math.random().toString(36).slice(2);
    db.createUser({
      email: email,
      password: password
    }, function(err, userData) {
      if (err) {
        throw err;
      }
      saveUserProfileInfo();
      console.log('Created user:', arguments);
    });
  }
  function saveUserProfileInfo() {
    // Sign in user
    db.authWithPassword({
      email: email,
      password: password
    }, function(error, authData) {
      if (error) {
        throw error;
      }
      console.log('Signed in:', arguments);

      // Save profile (demo only since it's already queryable)
      db.onAuth(function(authData) {
        console.log('onAuth:', authData);
        if (!authData) {
          console.log('Signed out.');
          return;
        }
        var user = {
          createTime: new Date().toString(),
          email: email,
          userAgent: navigator.userAgent
        };
        db.child('users').child(authData.uid).set(user, function(error) {
          if (error) {
            throw error;
          }
          console.log('Added user profile:', user);
          db.unauth();
          alert('Created user profile:' + JSON.stringify(user));
          document.getElementById('signupEmail').value = '';
        });
      });
    });
    password = null;
  }
})();

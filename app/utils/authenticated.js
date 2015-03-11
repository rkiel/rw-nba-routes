var Login         = require('../components/login-register/Login');
var firebaseUtils = require('./firebaseUtils');

function willTransitionTo(transition) {
  if (!firebaseUtils.isLoggedIn()) {
    Login.attemptedTransition = transition;
    transition.redirect('login');
  }
}

var authenticated = {
  statics: {
    willTransitionTo: willTransitionTo
  }
};

module.exports = authenticated;

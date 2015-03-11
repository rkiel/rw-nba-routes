var React = require('react');
var Router = require('react-router');
var firebaseUtils = require('../../utils/firebaseUtils');

function statics() {
  return {
    attemptedTransition: null
  }
}

function mixins() {
  return [
    Router.Navigation
  ];
}

function loggedIn() {
  if (Login.attemptedTransition) {
    var transition = Login.attemptedTransition;
    Login.attemptedTransition = null;
    transition.retry();
  } else {
    this.replaceWith('home');
  }
}

function handleSubmit(e) {
  e.preventDefault();
  var email = this.refs.email.getDOMNode().value;
  var pw    = this.refs.pw.getDOMNode().value;
  firebaseUtils.loginWithPW({email: email, password: pw}, loggedIn.bind(this));
}

function render() {
  return (
    <div className="col-sm-6 col-sm-offset-3">
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label> Email </label>
          <input className="form-control" ref="email" placeholder="Email"/>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input ref="pw" type="password" className="form-control" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

var Login = React.createClass({
  mixins:       mixins(),
  statics:      statics(),
  handleSubmit: handleSubmit,
  render:       render
});

module.exports = Login;

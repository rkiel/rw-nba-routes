var React = require('react');
var firebaseUtils = require('../../utils/firebaseUtils');
var Router = require('react-router');

function mixins() {
  return [ Router.Navigation ];
}

function userCreated(result) {
  if (result) {
    this.replaceWith('home');
  }
}

function handleSubmit(e) {
  e.preventDefault();
  var email = this.refs.email.getDOMNode().value;
  var pw    = this.refs.pw.getDOMNode().value;
  firebaseUtils.createUser({email: email, password: pw}, userCreated.bind(this));
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
  )
}

var Register = React.createClass({
  mixins: mixins(),
  handleSubmit: handleSubmit,
  render: render
});

module.exports = Register;


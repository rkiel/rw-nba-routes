var React = require('react');
var firebaseUtils = require('../../utils/firebaseUtils');

function componentWillMount() {
  firebaseUtils.logout();
}

function render() {
  return (
    <p>You are now logged out.</p>
  );
}

var Logout = React.createClass({
  componentWillMount: componentWillMount,
  render:             render
});

module.exports = Logout;

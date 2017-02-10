'use strict';
const React = require('react');

const hoodieShape = React.PropTypes.shape({
  store: React.PropTypes.func.isRequired,
  bind: React.PropTypes.func.isRequired,
  bindAll: React.PropTypes.func.isRequired
})

class Provider extends React.Component {
  getChildContext () {
    return { hoodie: this.props.hoodie }
  }
  render () {
    const  children  = this.props.children
    return React.Children.only(children)
  }
}

Provider.propTypes = {
  hoodie: hoodieShape.isRequired,
  children: React.PropTypes.element.isRequired
}
Provider.childContextTypes = {
  hoodie: hoodieShape.isRequired
}

exports.Provider = Provider

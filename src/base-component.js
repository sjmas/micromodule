import React from 'react'

class BaseComponent extends React.Component {
  constructor (...props) {
    super(...props)
  }

  render () {
    return <div><button ref="holaButton" onClick={this.props.clickHandler}>Hola</button></div>
  }
}

BaseComponent.propTypes = {
  clickHandler: React.PropTypes.func
}

export default BaseComponent

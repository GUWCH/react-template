//组合组件，类  slot

import React, { Component } from 'react'
import TopBar from '../TopBar'
import BottomNav from '../BottomNav'

export default class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activenum: 0,
    }
  }
  setActivenum = (data) => {
    this.setState({
      activenum: data,
    })
  }
  render() {
    const { children, showTop, showBottom } = this.props
    return (
      <div>
        {showTop && <TopBar />}
        <div>{children.content}</div>

        {showBottom && (
          <BottomNav
            activenum={this.state.activenum}
            setActivenum={this.setActivenum}
          />
        )}
      </div>
    )
  }
}

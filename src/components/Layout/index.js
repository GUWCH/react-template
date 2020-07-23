import React, { Component } from 'react'
import TopBar from '../TopBar'
import BottomNav from '../BottomNav'

export default class Layout extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <BottomNav />
      </div>
    )
  }
}

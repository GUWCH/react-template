import React from 'react'
import { DatePicker } from 'antd'
import 'antd/dist/antd.css'
import styles from './css/test.module.css'
import { FunctionClocker } from './components/FunctionClocker'
require('./css/test.module.css')

class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: null,
      count: 0,
    }
  }
  // componentWillMount() {
  //   this.setState({
  //     time: new Date().toLocaleTimeString(),
  //   })
  // }
  static getDerivedStateFromProps(props, state) {
    console.log(props, state)
    const { count } = state
    // 返回对象来更新state
    return count > 5 ? { count: 0 } : count
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('snapshot', prevProps, prevState)
    // 会作为返回值传给didUpdate
    return '传递snapshot'
  }
  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log(snapShot)
  }
  componentDidMount() {
    let that = this
    this.timer = setInterval(() => {
      that.setState({ time: new Date().toLocaleTimeString() })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  counter = () => {
    this.setState({
      count: this.state.count + 1,
    })
    console.log(this.state.count)
  }
  render() {
    const { count } = this.state
    return (
      <div>
        <DatePicker />
        <div>
          <p>{count}</p>
          <button onClick={this.counter}>click</button>
        </div>
        <div
          // className={`testBox testStyle`}
          className={styles.testBox}
        >
          {this.state.time}
        </div>
        <FunctionClocker />
        <Child />
      </div>
    )
  }
}

class Child extends React.Component {
  componentWillUnmount() {}
  render() {
    return <div>1111</div>
  }
}

export default Test

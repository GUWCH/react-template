import React from "react";
import { DatePicker } from "antd";
import "antd/dist/antd.css";
import styles from "./css/test.module.css";
require("./css/test.module.css");

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: null,
    };
  }
  componentWillMount() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  }
  componentDidMount() {
    let that = this;
    this.timer = setInterval(() => {
      that.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    console.log("css", JSON.stringify(styles));
    return (
      <div>
        <DatePicker />
        <div
          // className={`testBox testStyle`}
          className={styles.testBox}
        >
          {this.state.time}
        </div>
      </div>
    );
  }
}

export default Test;

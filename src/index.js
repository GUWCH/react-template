import React from 'react'
import ReactDOM from 'react-dom'
import Router from './router'
import './static/iconfont/iconfont.css'
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// class Square extends React.Component {
//   render() {
//     return (
//       <button
//       className="square"
//       onClick={()=>this.props.onClick()}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }

// ========================================

ReactDOM.render(
  // <Game />,
  <Router />,
  document.getElementById('root')
)

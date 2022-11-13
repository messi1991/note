import React from "react";
import ReactDOM from 'react-dom';

const handle = () => {
  console.log(`函数组件this: ${ this }`)
}
const Demo = () => {
  console.log(this)
  return (
    <div onClick={ handle }>
      函数组件事件
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(`状态组件this`, this)
  }
  // 此语法确保 `handleClick` 内的 `this` 已被绑定。
  // 注意: 这是 *实验性* 语法。
  handleClick =  () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <>
      <button onClick={this.handleClick}>
        Click me
      </button>
      <div>
        无事件
      </div>
      <Demo></Demo>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
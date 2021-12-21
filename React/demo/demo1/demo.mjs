class ClassComponent extends React.Component {

  // 箭头函数
  arrowFunction = () => {
      console.log('使用箭头函数，this 指向：', this);
  }

  // bind 绑定 this
  bindFunction() {
      console.log('使用 bind 改变 this 指向：', this);
  }


  // 普通函数
  normalFunction = function() {
    console.log('调用普通函数', this);
  }
  render() {
      return (
          <React.Fragment>
              <h3>类组件</h3>
              <div>
                  <button onClick={ this.normalFunction }>普通函数 this</button>
                  <button onClick={ this.arrowFunction }>箭头函数打印 this</button>
                  <br /><br />
                  <button onClick={ this.bindFunction.bind(this) }>bind 函数打印 this</button>
                  <br /><br />
                  <button onClick={() => console.log('匿名函数调用，this 指向：', this)}>匿名函数打印 this</button>
              </div>
          </React.Fragment>
      );
  }
}

/**
* 在函数组件中，是不存在组件的 this 实例的，因此绑定事件时，不需要有类组件中的顾虑
*/
const FunctionComponent = () => {
  // 箭头函数
  const arrowFunction = () => {
      console.log('使用箭头函数', this);
  }

  // bind 绑定函数
  const bindFunction = function() {
      console.log('使用 bind 调用函数', this);
  }

  // 普通函数
  const normalFunction = function() {
      console.log('调用普通函数', this);
  }
  return (
      <React.Fragment>
          <h3>函数组件</h3>
          <div>
              <button onClick={ normalFunction }>普通函数</button>
              <br /><br />
              <button onClick={ arrowFunction }>箭头函数</button>
              <br /><br />
              <button onClick={ bindFunction.bind(this) }>bind 函数</button>
              <br /><br />
              <button onClick={() => console.log('匿名函数调用', this)}>匿名函数</button>
          </div>
      </React.Fragment>
  );
}

const App = () => (
  <div>
      <ClassComponent />
      <FunctionComponent />
  </div>
)

ReactDOM.render(<App />, app);
  
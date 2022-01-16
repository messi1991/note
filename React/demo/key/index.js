import React, { useEffect, useMemo, useState } from "react";
import ReactDOM from 'react-dom';
const Child = () => {
  console.log('Child')
  return (
    <div>
      Child
    </div>
  )
};
/**
 * key 字符串变动key可以监听到
 * key 数组变动key可以监听到
 * key 对象和对象的变动不能监听到
 * key 对象变动其他数据类型可以监听到
 * 
 */
function App(){
  const [age, setAge] = useState(0);
  console.log('App')
  useEffect(() => {
    //setAge(1);
  }, []);

  const WarpChild = useMemo(() => <Child />, [])
  return (<div>
    demo { age }
    <button onClick={ () => { setAge(1) } }>点击</button>
    {
      WarpChild
    }
  </div>)
};

ReactDOM.render(<App />, document.getElementById("app"));
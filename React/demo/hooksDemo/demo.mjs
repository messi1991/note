class Cat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cat">
        {this.props.target}
      </div>
    )
  }
}

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = { target: 'gao' };
  }

  render() {
    return (
      <div className="data">
        {this.props.render(this.state)}
      </div>
    )
  }
}


const withUser = WrappedComponent => {
  const user = 'gao'
  return props => <WrappedComponent user={user} {...props} />;
};

const UserPage = props => (
  <div class="user-container">
    <p>My name is {props.user}!</p>
  </div>
);

const Box2 = withUser(UserPage)




const Box3 = () => {
  let [number,setNumber] = React.useState(0);
  function alertNumber(){
    setTimeout(()=>{
      // alert 只能获取到点击按钮时的那个状态
      alert(number);
    },3000);
  }
  return (
      <div>
          <p>Box3</p>
          <p>{number}</p>
          <button onClick={()=>setNumber(number+1)}>+</button>
          <button onClick={alertNumber}>alertNumber</button>
      </div>
  )
}


const Box4 = () => {
  const ref1 = React.useRef(1)

  const [count , setCount] = React.useState(0)

  const [flag, setFlag] = React.useState(0)
  const flagRef = React.useRef(flag)
  //flagRef.current = flag

  console.log('Box4', flag, flagRef.current)
  function dealClick() {
      console.log('dealClick', flag, flagRef.current)
      setTimeout(() => {
        console.log('setTimeout', flag, flagRef.current)
        setFlag(flagRef.current+1)
        //setFlag(old => old + 1)
        dealClick();
      }, 2000);
  }
  
  return (
    <div>
      <p>Box4</p>
      <button onClick={() => { ref1.current = ref1.current + 1 }}>ref1 点击 { ref1.current }</button>
      <button onClick={() => { setCount(old => (old + 1)) }}>count 点击 { count }</button>
      <button onClick={dealClick}>flag{flag}</button>
    </div>
  )
}




const App = () => (
  <div className="root">
    <Box
      render={data => (
        <Cat target={data.target} />
      )} />

    <Box2 />

    <Box3 />

    <Box4 />
  </div>
)

ReactDOM.render(<App />, app);

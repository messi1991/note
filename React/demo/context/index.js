import React from "react";
import ReactDOM from 'react-dom';
import { ThemeContext, themes, user, UserContext } from "./theme-context";
import ThemedButton from "./themed-button.js";

function Toolbar(props, a ,b ,c) {
  console.log("Toolbar props", props,  a ,b ,c)
    return (
      <ThemeContext.Consumer>
        {
          ({val, toggleTheme}) => (
            <UserContext.Consumer>
              {
                (value) => (
                  <ThemedButton onClick={ toggleTheme }>
                      Change Theme -- { JSON.stringify(val) }
                  </ThemedButton>
                )
              }
            </UserContext.Consumer>
          )
        }
      </ThemeContext.Consumer>
    )
}
const ToolbarWarp = React.memo(Toolbar)

class Parent extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent props", props);
    this.state = {
      theme: {
        theme: themes.light,
        toggleTheme: this.toggleTheme
      },
      parentValua: 1
    };
  }
  toggleTheme = () => {
    console.log("toggleTheme")
    this.setState(state => ({
      theme: {
        ...state.theme,
        theme: state.theme.theme === themes.dark
            ? themes.light
            : themes.dark,
      }
    }));
  }
  add = () => {
    this.setState({
      parentValua: this.state.parentValua + 1
    })
  }

  render() {
    console.log("Parent render", this.state);
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          {/* 如果采用错误的赋值方式，父所有的变动都会重现渲染 */}
          <UserContext.Provider value={ {
            name: 'Guest'
          } }>
            <ToolbarWarp />
          </UserContext.Provider>
        </ThemeContext.Provider>
        <button onClick={ this.add }>增加</button>
        <div>
          {
            this.props.children
          }
        </div>
      </div>
    );
  }
}

class App extends React.Component {
    constructor(props) {
      super(props);
      console.log('App props', props)
    }
    render() {
      console.log("App render", this.props);
      return (
        <Parent>
          <ThemedButton>no change</ThemedButton>
        </Parent>
      );
    }
  }

ReactDOM.render(<App />, document.getElementById("app"));
import React from "react";
import ReactDOM from 'react-dom';
import { ThemeContext, themes, UserContext } from "./theme-context";
import ThemedButton from "./themed-button.js";

function Toolbar(props, a ,b ,c) {
  console.log("Toolbar props", props,  a ,b ,c)
    return (
        <ThemedButton onClick={ props.changeTheme }>
            Change Theme
        </ThemedButton>
    )
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent props", props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }

  render() {
    console.log("Parent render", this.state);
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
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
      console.log("App render", this.state);
      return (
        <Parent>
          <ThemedButton>no change</ThemedButton>
        </Parent>
      );
    }
  }

ReactDOM.render(<App />, document.getElementById("app"));
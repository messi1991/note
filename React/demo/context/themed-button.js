import { ThemeContext, UserContext } from "./theme-context";
import React from "react";

class ThemeButton extends React.Component {
  constructor(props) {
    super(props);
    console.log("ThemeButton props", props);
  }
  render() {
    let  props =  this.props;
    let  { theme } =  this.context;
    console.log("ThemeButton render", props, theme);
    return (
      <button 
      { ...props }
      style={{
        backgroundColor: theme.background
      }}
      >
        { this.props.children }
        <UserContext.Consumer>
          {
            (value) => (<span>--- { JSON.stringify(value)  }</span>)
          }
        </UserContext.Consumer>
      </button>
    )
  }
}
ThemeButton.contextType = ThemeContext

export default ThemeButton

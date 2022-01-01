import { ThemeContext } from "./theme-context";
import React from "react";

class ThemeButton extends React.Component {
  constructor(props) {
    super(props);
    console.log("ThemeButton props", props);
  }
  render() {
    let  props =  this.props;
    let  theme =  this.context;
    console.log("ThemeButton render", props, theme);
    return (
      <button 
      { ...props }
      style={{
        backgroundColor: theme.background
      }}
      />
    )
  }
}
ThemeButton.contextType = ThemeContext

export default ThemeButton

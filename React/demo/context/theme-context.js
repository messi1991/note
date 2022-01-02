import React from "react";
export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
}

export const user = {
  name: 'Guest'
}

export const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => {}
});

export const UserContext = React.createContext(user)

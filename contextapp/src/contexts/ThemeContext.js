import React, { Component, createContext, useState } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { syntax: '#555', ui: '#ddd', bg: '#eee'},
    dark: { syntax: '#ddd', ui: '#333', bg: '#555'}
  };
  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme});
  };

  render() {
    return (
      <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;

//! Functional component version not working
// export const ThemeContext = createContext();

// export default function ThemeContextProvider({children}) {
//   const [themeState, setThemeState] = useState({
//     isLightTheme: true,
//     light: { syntax: '#555', ui: '#ddd', bg: '#eee'},
//     dark: { syntax: '#ddd', ui: '#333', bg: '#555'}
//   });
//   const toggleTheme = () => {
//     setThemeState({isLightTheme: !themeState.isLightTheme});
//   };
//   console.log(themeState)
//   console.log({...themeState})

//   return (
//     <ThemeContext.Provider value={{...themeState, toggleTheme}}>
//       {children}
//     </ThemeContext.Provider>
//   )
// }
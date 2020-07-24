import React from 'react';

export const themes = {
  dark: {
    backgroundColor: 'green',
    padding: 40,
    text: {
      Color: 'red',
    },
  },
  light: {
    color: 'black',
    backgroundColor: 'yellow',
    padding: 20,
  },
};

export const ThemeContext = React.createContext(themes.dark);

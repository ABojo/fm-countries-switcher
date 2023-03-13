import { ThemeProvider } from "styled-components";
import { useState } from "react";

function Theme({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  function toggleTheme() {
    setDarkMode((darkMode) => !darkMode);
  }

  const lightTheme = {
    colors: {
      elements: "hsl(0, 0%, 100%)",
      bg: "hsl(0, 0%, 98%)",
      text: "hsl(200, 15%, 8%)",
      input: "hsl(0, 0%, 52%)",
    },
  };

  const darkTheme = {
    colors: {
      elements: "hsl(209, 23%, 22%)",
      bg: "hsl(207, 26%, 17%)",
      text: "hsl(0, 0%, 100%)",
      input: "hsl(209, 23%, 22%)",
    },
  };

  let activeTheme = {
    toggleTheme,
    weights: {
      sm: 300,
      md: 600,
      lg: 800,
    },
  };

  //copy the selected theme's properties to the activeTheme object
  activeTheme = Object.assign(activeTheme, darkMode ? darkTheme : lightTheme);

  return <ThemeProvider theme={activeTheme}>{children}</ThemeProvider>;
}

export default Theme;
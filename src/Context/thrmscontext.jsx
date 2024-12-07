import { createContext, useState } from "react";

export const ThemeContext = createContext();


export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");


  const updateTheme = () => {
    setTheme(() => (theme  == "light" ? "black" : "white"));
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

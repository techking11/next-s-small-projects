"use client";

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState('light');

  const toggle = function () {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  }

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be in ThemeProvider");
  }
  return context;
}
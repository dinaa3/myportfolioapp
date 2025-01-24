import React, { createContext, useEffect, useState, useContext } from "react";

// Define the shape of ThemeContext
interface ThemeContextType {
  themeName: string;
  toggleTheme: () => void;
}

// Create a Theme Context with default undefined
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

// ThemeProvider component
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [themeName, setThemeName] = useState("light");

  useEffect(() => {
    const darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setThemeName(darkMediaQuery.matches ? "dark" : "light");

    darkMediaQuery.addEventListener("change", (e) =>
      setThemeName(e.matches ? "dark" : "light")
    );

    return () => {
      darkMediaQuery.removeEventListener("change", (e) =>
        setThemeName(e.matches ? "dark" : "light")
      );
    };
  }, []);

  const toggleTheme = () => {
    setThemeName((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create a custom hook for using the theme safely
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

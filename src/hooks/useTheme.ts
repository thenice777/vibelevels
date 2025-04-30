import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== "undefined") {
      // Check if theme exists in localStorage
      const savedTheme = localStorage.getItem("theme");
      
      // Check if user prefers dark mode
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      // Return saved theme or system preference
      return (savedTheme as 'light' | 'dark') || (prefersDark ? 'dark' : 'light');
    }
    return "light";
  });

  // Apply theme change to document
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Apply class to html element
      const root = document.documentElement;
      
      // Remove both classes first
      root.classList.remove("light", "dark");
      
      // Add the current theme class
      root.classList.add(theme);
      
      // Store in localStorage
      localStorage.setItem("theme", theme);
      
      console.log(`Theme switched to: ${theme}`);
    }
  }, [theme]);

  const toggleTheme = () => {
    console.log(`Toggling theme from ${theme} to ${theme === 'dark' ? 'light' : 'dark'}`);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return { theme, toggleTheme };
}

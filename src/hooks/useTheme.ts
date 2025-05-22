
import { useEffect, useState } from "react";

export type Theme = 'light' | 'dark';

export function useTheme() {
  // Initialize theme state from localStorage or system preference
  const [theme, setTheme] = useState<Theme>(() => {
    // Only run in browser environment
    if (typeof window === "undefined") return 'dark';
    
    try {
      // Check localStorage first
      const savedTheme = localStorage.getItem("theme") as Theme;
      if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
        return savedTheme;
      }
      
      // Default to dark theme instead of checking system preference
      return 'dark';
    } catch (error) {
      console.error("Error initializing theme:", error);
    }
    
    // Default to dark theme if all else fails
    return 'dark';
  });

  // Apply theme to document and store in localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    try {
      // Apply theme by adding/removing dark class as Tailwind expects
      document.documentElement.classList.toggle("dark", theme === "dark");
      
      // Update localStorage
      localStorage.setItem("theme", theme);
      
      console.log(`Theme set to: ${theme}`);
    } catch (error) {
      console.error("Error applying theme:", error);
    }
  }, [theme]);

  // Function to toggle between themes
  const toggleTheme = () => {
    console.log(`Toggling theme from ${theme} to ${theme === 'dark' ? 'light' : 'dark'}`);
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return { theme, setTheme, toggleTheme };
}

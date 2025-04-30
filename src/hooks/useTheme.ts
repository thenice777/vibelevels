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
      // This is the key fix: Just toggle the dark class as Tailwind expects
      // Rather than adding/removing both classes
      document.documentElement.classList.toggle("dark", theme === "dark");
      
      // Store in localStorage
      localStorage.setItem("theme", theme);
      
      console.log(`Theme switched to: ${theme}, dark class ${theme === "dark" ? "added" : "removed"}`);
    }
  }, [theme]);

  const toggleTheme = () => {
    console.log(`Toggling theme from ${theme} to ${theme === 'dark' ? 'light' : 'dark'}`);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return { theme, toggleTheme };
}

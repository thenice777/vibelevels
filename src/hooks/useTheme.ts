import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as 'light' | 'dark') || "light";
    }
    return "light";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", theme === "dark");
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return { theme, toggleTheme };
}

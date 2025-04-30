import { Sun, Moon } from "lucide-react";
import { useThemeContext } from "@/contexts/ThemeContext";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeContext();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative p-2 rounded-md border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50
        ${isDark 
          ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' 
          : 'bg-white border-gray-200 hover:bg-gray-100'}
      `}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      type="button"
    >
      <span className="sr-only">{isDark ? "Switch to light mode" : "Switch to dark mode"}</span>
      <Sun
        className={`h-5 w-5 text-yellow-500 transition-transform duration-300 ${
          isDark ? 'rotate-90 scale-0 absolute' : 'rotate-0 scale-100'
        }`}
      />
      <Moon
        className={`h-5 w-5 text-blue-600 transition-transform duration-300 ${
          isDark ? 'rotate-0 scale-100' : 'rotate-90 scale-0 absolute'
        }`}
      />
    </button>
  );
};

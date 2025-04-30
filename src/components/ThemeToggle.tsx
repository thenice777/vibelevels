import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        ml-4 p-2 rounded border transition-all duration-300
        ${theme === 'dark' 
          ? 'bg-gray-800 border-gray-600 hover:bg-gray-700' 
          : 'bg-white border-gray-300 hover:bg-gray-100'}
      `}
      aria-label="Toggle theme"
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      type="button"
    >
      {theme === "dark" 
        ? <Sun className="h-5 w-5 text-yellow-500" /> 
        : <Moon className="h-5 w-5 text-blue-600" />}
      <span className="sr-only">{theme === "dark" ? "Light mode" : "Dark mode"}</span>
    </button>
  );
};

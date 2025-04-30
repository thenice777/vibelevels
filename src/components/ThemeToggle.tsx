import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="ml-4 p-2 rounded hover:bg-accent border border-border transition-colors"
      aria-label="Toggle theme"
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      type="button"
    >
      {theme === "dark" ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-blue-600" />}
    </button>
  );
};

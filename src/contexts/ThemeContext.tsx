import React, { createContext, useContext, ReactNode } from 'react';
import { useTheme, Theme } from '@/hooks/useTheme';

// Define the shape of our theme context
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

// Create the context with a default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom hook to use the theme context
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

// Props for the ThemeProvider component
type ThemeProviderProps = {
  children: ReactNode;
};

// ThemeProvider component that wraps the app
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Use our existing useTheme hook
  const { theme, toggleTheme, setTheme } = useTheme();
  
  // Create the value object to be provided to consumers
  const value = {
    theme,
    toggleTheme,
    setTheme,
  };
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

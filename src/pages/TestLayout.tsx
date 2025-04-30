import React from "react";
import { Layout } from "@/components/Layout";
import { useThemeContext } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const TestLayoutPage = () => {
  const { theme, toggleTheme } = useThemeContext();
  
  return (
    <Layout>
      <div className="p-8 max-w-[700px] mx-auto text-left">
        <div className="sticky top-0 bg-background z-10 pb-4 transition-colors duration-300">
          <h1 className="text-center text-foreground text-3xl font-bold mb-2">Theme Test Page</h1>
          <p className="text-center text-muted-foreground mb-4">
            <strong>Current theme: {theme}</strong>
          </p>
          <div className="flex justify-center mb-6 gap-4">
            <ThemeToggle />
            <Button onClick={toggleTheme} variant="outline" className="border-primary text-primary px-4">
              Toggle theme via button
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="rounded-lg border border-border p-4 bg-card">
            <h2 className="font-semibold text-xl mb-3 text-card-foreground">Card Component</h2>
            <p className="text-card-foreground">This demonstrates the card background and text colors.</p>
          </div>
          
          <div className="rounded-lg border border-border p-4 bg-accent">
            <h2 className="font-semibold text-xl mb-3 text-accent-foreground">Accent Component</h2>
            <p className="text-accent-foreground">This demonstrates the accent background and text colors.</p>
          </div>
          
          <div className="rounded-lg border border-border p-4 bg-primary">
            <h2 className="font-semibold text-xl mb-3 text-primary-foreground">Primary Component</h2>
            <p className="text-primary-foreground">This demonstrates the primary background and text colors.</p>
          </div>
          
          <div className="rounded-lg border border-border p-4 bg-secondary">
            <h2 className="font-semibold text-xl mb-3 text-secondary-foreground">Secondary Component</h2>
            <p className="text-secondary-foreground">This demonstrates the secondary background and text colors.</p>
          </div>
        </div>
        
        <h2 className="text-foreground font-semibold text-xl mt-6 mb-3">Sample Table</h2>
        <table className="w-full border-collapse mb-6">
          <thead>
            <tr>
              <th className="border border-border p-2 text-foreground">Element</th>
              <th className="border border-border p-2 text-foreground">Class</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border p-2 text-foreground">Background</td>
              <td className="border border-border p-2 text-foreground"><code>bg-background</code></td>
            </tr>
            <tr>
              <td className="border border-border p-2 text-foreground">Text</td>
              <td className="border border-border p-2 text-foreground"><code>text-foreground</code></td>
            </tr>
            <tr>
              <td className="border border-border p-2 text-foreground">Border</td>
              <td className="border border-border p-2 text-foreground"><code>border-border</code></td>
            </tr>
          </tbody>
        </table>

        <div className="sticky bottom-0 bg-background z-10 pt-2 text-center border-t-2 border-dashed border-border mt-10">
          <strong className="text-foreground">Theme is {theme === 'dark' ? '🌙 dark' : '☀️ light'}</strong>
        </div>
      </div>
    </Layout>
  );
};

export default TestLayoutPage;

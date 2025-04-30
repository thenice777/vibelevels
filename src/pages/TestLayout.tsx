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
        <p className="text-foreground">Welcome to the test page! Here's some sample content to demonstrate the new scrollable Content area. Scroll down to see the effect!</p>
        <h2 className="text-foreground font-semibold text-xl mt-6 mb-3">Sample List</h2>
        <ul className="list-disc pl-5 space-y-2 text-foreground">
          <li>Navigation is fixed at the top</li>
          <li>Footer is always at the bottom of the page</li>
          <li>This content area scrolls independently</li>
        </ul>
        <h2 className="text-foreground font-semibold text-xl mt-6 mb-3">Sample Table</h2>
        <table className="w-full border-collapse mb-6">
          <thead>
            <tr>
              <th className="border border-border p-2 text-foreground">Feature</th>
              <th className="border border-border p-2 text-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border p-2 text-foreground">Header</td>
              <td className="border border-border p-2 text-foreground">Visible</td>
            </tr>
            <tr>
              <td className="border border-border p-2 text-foreground">Content Area</td>
              <td className="border border-border p-2 text-foreground">Working</td>
            </tr>
            <tr>
              <td className="border border-border p-2 text-foreground">Footer</td>
              <td className="border border-border p-2 text-foreground">Visible</td>
            </tr>
          </tbody>
        </table>
        <h2 className="text-foreground font-semibold text-xl mt-6 mb-3">Sample Image</h2>
        <div className="text-center mb-6">
          <img src="https://via.placeholder.com/300x120?text=Sample+Image" alt="Sample" className="rounded-lg" />
        </div>
        <p className="text-muted-foreground italic text-center">
          This is a sample image placeholder.
        </p>

        {/* Add a long list to force scrolling */}
        <h2 className="text-foreground font-semibold text-xl mt-6 mb-3">Long List</h2>
        <ol className="mb-8 text-foreground">
          {Array.from({ length: 30 }, (_, i) => (
            <li key={i} className="py-2 border-b border-border">
              List item {i + 1}
            </li>
          ))}
        </ol>

        <div className="sticky bottom-0 bg-background z-10 pt-2 text-center border-t-2 border-dashed border-border">
          <strong className="text-foreground">Bottom of Scrollable Content</strong>
        </div>
      </div>
    </Layout>
  );
};

export default TestLayoutPage;

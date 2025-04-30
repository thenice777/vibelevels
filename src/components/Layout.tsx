
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navigation />
      {/* Scrollable content area, with top padding for header */}
      <div className="pt-20 flex flex-col flex-grow overflow-y-auto">
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

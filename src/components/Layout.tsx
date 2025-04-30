
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navigation />
      {/* Add top padding so content is not hidden behind the fixed header */}
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

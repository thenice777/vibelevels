
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { Content } from "./Content";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navigation />
      <div className="flex flex-col flex-1" style={{ minHeight: 0 }}>
        <Content>
          {children}
        </Content>
        <Footer />
      </div>
    </div>
  );
};

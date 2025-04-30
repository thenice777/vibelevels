import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { Content } from "./Content";
import { useThemeContext } from "@/contexts/ThemeContext";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { theme } = useThemeContext();
  
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans transition-colors duration-300">
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

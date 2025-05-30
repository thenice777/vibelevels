import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LogIn, Menu } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useThemeContext } from "@/contexts/ThemeContext";

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useThemeContext();

  return (
    <nav className="fixed top-0 w-full z-50 h-20 bg-background border-b border-border flex items-center shadow-md backdrop-blur">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <span className="text-primary">vibe</span><span className="text-foreground">levels</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-foreground">learn</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4 grid gap-3">
                    <Link to="/courses" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">courses</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Browse our library of interactive courses
                      </p>
                    </Link>
                    <Link to="/dashboard" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">dashboard</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Track your learning progress
                      </p>
                    </Link>
                    <Link to="/achievements" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">achievements</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        View your badges, medals and certificates
                      </p>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Link to="/community" className="text-foreground hover:text-primary transition-colors">
            community
          </Link>
          <Link to="/blog" className="text-foreground hover:text-primary transition-colors">
            blog
          </Link>
          
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2">
            <LogIn className="h-4 w-4" /> log in
          </Button>
          
          {/* Theme toggle button */}
          <ThemeToggle />
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
          <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "absolute top-full left-0 w-full md:hidden py-4 px-4 border-t border-border bg-background backdrop-blur shadow-md", 
        isMobileMenuOpen ? "block" : "hidden"
      )}>
        <div className="flex flex-col space-y-3">
          <Link 
            to="/courses" 
            className="py-2 px-3 rounded hover:bg-accent text-foreground"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            courses
          </Link>
          <Link 
            to="/dashboard" 
            className="py-2 px-3 rounded hover:bg-accent text-foreground"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            dashboard
          </Link>
          <Link 
            to="/achievements" 
            className="py-2 px-3 rounded hover:bg-accent text-foreground"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            achievements
          </Link>
          <Link 
            to="/community" 
            className="py-2 px-3 rounded hover:bg-accent text-foreground"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            community
          </Link>
          <Link 
            to="/blog" 
            className="py-2 px-3 rounded hover:bg-accent text-foreground"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            blog
          </Link>
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full mt-2 gap-2"
          >
            <LogIn className="h-4 w-4" /> log in
          </Button>
        </div>
      </div>
    </nav>
  );
};

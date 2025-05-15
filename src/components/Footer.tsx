
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-primary text-xl font-bold">vibelevels</h3>
            <p className="text-muted-foreground">
              Go from 0 to 1 fast with vibelevels, designed to get you from idea to product in less than an hour.
            </p>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">made with unconditional ❤️ for free education</p>
              <p className="text-xs text-muted-foreground">v0.0.3</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-foreground font-semibold mb-4">courses</h4>
            <ul className="space-y-2">
              <li><Link to="/courses/web-dev-pitfalls" className="text-muted-foreground hover:text-primary">web dev pitfalls</Link></li>
              <li><Link to="/courses/project-architecture" className="text-muted-foreground hover:text-primary">project architecture</Link></li>
              <li><Link to="/courses/ai-dev-tools" className="text-muted-foreground hover:text-primary">ai dev tools</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-foreground font-semibold mb-4">resources</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary">blog</Link></li>
              <li><Link to="/community" className="text-muted-foreground hover:text-primary">community</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary">faq</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-foreground font-semibold mb-4">legal</h4>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-muted-foreground hover:text-primary">terms of service</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary">privacy policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

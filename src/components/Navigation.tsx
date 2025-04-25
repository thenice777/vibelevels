
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-primary text-2xl font-bold">
          vibelevels
        </Link>
        <div className="flex gap-8">
          <Link to="/" className="text-white hover:text-primary transition-colors">
            home
          </Link>
          <Link to="/courses" className="text-white hover:text-primary transition-colors">
            courses
          </Link>
          <Link to="/community" className="text-white hover:text-primary transition-colors">
            community
          </Link>
          <Link to="/blog" className="text-white hover:text-primary transition-colors">
            blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

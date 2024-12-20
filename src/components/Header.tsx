import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-foundation-primary">
              TMT Foundation
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foundation-text hover:text-foundation-primary transition-colors">
              About Us
            </Link>
            <Link to="/" className="text-foundation-text hover:text-foundation-primary transition-colors">
              Leadership
            </Link>
            <Link to="/" className="text-foundation-text hover:text-foundation-primary transition-colors">
              Results
            </Link>
            <Link to="/" className="text-foundation-text hover:text-foundation-primary transition-colors">
              Events
            </Link>
            <Button className="bg-foundation-primary hover:bg-foundation-secondary text-white">
              DONATE
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
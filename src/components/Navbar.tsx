
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import Button from './Button';
import { MapPin, Menu, X, Search, User, LogOut } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would come from auth context in a real app

  // Toggle auth state for demo
  const toggleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  // Check if current route is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md",
        isScrolled ? "bg-white/80 shadow-sm" : "bg-transparent",
        isScrolled && location.pathname === "/" ? "bg-white/80" : ""
      )}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-soccer-green flex items-center justify-center">
            <MapPin size={20} className="text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight">
            Effortless<span className="text-soccer-green">Soccer</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/dashboard" 
            className={cn(
              "font-medium transition-colors hover:text-soccer-green",
              isActive('/dashboard') ? "text-soccer-green" : "text-foreground/80"
            )}
          >
            Find Games
          </Link>
          <Link 
            to="/create-game" 
            className={cn(
              "font-medium transition-colors hover:text-soccer-green",
              isActive('/create-game') ? "text-soccer-green" : "text-foreground/80"
            )}
          >
            Create Game
          </Link>
          <Link 
            to="/profile" 
            className={cn(
              "font-medium transition-colors hover:text-soccer-green",
              isActive('/profile') ? "text-soccer-green" : "text-foreground/80"
            )}
          >
            Profile
          </Link>
        </div>

        {/* Auth buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <Link to="/profile">
                <div className="w-9 h-9 rounded-full bg-soccer-gray flex items-center justify-center hover:bg-soccer-gray-dark transition-colors">
                  <User size={18} className="text-foreground/70" />
                </div>
              </Link>
              <Button variant="outline" onClick={toggleAuth} className="flex items-center space-x-2">
                <LogOut size={16} />
                <span>Sign Out</span>
              </Button>
            </div>
          ) : (
            <>
              <Button variant="outline" onClick={toggleAuth}>Sign In</Button>
              <Button variant="primary" onClick={toggleAuth}>Sign Up</Button>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X size={24} className="text-foreground" />
          ) : (
            <Menu size={24} className="text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel absolute top-16 left-0 right-0 min-h-0 z-50 animate-slide-in-bottom">
          <div className="flex flex-col space-y-4 p-6">
            <Link 
              to="/dashboard" 
              className={cn(
                "py-2 px-4 font-medium rounded-lg transition-colors",
                isActive('/dashboard') ? "bg-soccer-green/10 text-soccer-green" : "hover:bg-soccer-gray"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Find Games
            </Link>
            <Link 
              to="/create-game" 
              className={cn(
                "py-2 px-4 font-medium rounded-lg transition-colors",
                isActive('/create-game') ? "bg-soccer-green/10 text-soccer-green" : "hover:bg-soccer-gray"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Create Game
            </Link>
            <Link 
              to="/profile" 
              className={cn(
                "py-2 px-4 font-medium rounded-lg transition-colors",
                isActive('/profile') ? "bg-soccer-green/10 text-soccer-green" : "hover:bg-soccer-gray"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Profile
            </Link>
            
            <hr className="border-soccer-gray-dark/30" />
            
            {isLoggedIn ? (
              <Button variant="outline" onClick={toggleAuth} className="w-full flex items-center justify-center space-x-2">
                <LogOut size={16} />
                <span>Sign Out</span>
              </Button>
            ) : (
              <div className="flex flex-col space-y-2">
                <Button variant="outline" onClick={toggleAuth} className="w-full">Sign In</Button>
                <Button variant="primary" onClick={toggleAuth} className="w-full">Sign Up</Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

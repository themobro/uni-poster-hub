
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LogIn, Upload, Menu, X, Home } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar: React.FC = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white border-b">
      <div className="container-main">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-primary">UniPost<span className="text-accent-foreground">AI</span></span>
            </Link>
          </div>

          {isMobile ? (
            <>
              <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden">
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </>
          ) : (
            <nav className="hidden md:flex items-center space-x-4">
              <Link to="/" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to="/upload" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Upload
              </Link>
              <Link to="/login">
                <Button variant="default" size="sm" className="ml-4">
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </Button>
              </Link>
            </nav>
          )}
        </div>

        {/* Mobile menu */}
        {isMobile && isMenuOpen && (
          <div className="md:hidden py-2 space-y-1">
            <Link 
              to="/" 
              className="flex items-center text-gray-600 hover:text-primary px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="mr-2 h-4 w-4" />
              Home
            </Link>
            <Link 
              to="/upload" 
              className="flex items-center text-gray-600 hover:text-primary px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <Upload className="mr-2 h-4 w-4" />
              Upload
            </Link>
            <Link 
              to="/login" 
              className="flex items-center text-gray-600 hover:text-primary px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

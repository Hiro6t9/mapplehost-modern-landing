
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Server, Monitor, Gamepad2, Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/80 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <Server className="h-6 w-6 text-mapple-400" />
              <span className="text-xl font-bold text-white">MappleHost</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
            <Link to="/minecraft" className="text-gray-300 hover:text-white transition-colors flex items-center">
              <Gamepad2 className="h-4 w-4 mr-1" /> Minecraft
            </Link>
            <Link to="/vps" className="text-gray-300 hover:text-white transition-colors flex items-center">
              <Monitor className="h-4 w-4 mr-1" /> VPS
            </Link>
            <Link to="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link>
            <Button variant="outline" className="mr-2 text-gray-300 border-gray-700 hover:bg-gray-800 rounded-full">Sign In</Button>
            <Button className="bg-mapple-600 hover:bg-mapple-700 rounded-full">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900 absolute top-16 left-0 w-full border-b border-gray-800 shadow-lg animate-fade-in">
            <div className="px-4 py-4 space-y-4">
              <Link to="/" className="block text-gray-300 hover:text-white">Home</Link>
              <Link to="/minecraft" className="block text-gray-300 hover:text-white flex items-center">
                <Gamepad2 className="h-4 w-4 mr-2" /> Minecraft Hosting
              </Link>
              <Link to="/vps" className="block text-gray-300 hover:text-white flex items-center">
                <Monitor className="h-4 w-4 mr-2" /> VPS Hosting
              </Link>
              <Link to="#pricing" className="block text-gray-300 hover:text-white">Pricing</Link>
              <div className="space-y-2 pt-2">
                <Button variant="outline" className="w-full text-gray-300 border-gray-700 hover:bg-gray-800 rounded-full">Sign In</Button>
                <Button className="w-full bg-mapple-600 hover:bg-mapple-700 rounded-full">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

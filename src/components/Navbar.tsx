
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
      isScrolled ? 'bg-gray-900/80 backdrop-blur-md border-b border-gray-800 dark:bg-gray-900/80 dark:border-gray-800 light:bg-white/80 light:border-gray-200' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <Server className="h-6 w-6 text-mapple-400 dark:text-mapple-400 light:text-mapple-600" />
              <span className="text-xl font-bold dark:text-white light:text-gray-800">MappleHost</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="dark:text-gray-300 light:text-gray-700 dark:hover:text-white light:hover:text-black transition-colors">Home</Link>
            <Link to="/minecraft" className="dark:text-gray-300 light:text-gray-700 dark:hover:text-white light:hover:text-black transition-colors flex items-center">
              <Gamepad2 className="h-4 w-4 mr-1" /> Minecraft
            </Link>
            <Link to="/vps" className="dark:text-gray-300 light:text-gray-700 dark:hover:text-white light:hover:text-black transition-colors flex items-center">
              <Monitor className="h-4 w-4 mr-1" /> VPS
            </Link>
            <Button className="bg-mapple-600 hover:bg-mapple-700 rounded-full dark:bg-mapple-600 dark:hover:bg-mapple-700 light:bg-mapple-500 light:hover:bg-mapple-600">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="dark:text-gray-300 light:text-gray-700 dark:hover:text-white light:hover:text-black focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden dark:bg-gray-900 light:bg-white absolute top-16 left-0 w-full dark:border-b dark:border-gray-800 light:border-b light:border-gray-200 shadow-lg animate-fade-in">
            <div className="px-4 py-4 space-y-4">
              <Link to="/" className="block dark:text-gray-300 light:text-gray-700 dark:hover:text-white light:hover:text-black">Home</Link>
              <Link to="/minecraft" className="block dark:text-gray-300 light:text-gray-700 dark:hover:text-white light:hover:text-black flex items-center">
                <Gamepad2 className="h-4 w-4 mr-2" /> Minecraft Hosting
              </Link>
              <Link to="/vps" className="block dark:text-gray-300 light:text-gray-700 dark:hover:text-white light:hover:text-black flex items-center">
                <Monitor className="h-4 w-4 mr-2" /> VPS Hosting
              </Link>
              <div className="pt-2">
                <Button className="w-full bg-mapple-600 hover:bg-mapple-700 rounded-full dark:bg-mapple-600 dark:hover:bg-mapple-700 light:bg-mapple-500 light:hover:bg-mapple-600">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

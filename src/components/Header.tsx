import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet, Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import Button from './ui/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50">
      <nav className="glass mx-4 mt-4 rounded-2xl">
        <div className="container px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Wallet className="h-8 w-8 text-green-500" />
              <span className="text-2xl font-bold text-green-500">InTasca</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-green-500">Book a Ride</Link>
              <Link to="/become-driver" className="text-gray-700 hover:text-green-500">Become a Driver</Link>
              <Link to="/about" className="text-gray-700 hover:text-green-500">About</Link>
              <button className="flex items-center space-x-1 text-gray-700 hover:text-green-500">
                <Globe className="h-4 w-4" />
                <span>EN</span>
              </button>
              <Button>Sign In</Button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-4">
              <Link to="/" className="block text-gray-700 hover:text-green-500">Book a Ride</Link>
              <Link to="/become-driver" className="block text-gray-700 hover:text-green-500">Become a Driver</Link>
              <Link to="/about" className="block text-gray-700 hover:text-green-500">About</Link>
              <button className="flex items-center space-x-1 text-gray-700 hover:text-green-500">
                <Globe className="h-4 w-4" />
                <span>EN</span>
              </button>
              <Button className="w-full">Sign In</Button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
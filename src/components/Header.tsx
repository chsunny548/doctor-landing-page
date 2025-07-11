import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X } from 'lucide-react';
import CalendlyPopup from './CalendlyPopup';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'User Stories', href: '#reviews' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a href="#home">
              <h1 className="text-2xl font-bold text-medical-blue">
                Dr. Akkireddy Nandini, MD
              </h1>
            </a>
            <p className="text-sm text-medical-gray font-bold">Psychiatry Specialist</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-medical-blue transition-colors duration-200 font-bold"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          {/* <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-medical-blue">
              <Phone className="h-4 w-4 mr-2" />
              <span className="font-semibold">+91 9999999999</span>
            </div>
            <Button 
              className="bg-medical-blue hover:bg-medical-navy"
              onClick={() => setIsCalendlyOpen(true)}
            >
              Book Appointment
            </Button>
          </div> */}

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-medical-blue py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center text-medical-blue py-2">
                <Phone className="h-4 w-4 mr-2" />
                <span>+91 9999999999</span>
              </div>
              <Button 
                className="bg-medical-blue hover:bg-medical-navy mt-2"
                onClick={() => setIsCalendlyOpen(true)}
              >
                Book Appointment
              </Button>
            </nav>
          </div>
        )}
      </div>

      <CalendlyPopup 
        url="https://calendly.com/chsunny548"
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
      />
    </header>
  );
};

export default Header;
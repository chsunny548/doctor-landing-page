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
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-medical-blue">
              Dr. Akkireddy Nandini, MD
            </h1>
            <p className="text-sm text-medical-gray">Psychiatry Specialist</p>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex space-x-16 absolute left-1/2 transform -translate-x-1/2 translate-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-medical-blue transition-colors text-lg font-bold"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          {/* <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-medical-blue">
              <Phone className="h-4 w-4 mr-2" />
              <span className="font-semibold">+91 7008935890</span>
            </div>
            <Button 
              className="bg-medical-blue hover:bg-medical-navy"
              onClick={() => setIsCalendlyOpen(true)}
            >
              Book Appointment
            </Button>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-600 hover:text-medical-blue transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center text-medical-blue py-2">
                <Phone className="h-4 w-4 mr-2" />
                <span>+91 7008935890</span>
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

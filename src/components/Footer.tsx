import React from 'react';
import { Phone, Mail, MapPin, Clock, Shield, Award } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Dr. Johnson', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Patient Information', href: '#patient-info' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Appointment Booking', href: '#' },
    { name: 'Patient Portal', href: '#' }
  ];

  const services = [
    'Preventive Care',
    'Chronic Disease Management',
    'Diagnostic Services',
    'Medication Management',
    'Acute Care',
    'Health Consultations'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Practice Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Dr. Akkireddy Nandini, MD</h3>
            <p className="text-gray-300 leading-relaxed">
              Providing compassionate, comprehensive Psychiatry care with over 15 years 
              of experience in preventive medicine and chronic disease management.
            </p>
            <div className="flex space-x-4 pt-4">
              <div className="bg-medical-blue/20 p-2 rounded-lg">
                <Award className="h-5 w-5 text-medical-blue" />
              </div>
              <div>
                <p className="text-sm font-semibold">Board Certified</p>
                <p className="text-xs text-gray-400">American Board of Psychiatry</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-medical-blue transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone className="h-4 w-4 text-medical-blue mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold">+91 9999999999</p>
                  <p className="text-xs text-gray-400">24/7 Emergency Line</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-4 w-4 text-medical-blue mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-sm">info@drjohnsonmd.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 text-medical-blue mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-sm">123 Medical Center Drive</p>
                  <p className="text-sm">Suite 200, Metro City, ST 12345</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-4 w-4 text-medical-blue mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-sm">Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-sm">Sat: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            {/* Compliance & Privacy */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-medical-blue mr-2" />
                <span className="text-sm text-gray-300">HIPAA Compliant</span>
              </div>
              <div className="text-gray-600">•</div>
              <div className="text-sm text-gray-300">SSL Secured</div>
            </div>

            {/* Copyright & Legal */}
            <div className="text-right">
              <div className="space-x-4 text-sm text-gray-300 mb-2">
                <a href="#" className="hover:text-medical-blue transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-medical-blue transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-medical-blue transition-colors">Patient Rights</a>
              </div>
              <p className="text-xs text-gray-400">
                © 2024 Dr. Akkireddy Nandini, MD. All rights reserved.
              </p>
            </div>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="bg-red-900 border border-red-700 rounded-lg p-4 mt-8">
          <div className="flex items-center">
            <div className="bg-red-600 p-2 rounded-full mr-3">
              <Phone className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-red-100">Medical Emergency?</p>
              <p className="text-xs text-red-200">
                For life-threatening emergencies, call 911 immediately. 
                For urgent after-hours care, call +91 9999999999.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Button } from '@/components/ui/button';
import { Award, Clock, Shield, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-primary-50 to-blue-100 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              <span className="text-medical-blue">Empathetic </span>
               Listening 
            </h1>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              <span className="text-medical-blue">Evidence </span> 
              Based Healing
            </h1>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              <span className="text-medical-blue">Your Mind Matters</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              With over 5 years of experience in Psychiatry, Dr. Akkireddy Nandini provides comprehensive, patient-centered healthcare with a focus on preventive care and wellness.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-medical-blue hover:bg-medical-navy">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-medical-blue text-medical-blue">
                Learn More About Our Services
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-md mb-2">
                  <Award className="h-8 w-8 text-medical-blue mx-auto" />
                </div>
                <p className="text-sm font-semibold">Board Certified</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-md mb-2">
                  <Users className="h-8 w-8 text-medical-blue mx-auto" />
                </div>
                <p className="text-sm font-semibold">5000+ Patients</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-md mb-2">
                  <Clock className="h-8 w-8 text-medical-blue mx-auto" />
                </div>
                <p className="text-sm font-semibold">5+ Years</p>
              </div>
              
            </div>
          </div>

          {/* Right Content - Doctor Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-medical-blue to-medical-navy rounded-full mb-6 flex items-center justify-center">
                  <span className="text-white text-6xl font-light">SJ</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Akkireddy Nandini, MD</h3>
                <p className="text-medical-blue font-semibold mb-4">Psychiatry Specialist</p>
                <div className="text-left space-y-2">
                  <p className="text-sm text-gray-600">✓ Johns Hopkins Medical School</p>
                  <p className="text-sm text-gray-600">✓ Mayo Clinic Residency</p>
                  <p className="text-sm text-gray-600">✓ American Board of Psychiatry</p>
                  <p className="text-sm text-gray-600">✓ Member, American College of Physicians</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

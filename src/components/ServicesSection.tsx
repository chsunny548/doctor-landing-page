import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Heart, Activity, Shield, Pill, Stethoscope, ClipboardList, CloudRain, Syringe, Baby  } from 'lucide-react';
import CalendlyPopup from './CalendlyPopup';
import ReviewsSection from '@/components/ReviewsSection';

const ServicesSection = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const services = [
    {
      icon: Brain,
      title: "Mental Health Assessment & Diagnosis",
    },
    {
      icon: Activity,
      title: "Depression, Anxiety  & Stress",
    },
    {
      icon: Pill,
      title: "Medication Management",
    },
    {
      icon: Syringe,
      title: "Addiction & Substance Use Related Treatment",
    },
    {
      icon: Heart,
      title: "Emotional Wellness & Councelling",
    },
    {
      icon: Baby,
      title: "Child, Adolescent & Adult Psychiatry",
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Medical Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Providing a full range of Psychiatry services with a focus on preventive care, 
            chronic disease management, and personalized treatment plans.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg flex flex-col justify-center items-center">
              <CardHeader className="text-center pb-4">
                <div className="bg-gradient-to-br from-medical-blue to-medical-navy w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              {/* <CardContent className="pt-0">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-medical-blue rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent> */}
            </Card>
          ))}
        </div>
        <div>
          <ReviewsSection />
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Take Control of Your Health?
            </h3>
            <p className="text-gray-600 mb-6">
              Schedule a consultation today to discuss your health goals and create a personalized care plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-medical-blue hover:bg-medical-navy text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                onClick={() => setIsCalendlyOpen(true)}
              >
                Book Your Appointment
              </button>
              <button className="border-2 border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white px-8 py-3 rounded-lg font-semibold transition-all">
                Call +91 9999999999
              </button>
            </div>
          </div>
        </div>

        <CalendlyPopup 
          url="https://calendly.com/chsunny548"
          isOpen={isCalendlyOpen}
          onClose={() => setIsCalendlyOpen(false)}
        />
      </div>
    </section>
  );
};

export default ServicesSection;

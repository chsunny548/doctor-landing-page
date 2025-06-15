
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Activity, Shield, Pill, Stethoscope, ClipboardList } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Heart,
      title: "Preventive Care",
      description: "Comprehensive health screenings, vaccinations, and wellness exams to prevent illness and maintain optimal health.",
      features: ["Annual Physical Exams", "Health Risk Assessments", "Vaccination Programs", "Cancer Screenings"]
    },
    {
      icon: Activity,
      title: "Chronic Disease Management",
      description: "Expert care for ongoing health conditions with personalized treatment plans and regular monitoring.",
      features: ["Diabetes Management", "Hypertension Care", "Heart Disease", "Arthritis Treatment"]
    },
    {
      icon: Stethoscope,
      title: "Diagnostic Services",
      description: "Advanced diagnostic testing and evaluation to accurately identify and address health concerns.",
      features: ["Laboratory Testing", "ECG/EKG", "Pulmonary Function Tests", "Diagnostic Imaging Coordination"]
    },
    {
      icon: Pill,
      title: "Medication Management",
      description: "Comprehensive medication review and management to ensure safe and effective treatment.",
      features: ["Prescription Management", "Drug Interaction Screening", "Generic Alternatives", "Medication Education"]
    },
    {
      icon: Shield,
      title: "Acute Care",
      description: "Prompt treatment for sudden illnesses and urgent medical concerns in a comfortable office setting.",
      features: ["Cold & Flu Treatment", "Minor Infections", "Urgent Medical Issues", "Same-Day Appointments"]
    },
    {
      icon: ClipboardList,
      title: "Health Consultations",
      description: "Personalized health consultations and second opinions to help you make informed healthcare decisions.",
      features: ["Second Opinions", "Treatment Planning", "Health Education", "Lifestyle Counseling"]
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
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="bg-gradient-to-br from-medical-blue to-medical-navy w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
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
              </CardContent>
            </Card>
          ))}
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
              <button className="bg-medical-blue hover:bg-medical-navy text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Book Your Appointment
              </button>
              <button className="border-2 border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white px-8 py-3 rounded-lg font-semibold transition-all">
                Call +91 7008935890
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

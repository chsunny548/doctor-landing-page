import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Heart, Stethoscope } from 'lucide-react';

const AboutSection = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Education",
      items: [
        "Doctor of Medicine (MD) - Johns Hopkins School of Medicine",
        "Bachelor of Science in Biology - Harvard University",
        "Residency in Psychiatry - Mayo Clinic"
      ]
    },
    {
      icon: Award,
      title: "Certifications",
      items: [
        "American Board of Psychiatry",
        "Advanced Cardiac Life Support (ACLS)",
        "Basic Life Support (BLS)",
        "American College of Physicians Fellow"
      ]
    },
    {
      icon: Stethoscope,
      title: "Specializations",
      items: [
        "Preventive Medicine",
        "Chronic Disease Management",
        "Cardiovascular Health",
        "Diabetes Care & Management"
      ]
    },
    {
      icon: Heart,
      title: "Philosophy",
      items: [
        "Patient-centered care approach",
        "Emphasis on preventive medicine",
        "Collaborative treatment planning",
        "Comprehensive wellness focus"
      ]
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Dr. Akkireddy Nandini
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to providing exceptional healthcare with compassion, expertise, and 
            a commitment to improving the lives of my patients through comprehensive medical care.
          </p>
        </div>

        <div className="space-y-6 mb-16">
          {/* Professional Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Professional Journey</h3>
            <p className="text-gray-600 leading-relaxed">
              Dr. Akkireddy Nandini has been practicing Psychiatry for over 5 years, 
              bringing a wealth of experience and expertise to his patients. After completing 
              his medical degree at Johns Hopkins School of Medicine, he pursued his residency 
              at the prestigious Mayo Clinic, where he developed his patient-centered approach 
              to healthcare.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Dr. Gella specializes in preventive care, chronic disease management, and 
              comprehensive health assessments. He believes in building long-term relationships 
              with his patients, taking the time to understand their unique health needs and 
              lifestyle factors that contribute to overall wellness.
            </p>
            <p className="text-gray-600 leading-relaxed">
              His approach to medicine combines evidence-based treatments with personalized 
              care plans, ensuring each patient receives the most appropriate and effective 
              treatment for their individual circumstances.
            </p>
          </div>

          {/* Achievements & Recognition
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Achievements & Recognition</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-medical-blue pl-4">
                <h4 className="font-semibold text-gray-900">Top Doctor Award</h4>
                <p className="text-gray-600">Recognized by Metro Medical Association (2022, 2023)</p>
              </div>
              <div className="border-l-4 border-medical-blue pl-4">
                <h4 className="font-semibold text-gray-900">Patient Choice Award</h4>
                <p className="text-gray-600">Highest patient satisfaction ratings (2021-2023)</p>
              </div>
              <div className="border-l-4 border-medical-blue pl-4">
                <h4 className="font-semibold text-gray-900">Research Publications</h4>
                <p className="text-gray-600">Published 12 peer-reviewed articles on preventive medicine</p>
              </div>
              <div className="border-l-4 border-medical-blue pl-4">
                <h4 className="font-semibold text-gray-900">Medical Director</h4>
                <p className="text-gray-600">Wellness Program at Metro General Hospital (2020-Present)</p>
              </div>
            </div>
          </div> */}
        </div>

        {/* Credentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((credential, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-medical-blue/10 p-3 rounded-lg mr-3">
                    <credential.icon className="h-6 w-6 text-medical-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{credential.title}</h3>
                </div>
                <ul className="space-y-2">
                  {credential.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-gray-600 flex items-start">
                      <span className="text-medical-blue mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

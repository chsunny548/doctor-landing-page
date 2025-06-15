
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, CreditCard, Clock, Phone, AlertCircle, Users } from 'lucide-react';

const PatientInfoSection = () => {
  const infoCards = [
    {
      icon: FileText,
      title: "New Patient Forms",
      description: "Complete your registration before your first visit",
      items: [
        "Patient Registration Form",
        "Medical History Questionnaire", 
        "Insurance Information Form",
        "HIPAA Privacy Notice"
      ],
      buttonText: "Download Forms"
    },
    {
      icon: CreditCard,
      title: "Insurance & Billing",
      description: "We accept most major insurance plans",
      items: [
        "Blue Cross Blue Shield",
        "Aetna, Cigna, UnitedHealth",
        "Medicare & Medicaid",
        "HSA/FSA Accepted"
      ],
      buttonText: "Verify Coverage"
    },
    {
      icon: Clock,
      title: "Office Hours",
      description: "Convenient scheduling to fit your lifestyle",
      items: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Closed",
        "Emergency: 24/7 On-Call"
      ],
      buttonText: "Schedule Now"
    }
  ];

  const policies = [
    {
      title: "Appointment Policy",
      content: "Please arrive 15 minutes early for your appointment. We require 24-hour notice for cancellations to avoid fees."
    },
    {
      title: "Payment Policy", 
      content: "Payment is due at time of service. We accept cash, credit cards, and HSA/FSA cards."
    },
    {
      title: "Prescription Refills",
      content: "Allow 48 hours for prescription refills. Refill requests can be made online or by calling our office."
    },
    {
      title: "Emergency Procedures",
      content: "For medical emergencies, call 911. For urgent after-hours concerns, call our 24/7 answering service."
    }
  ];

  const faqs = [
    {
      question: "What should I bring to my first appointment?",
      answer: "Please bring a valid photo ID, insurance card, completed new patient forms, current medication list, and any relevant medical records from previous providers."
    },
    {
      question: "How far in advance should I schedule appointments?",
      answer: "For routine visits, we recommend scheduling 2-3 weeks in advance. Same-day appointments may be available for urgent concerns."
    },
    {
      question: "Do you offer telehealth appointments?",
      answer: "Yes, we offer telehealth consultations for follow-up visits, medication management, and certain routine care needs."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We require 24-hour advance notice for cancellations. Late cancellations or no-shows may result in a fee."
    }
  ];

  return (
    <section id="patient-info" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Patient Information Center
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know for a smooth and efficient healthcare experience. 
            We're here to make your visit as comfortable as possible.
          </p>
        </div>

        {/* Information Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {infoCards.map((card, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="bg-medical-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <card.icon className="h-8 w-8 text-medical-blue" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {card.title}
                </CardTitle>
                <p className="text-gray-600">{card.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {card.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-medical-blue rounded-full mr-3"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-medical-blue hover:bg-medical-navy text-white py-2 rounded-lg font-semibold transition-colors">
                  {card.buttonText}
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Policies Section
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Office Policies</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {policies.map((policy, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{policy.title}</h4>
                <p className="text-gray-600">{policy.content}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Emergency Information */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-16">
          <div className="flex items-start">
            <AlertCircle className="h-6 w-6 text-red-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-2">Emergency Information</h3>
              <p className="text-red-700 mb-4">
                For life-threatening emergencies, call 911 immediately. For urgent medical concerns after hours, 
                call our office at +91 7008935890 to reach our 24/7 answering service.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-red-800">Emergency: Call 911</h4>
                  <p className="text-sm text-red-600">Chest pain, difficulty breathing, severe injuries</p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-800">After Hours: +91 7008935890</h4>
                  <p className="text-sm text-red-600">Urgent concerns, medication questions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h3>
          <div className="space-y-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientInfoSection;

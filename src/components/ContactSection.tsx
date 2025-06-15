
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, Car, Calendar } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      primary: "+91 7008935890",
      secondary: "24/7 Emergency Line Available"
    },
    {
      icon: Mail,
      title: "Email",
      primary: "info@drjohnsonmd.com",
      secondary: "Non-urgent inquiries only"
    },
    {
      icon: MapPin,
      title: "Address",
      primary: "123 Medical Center Drive",
      secondary: "Suite 200, Metro City, ST 12345"
    },
    {
      icon: Clock,
      title: "Hours",
      primary: "Mon-Fri: 8AM-6PM",
      secondary: "Sat: 9AM-2PM, Sun: Closed"
    }
  ];

  const officeFeatures = [
    "Free parking available",
    "Wheelchair accessible",
    "On-site laboratory",
    "Digital check-in system",
    "Private consultation rooms",
    "Comfortable waiting area"
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact & Location
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help you with all your healthcare needs. Contact us today to schedule 
            an appointment or get answers to your questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-medical-blue/10 p-3 rounded-lg mr-4 flex-shrink-0">
                        <info.icon className="h-6 w-6 text-medical-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                        <p className="text-lg font-medium text-medical-blue">{info.primary}</p>
                        <p className="text-sm text-gray-600">{info.secondary}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Appointment Booking Card */}
            <Card className="bg-gradient-to-r from-medical-blue to-medical-navy text-white">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Calendar className="h-6 w-6 mr-3" />
                  Schedule Your Appointment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  Ready to take the next step in your healthcare journey? Book your appointment today 
                  and experience compassionate, expert medical care.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-medical-blue hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors flex-1">
                    Book Online
                  </button>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-medical-blue px-6 py-3 rounded-lg font-semibold transition-all flex-1">
                    Call Now
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Office Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Car className="h-6 w-6 text-medical-blue mr-3" />
                  Office Features & Amenities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {officeFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-medical-blue rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map & Directions */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Find Our Office</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-medical-blue mx-auto mb-2" />
                    <p className="text-gray-600">Interactive Map</p>
                    <p className="text-sm text-gray-500">123 Medical Center Drive, Suite 200</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Driving Directions</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• From I-95: Take Exit 23 toward Medical District</li>
                      <li>• Turn right on Medical Center Drive</li>
                      <li>• Our building is on the left (200 suite)</li>
                      <li>• Free parking available in adjacent lot</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Public Transportation</h4>
                    <p className="text-sm text-gray-600">
                      Metro Blue Line: Medical Center Station (2 blocks away)
                      <br />
                      Bus Routes: 15, 23, 42 stop directly in front of building
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input 
                        type="text" 
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                      placeholder="john.doe@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                      placeholder="+91 7008935890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                      placeholder="How can we help you today?"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-medical-blue hover:bg-medical-navy text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    Send Message
                  </button>
                </form>
                <p className="text-xs text-gray-500 mt-4">
                  * For urgent medical concerns, please call our office directly. This form is for general inquiries only.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Heart, Phone, Mail, MapPin, Award, BookOpen, Briefcase, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Hedlogo from '@/images/logo.jpg';
import Hedname from '@/images/Hed_name.png';
import Mhed from '@/images/Merged_logo.png';






const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src={Hedlogo}
                alt="Logo"
                className="h-12 w-auto"
              />
              {/* <h1 className="text-2xl font-bold text-gray-800">Mukkulathor Free Educational & Employment Trust</h1> */}
              <img
                src={Hedname}
                alt="Mukkulathor Free Educational & Employment Trust"
                className="h-12 w-auto"
              />
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/gallery" className="text-gray-600 hover:text-blue-600 transition-colors">Gallery</Link>
              <Link to="/funding" className="text-gray-600 hover:text-blue-600 transition-colors">Donate</Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
              <Button asChild variant="outline">
                <Link to="/login" className="flex items-center space-x-2">
                  <LogIn className="h-4 w-4" />
                  <span>Login</span>
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Empowering Dreams Through <span className="text-blue-600">Education</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We provide educational support and job assistance to deserving students from underprivileged backgrounds, 
            helping them build a brighter future through quality education and skill development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/gallery">View Success Stories</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/funding">Support Our Mission</Link>
            </Button>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src={Mhed}
                  alt="Logo"
                  className="h-12 w-auto"
                />
                
              </div>
              <p className="text-gray-300 text-sm">
                Empowering dreams through education and creating opportunities for a brighter future.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/gallery" className="block text-gray-300 hover:text-white transition-colors">Student Gallery</Link>
                <Link to="/funding" className="block text-gray-300 hover:text-white transition-colors">Social Funding</Link>
                <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">Contact Us</Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 98430 58867</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>example_mail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Madurai, Tamilnadu, India</span>
                </div>
              </div>
            </div>
            
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300 text-sm">
            <p>&copy; 2024 Mukkulathor Free Educational & Employment Trust. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

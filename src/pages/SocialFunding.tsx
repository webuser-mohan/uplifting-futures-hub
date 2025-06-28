
import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ArrowLeft, Heart, Users, Award, CreditCard, Building, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Hedlogo from '@/images/logo.jpg';
import Hedname from '@/images/Hed_name.png';
import fnd_det from '@/images/Funding_details.jpg';

const SocialFunding = () => {

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
              <img
                src={Hedname}
                alt="Mukkulathor Free Educational & Employment Trust"
                className="h-12 w-auto"
              />
            </div>
            <Button asChild variant="outline">
              <Link to="/" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-12 w-12 text-red-500 mr-4" />
            <h2 className="text-4xl font-bold text-gray-800">Support a Student's Dream</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Your contribution can transform lives by providing quality education and career opportunities to deserving students from underprivileged backgrounds.
          </p>
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-semibold text-blue-600">Every rupee counts!</span> Your donation directly supports students' education, skill development, and career placement.
            </p>
            <Badge variant="secondary" className="text-sm">
              100% of donations go directly to student support
            </Badge>
          </div>
        </div>
      </section>



      {/* Donation Options */}
      <section className="py-1 mb-6">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-3">Building Construction</h3>
          <div className="flex items-center justify-center">
            <img
                src={fnd_det}
                alt="Logo"
                className="h-30 w-auto"
              />
          </div>
        </div>
      </section>



      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join hundreds of donors who are already transforming lives through education. Your support today creates tomorrow's leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
              Start Donating
            </Button>
            <Button asChild size="lg" variant="outline"  className="bg-white text-blue-600 hover:bg-gray-100 px-8">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialFunding;

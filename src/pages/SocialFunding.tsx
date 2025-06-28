
import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ArrowLeft, Heart, Users, Award, CreditCard, Building, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SocialFunding = () => {
  const impactStats = [
    { value: "500+", label: "Students Supported", icon: Users },
    { value: "₹2Cr+", label: "Funds Distributed", icon: CreditCard },
    { value: "85%", label: "Success Rate", icon: Award },
    { value: "50+", label: "Partner Companies", icon: Building }
  ];

  const donationOptions = [
    {
      title: "Student Sponsor",
      amount: "₹25,000",
      description: "Sponsor a student's complete education for one year",
      features: ["Full tuition coverage", "Books and materials", "Monthly progress reports", "Direct student interaction"]
    },
    {
      title: "Skills Development",
      amount: "₹10,000",
      description: "Fund skill development courses and certifications",
      features: ["Technical training", "Soft skills workshop", "Certification fees", "Job placement support"]
    },
    {
      title: "Basic Support",
      amount: "₹5,000",
      description: "Provide basic educational support and materials",
      features: ["Books and stationery", "Exam fees", "Transportation allowance", "Study materials"]
    }
  ];

  const successStories = [
    {
      name: "Priya Sharma",
      story: "With donor support, completed B.Tech and now works at a leading tech company",
      image: "https://images.unsplash.com/photo-1494790108755-2616c05e8d08?w=400&h=300&fit=crop"
    },
    {
      name: "Rahul Kumar",
      story: "MBA scholarship helped him start his own successful business",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    },
    {
      name: "Anjali Patel",
      story: "Became a government teacher through our education support program",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-800">Mukkulathor Free Educational & Employment Trust</h1>
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

      {/* Impact Statistics */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Impact So Far</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-3xl font-bold text-gray-800">{stat.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Choose Your Impact Level</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {donationOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-2 hover:border-blue-300">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">{option.title}</CardTitle>
                  <div className="text-3xl font-bold text-blue-600">{option.amount}</div>
                  <CardDescription className="text-gray-600">{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Donate {option.amount}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Donation */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Custom Donation Amount</h3>
            <p className="text-gray-600 mb-8">
              Want to contribute a different amount? Every contribution, big or small, makes a difference.
            </p>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <span className="text-2xl font-bold text-gray-800">₹</span>
                <input 
                  type="number" 
                  placeholder="Enter amount" 
                  className="text-2xl font-bold text-center border-2 border-gray-300 rounded-lg px-4 py-2 w-48 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8">
                Donate Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Secure Payment Options</h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="bg-white rounded-lg shadow-md p-6">
                <CreditCard className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <p className="font-medium">Credit/Debit Cards</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <Building className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <p className="font-medium">Net Banking</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <Smartphone className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <p className="font-medium">UPI Payment</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <Heart className="h-8 w-8 text-red-600 mx-auto mb-3" />
                <p className="font-medium">Digital Wallets</p>
              </div>
            </div>
            <div className="text-center mt-6">
              <p className="text-gray-600">All transactions are secured with 256-bit SSL encryption</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Stories of Transformation</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">{story.name}</h4>
                  <p className="text-gray-600">{story.story}</p>
                </CardContent>
              </Card>
            ))}
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
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialFunding;


import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Heart, Award, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const successStories = [
    {
      name: "Priya Sharma",
      course: "B.Tech Computer Science",
      achievement: "Placed at Tech Mahindra",
      image: "https://images.unsplash.com/photo-1494790108755-2616c05e8d08?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Rahul Kumar",
      course: "MBA Finance",
      achievement: "Started his own business",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Anjali Patel",
      course: "M.Sc Mathematics",
      achievement: "Government Teacher",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const programs = [
    {
      icon: GraduationCap,
      title: "Education Support",
      description: "Financial assistance for higher education and skill development courses"
    },
    {
      icon: Users,
      title: "Job Assistance",
      description: "Career guidance, interview preparation, and job placement support"
    },
    {
      icon: Heart,
      title: "Social Welfare",
      description: "Community development and social empowerment programs"
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
              <h1 className="text-2xl font-bold text-gray-800">Bright Future Trust</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/register" className="text-gray-600 hover:text-blue-600 transition-colors">Register</Link>
              <Link to="/gallery" className="text-gray-600 hover:text-blue-600 transition-colors">Gallery</Link>
              <Link to="/funding" className="text-gray-600 hover:text-blue-600 transition-colors">Donate</Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Empowering Dreams Through Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Bright Future Trust is dedicated to providing educational opportunities and job assistance to deserving students from underprivileged backgrounds. Together, we can build a brighter tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/register">Apply for Support</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/funding">Support Our Cause</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Programs</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <program.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {program.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-lg">{story.name}</CardTitle>
                  <CardDescription>{story.course}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center space-x-2 text-green-600">
                    <Award className="h-4 w-4" />
                    <span className="font-medium">{story.achievement}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Students Supported</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Partner Companies</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">₹2Cr+</div>
              <div className="text-blue-100">Funds Distributed</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Ready to Transform Lives?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us in our mission to provide quality education and job opportunities to deserving students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link to="/funding">Donate Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-8 w-8 text-blue-400" />
                <h4 className="text-xl font-bold">Bright Future Trust</h4>
              </div>
              <p className="text-gray-300">
                Empowering dreams through education and creating opportunities for a brighter future.
              </p>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
              <div className="space-y-2">
                <Link to="/register" className="block text-gray-300 hover:text-white transition-colors">Apply for Support</Link>
                <Link to="/gallery" className="block text-gray-300 hover:text-white transition-colors">Student Gallery</Link>
                <Link to="/funding" className="block text-gray-300 hover:text-white transition-colors">Donate</Link>
              </div>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Contact Info</h5>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Phone className="h-4 w-4" />
                  <span>+91 9876543210</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Mail className="h-4 w-4" />
                  <span>info@brightfuturetrust.org</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <MapPin className="h-4 w-4" />
                  <span>Mumbai, Maharashtra</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Bright Future Trust. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;


import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Heart, Phone, Mail, MapPin, Award, BookOpen, Briefcase, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
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
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/gallery" className="text-gray-600 hover:text-blue-600 transition-colors">Gallery</Link>
              <Link to="/funding" className="text-gray-600 hover:text-blue-600 transition-colors">Funding</Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
              <Button asChild variant="outline">
                <Link to="/login" className="flex items-center space-x-2">
                  <LogIn className="h-4 w-4" />
                  <span>Master Login</span>
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

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Programs</h3>
            <p className="text-lg text-gray-600">Comprehensive support for educational and career development</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Educational Support</CardTitle>
                <CardDescription>
                  Financial assistance for tuition fees, books, and educational materials
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Briefcase className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Job Assistance</CardTitle>
                <CardDescription>
                  Career guidance, skill development, and job placement support
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Award className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Skill Development</CardTitle>
                <CardDescription>
                  Professional training programs and certification courses
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Success Stories</h3>
            <p className="text-lg text-gray-600">Meet some of our successful students</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616c05e8d08?w=200&h=200&fit=crop&crop=face" 
                  alt="Priya Sharma"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-semibold mb-2">Priya Sharma</h4>
                <p className="text-blue-600 mb-2">B.Tech Computer Science</p>
                <p className="text-gray-600 text-sm">Now working at Tech Mahindra</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" 
                  alt="Rahul Kumar"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-semibold mb-2">Rahul Kumar</h4>
                <p className="text-blue-600 mb-2">MBA Finance</p>
                <p className="text-gray-600 text-sm">Started his own business</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face" 
                  alt="Anjali Patel"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-semibold mb-2">Anjali Patel</h4>
                <p className="text-blue-600 mb-2">M.Sc Mathematics</p>
                <p className="text-gray-600 text-sm">Government School Teacher</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/gallery">View All Stories</Link>
            </Button>
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
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Partner Companies</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-6 w-6" />
                <h3 className="text-lg font-semibold">Bright Future Trust</h3>
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
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@brightfuturetrust.org</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <p className="text-gray-300 text-sm">
                Stay connected with our latest updates and success stories.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300 text-sm">
            <p>&copy; 2024 Bright Future Trust. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Hedlogo from '@/images/logo.jpg';
import Hedname from '@/images/Hed_name.png';


const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setCredentials(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple master login validation
    if (credentials.username === 'master' && credentials.password === 'admin123') {
      localStorage.setItem('isAuthenticated', 'true');
      toast({
        title: "Success",
        description: "Login successful! Welcome Master.",
      });
      navigate('/dashboard');
    } else {
      toast({
        title: "Error",
        description: "Invalid credentials. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <Card className="max-w-md mx-auto">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
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
            <CardTitle className="text-2xl font-bold text-gray-800">Login</CardTitle>
            <CardDescription>
              Access the student management dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter username"
                  value={credentials.username}
                  onChange={(e) => handleInputChange('username', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  value={credentials.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Button>
            </form>
            {/* <div className="mt-6 text-center">
              <Button asChild variant="outline">
                <Link to="/">Back to Home</Link>
              </Button>
            </div> */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;

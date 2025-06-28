
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Upload, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';

const StudentRegistration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    aadharNumber: '',
    fullName: '',
    dateOfBirth: '',
    educationQualification: '',
    stream: '',
    email: '',
    phone: '',
    address: '',
    annualIncome: '',
    ugDegree: '',
    ugCollege: '',
    pgDegree: '',
    pgCollege: '',
    governmentExam: '',
    examDetails: '',
    documents: null
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, documents: file }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.aadharNumber || !formData.fullName || !formData.email || !formData.phone) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Aadhar validation (12 digits)
    if (!/^\d{12}$/.test(formData.aadharNumber)) {
      toast({
        title: "Error",
        description: "Please enter a valid 12-digit Aadhar number.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    // Phone validation (10 digits)
    if (!/^\d{10}$/.test(formData.phone)) {
      toast({
        title: "Error",
        description: "Please enter a valid 10-digit phone number.",
        variant: "destructive"
      });
      return;
    }

    console.log('Form submitted:', formData);
    toast({
      title: "Success",
      description: "Your application has been submitted successfully! We will contact you soon.",
    });

    // Reset form
    setFormData({
      aadharNumber: '',
      fullName: '',
      dateOfBirth: '',
      educationQualification: '',
      stream: '',
      email: '',
      phone: '',
      address: '',
      annualIncome: '',
      ugDegree: '',
      ugCollege: '',
      pgDegree: '',
      pgCollege: '',
      governmentExam: '',
      examDetails: '',
      documents: null
    });
  };

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
            <Button asChild variant="outline">
              <Link to="/" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-800">Student Registration</CardTitle>
            <CardDescription className="text-lg">
              Apply for educational support and job assistance programs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Personal Information</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="aadhar">Aadhar Number *</Label>
                    <Input
                      id="aadhar"
                      type="text"
                      placeholder="Enter 12-digit Aadhar number"
                      value={formData.aadharNumber}
                      onChange={(e) => handleInputChange('aadharNumber', e.target.value)}
                      maxLength={12}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input
                      id="dob"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter 10-digit phone number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      maxLength={10}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email ID *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="address">Full Address</Label>
                  <Textarea
                    id="address"
                    placeholder="Enter your complete address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    rows={3}
                  />
                </div>
              </div>

              {/* Educational Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Educational Information</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Education Qualification</Label>
                    <Select onValueChange={(value) => handleInputChange('educationQualification', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select qualification" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10th">10th Standard</SelectItem>
                        <SelectItem value="12th">12th Standard</SelectItem>
                        <SelectItem value="ug">Under Graduate</SelectItem>
                        <SelectItem value="pg">Post Graduate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="stream">Stream/Discipline</Label>
                    <Input
                      id="stream"
                      type="text"
                      placeholder="e.g., Science, Commerce, Arts, Engineering"
                      value={formData.stream}
                      onChange={(e) => handleInputChange('stream', e.target.value)}
                    />
                  </div>
                </div>

                {/* UG/PG Details */}
                {(formData.educationQualification === 'ug' || formData.educationQualification === 'pg') && (
                  <>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="ugDegree">UG Degree Name</Label>
                        <Input
                          id="ugDegree"
                          type="text"
                          placeholder="e.g., B.Tech, B.Com, B.A."
                          value={formData.ugDegree}
                          onChange={(e) => handleInputChange('ugDegree', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="ugCollege">UG College Name</Label>
                        <Input
                          id="ugCollege"
                          type="text"
                          placeholder="Enter college name"
                          value={formData.ugCollege}
                          onChange={(e) => handleInputChange('ugCollege', e.target.value)}
                        />
                      </div>
                    </div>

                    {formData.educationQualification === 'pg' && (
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="pgDegree">PG Degree Name</Label>
                          <Input
                            id="pgDegree"
                            type="text"
                            placeholder="e.g., M.Tech, MBA, M.A."
                            value={formData.pgDegree}
                            onChange={(e) => handleInputChange('pgDegree', e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="pgCollege">PG College Name</Label>
                          <Input
                            id="pgCollege"
                            type="text"
                            placeholder="Enter college name"
                            value={formData.pgCollege}
                            onChange={(e) => handleInputChange('pgCollege', e.target.value)}
                          />
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Financial & Additional Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Additional Information</h3>
                
                <div>
                  <Label>Annual Income Range</Label>
                  <Select onValueChange={(value) => handleInputChange('annualIncome', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select income range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="below-1l">Below ₹1 Lakh</SelectItem>
                      <SelectItem value="1-2l">₹1 - 2 Lakhs</SelectItem>
                      <SelectItem value="2-5l">₹2 - 5 Lakhs</SelectItem>
                      <SelectItem value="5l-plus">₹5+ Lakhs</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Have you attended any Government Exam?</Label>
                  <RadioGroup 
                    value={formData.governmentExam} 
                    onValueChange={(value) => handleInputChange('governmentExam', value)}
                    className="flex space-x-6 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="exam-yes" />
                      <Label htmlFor="exam-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="exam-no" />
                      <Label htmlFor="exam-no">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                {formData.governmentExam === 'yes' && (
                  <div>
                    <Label htmlFor="examDetails">Specify Exam Details</Label>
                    <Textarea
                      id="examDetails"
                      placeholder="Please specify which exams you have attended"
                      value={formData.examDetails}
                      onChange={(e) => handleInputChange('examDetails', e.target.value)}
                      rows={2}
                    />
                  </div>
                )}

                <div>
                  <Label htmlFor="documents">Upload Photo or Documents</Label>
                  <div className="mt-2 flex items-center space-x-4">
                    <Input
                      id="documents"
                      type="file"
                      accept=".pdf,.jpeg,.jpg,.png"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById('documents')?.click()}
                      className="flex items-center space-x-2"
                    >
                      <Upload className="h-4 w-4" />
                      <span>Choose File</span>
                    </Button>
                    {formData.documents && (
                      <span className="text-sm text-gray-600">
                        {(formData.documents as File).name}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Accepted formats: PDF, JPEG, JPG, PNG (Max size: 5MB)
                  </p>
                </div>
              </div>

              <div className="flex justify-center pt-6">
                <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
                  Submit Application
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentRegistration;

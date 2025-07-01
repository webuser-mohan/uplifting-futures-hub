
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Upload } from 'lucide-react';

interface Student {
  id: number;
  // Personal Information
  fullName: string;
  dateOfBirth: string;
  gender: string;
  parentGuardianName: string;
  studentContact: string;
  parentContact: string;
  email: string;
  address: string;
  aadharNumber: string;
  aadharPhoto: string;
  
  // Academic Details
  schoolCollegeName: string;
  classGrade: string;
  boardUniversity: string;
  academicRecords: string;
  mediumOfInstruction: string;
  
  // Academic Sections
  hasSchoolSslc: boolean;
  sslcBoard: string;
  sslcYear: string;
  sslcPercentage: string;
  sslcSchool: string;
  
  hasHsc: boolean;
  hscBoard: string;
  hscYear: string;
  hscPercentage: string;
  hscCollege: string;
  hscStream: string;
  
  hasUg: boolean;
  ugCourse: string;
  ugCollege: string;
  ugYear: string;
  ugPercentage: string;
  ugSpecialization: string;
  
  hasPg: boolean;
  pgCourse: string;
  pgCollege: string;
  pgYear: string;
  pgPercentage: string;
  pgSpecialization: string;
  
  // Competitive Exam Focus
  targetExams: string;
  preferredSubjects: string;
  preparationLevel: string;
  coachingPackage: string;
  startDate: string;
  endDate: string;
  
  photo: string;
}

interface StudentFormProps {
  formData: Omit<Student, 'id'>;
  setFormData: React.Dispatch<React.SetStateAction<Omit<Student, 'id'>>>;
  onSubmit: (formData: Omit<Student, 'id'>) => void;
  onCancel: () => void;
  isEditing: boolean;
}

const StudentForm: React.FC<StudentFormProps> = ({ formData, setFormData, onSubmit, onCancel, isEditing})  => {


  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData(prev => ({ ...prev, photo: event.target?.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAadharPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData(prev => ({ ...prev, aadharPhoto: event.target?.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // === Validate Required Personal Fields ===
    const requiredFields = [
      { name: 'fullName', label: 'Full Name' },
      { name: 'dateOfBirth', label: 'Date of Birth' },
      { name: 'gender', label: 'Gender' },
      { name: 'parentGuardianName', label: 'Parent/Guardian Name' },
      { name: 'parentContact', label: 'Parent Contact' },
      { name: 'address', label: 'Address' },
      { name: 'aadharNumber', label: 'Aadhar Number' },
      { name: 'studentContact', label: 'Student Contact Number' },
      { name: 'email', label: 'Email Address' },
      { name: 'targetExams', label: 'Target Exams' },
      { name: 'preparationLevel', label: 'Current Preparation Level' },
      { name: 'mediumOfInstruction', label: 'Medium of Instruction' },
      { name: 'startDate', label: 'Training Start Date' },
      { name: 'endDate', label: 'Training End Date' },
    ];


    const missing = requiredFields.filter(field => !formData[field.name as keyof typeof formData]);

    if (missing.length > 0) {
      alert(`Please fill the following required fields:\n${missing.map(m => `• ${m.label}`).join('\n')}`);
      return;
    }

    // === Optional: Validate Conditional Sections ===
    if (formData.hasSchoolSslc) {
      const sslcRequired = ['sslcSchool', 'sslcBoard', 'sslcYear', 'sslcPercentage'];
      const missingSSLC = sslcRequired.filter(field => !formData[field as keyof typeof formData]);
      if (missingSSLC.length > 0) {
        alert('Please complete all SSLC (10th Grade) fields.');
        return;
      }
    }

    if (formData.hasHsc) {
      const hscRequired = ['hscCollege', 'hscBoard', 'hscYear', 'hscPercentage', 'hscStream'];
      const missingHSC = hscRequired.filter(field => !formData[field as keyof typeof formData]);
      if (missingHSC.length > 0) {
        alert('Please complete all HSC (12th Grade) fields.');
        return;
      }
    }

    if (formData.hasUg) {
      const ugRequired = ['ugCourse', 'ugCollege', 'ugYear', 'ugPercentage'];
      const missingUG = ugRequired.filter(field => !formData[field as keyof typeof formData]);
      if (missingUG.length > 0) {
        alert('Please complete all UG (Undergraduate) fields.');
        return;
      }
    }

    if (formData.hasPg) {
      const pgRequired = ['pgCourse', 'pgCollege', 'pgYear', 'pgPercentage'];
      const missingPG = pgRequired.filter(field => !formData[field as keyof typeof formData]);
      if (missingPG.length > 0) {
        alert('Please complete all PG (Postgraduate) fields.');
        return;
      }
    }

    onSubmit(formData);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{isEditing ? 'Edit Student' : 'Add New Student'}</CardTitle>
        <CardDescription>
          {isEditing ? 'Update student information' : 'Enter comprehensive student details'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-600">Personal Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter full name"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <Label>Gender *</Label>
                <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="parentGuardianName">Parent/Guardian Name *</Label>
                <Input
                  id="parentGuardianName"
                  type="text"
                  placeholder="Enter parent/guardian name"
                  value={formData.parentGuardianName}
                  onChange={(e) => handleInputChange('parentGuardianName', e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <Label htmlFor="studentContact">Student Contact Number</Label>
                <Input
                  id="studentContact"
                  type="tel"
                  placeholder="Enter student contact number"
                  value={formData.studentContact}
                  onChange={(e) => handleInputChange('studentContact', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="parentContact">Parent/Guardian Contact *</Label>
                <Input
                  id="parentContact"
                  type="tel"
                  placeholder="Enter parent/guardian contact"
                  value={formData.parentContact}
                  onChange={(e) => handleInputChange('parentContact', e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="aadharNumber">Aadhar Number</Label>
                <Input
                  id="aadharNumber"
                  type="text"
                  placeholder="Enter Aadhar number"
                  value={formData.aadharNumber}
                  onChange={(e) => handleInputChange('aadharNumber', e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mt-4">
              <Label htmlFor="address">Residential Address *</Label>
              <Textarea
                id="address"
                placeholder="Enter full residential address"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                rows={2}
                required
              />
            </div>

            {/* Aadhar Photo Upload */}
            <div className="mt-4">
              <Label htmlFor="aadharPhoto">Aadhar Card Photo</Label>
              <div className="mt-2 flex items-center space-x-4">
                <Input
                  id="aadharPhoto"
                  type="file"
                  accept="image/*"
                  onChange={handleAadharPhotoUpload}
                  className="hidden"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById('aadharPhoto')?.click()}
                  className="flex items-center space-x-2"
                >
                  <Upload className="h-4 w-4" />
                  <span>Upload Aadhar Photo</span>
                </Button>
                {formData.aadharPhoto && (
                  <img src={formData.aadharPhoto} alt="Aadhar Preview" className="w-16 h-16 rounded-lg object-cover" />
                )}
              </div>
            </div>
          </div>

          {/* Academic Details with Expandable Sections */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-600">Academic Details</h3>
            
            {/* School/SSLC Section */}
            <div className="border rounded-lg p-4 mb-4">
              <div className="flex items-center space-x-2 mb-3">
                <Checkbox
                  id="hasSchoolSslc"
                  checked={formData.hasSchoolSslc}
                  onCheckedChange={(value) => setFormData({ ...formData, hasSchoolSslc: !!value })}
                  // onCheckedChange={(checked) => handleInputChange('hasSchoolSslc', !!checked)}
                />
                <Label htmlFor="hasSchoolSslc" className="text-base font-medium">School/SSLC (10th Grade)</Label>
              </div>
              
              {formData.hasSchoolSslc && (
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="sslcSchool">School Name</Label>
                    <Input
                      id="sslcSchool"
                      type="text"
                      placeholder="Enter school name"
                      value={formData.sslcSchool}
                      onChange={(e) => handleInputChange('sslcSchool', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="sslcBoard">Board</Label>
                    <Select value={formData.sslcBoard} onValueChange={(value) => handleInputChange('sslcBoard', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select board" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cbse">CBSE</SelectItem>
                        <SelectItem value="icse">ICSE</SelectItem>
                        <SelectItem value="state-board">State Board</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="sslcYear">Year of Completion</Label>
                    <Input
                      id="sslcYear"
                      type="text"
                      placeholder="e.g., 2020"
                      value={formData.sslcYear}
                      onChange={(e) => handleInputChange('sslcYear', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="sslcPercentage">Percentage/Grade</Label>
                    <Input
                      id="sslcPercentage"
                      type="text"
                      placeholder="e.g., 85% or A+"
                      value={formData.sslcPercentage}
                      onChange={(e) => handleInputChange('sslcPercentage', e.target.value)}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* HSC Section */}
            <div className="border rounded-lg p-4 mb-4">
              <div className="flex items-center space-x-2 mb-3">
                <Checkbox
                  id="hasHsc"
                  checked={formData.hasHsc}
                  onCheckedChange={(checked) => handleInputChange('hasHsc', !!checked)}
                />
                <Label htmlFor="hasHsc" className="text-base font-medium">HSC/12th Grade</Label>
              </div>
              
              {formData.hasHsc && (
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="hscCollege">College/School Name</Label>
                    <Input
                      id="hscCollege"
                      type="text"
                      placeholder="Enter college/school name"
                      value={formData.hscCollege}
                      onChange={(e) => handleInputChange('hscCollege', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="hscBoard">Board</Label>
                    <Select value={formData.hscBoard} onValueChange={(value) => handleInputChange('hscBoard', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select board" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cbse">CBSE</SelectItem>
                        <SelectItem value="icse">ICSE</SelectItem>
                        <SelectItem value="state-board">State Board</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="hscStream">Stream</Label>
                    <Select value={formData.hscStream} onValueChange={(value) => handleInputChange('hscStream', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select stream" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="science">Science</SelectItem>
                        <SelectItem value="commerce">Commerce</SelectItem>
                        <SelectItem value="arts">Arts</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="hscYear">Year of Completion</Label>
                    <Input
                      id="hscYear"
                      type="text"
                      placeholder="e.g., 2022"
                      value={formData.hscYear}
                      onChange={(e) => handleInputChange('hscYear', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="hscPercentage">Percentage/Grade</Label>
                    <Input
                      id="hscPercentage"
                      type="text"
                      placeholder="e.g., 90% or A+"
                      value={formData.hscPercentage}
                      onChange={(e) => handleInputChange('hscPercentage', e.target.value)}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* UG Section */}
            <div className="border rounded-lg p-4 mb-4">
              <div className="flex items-center space-x-2 mb-3">
                <Checkbox
                  id="hasUg"
                  checked={formData.hasUg}
                  onCheckedChange={(checked) => handleInputChange('hasUg', !!checked)}
                />
                <Label htmlFor="hasUg" className="text-base font-medium">Under Graduate (UG)</Label>
              </div>
              
              {formData.hasUg && (
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="ugCourse">Course Name</Label>
                    <Input
                      id="ugCourse"
                      type="text"
                      placeholder="e.g., B.Tech, B.Com, BA"
                      value={formData.ugCourse}
                      onChange={(e) => handleInputChange('ugCourse', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="ugCollege">College Name</Label>
                    <Input
                      id="ugCollege"
                      type="text"
                      placeholder="Enter college name"
                      value={formData.ugCollege}
                      onChange={(e) => handleInputChange('ugCollege', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="ugSpecialization">Specialization</Label>
                    <Input
                      id="ugSpecialization"
                      type="text"
                      placeholder="e.g., Computer Science, Finance"
                      value={formData.ugSpecialization}
                      onChange={(e) => handleInputChange('ugSpecialization', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="ugYear">Year of Completion</Label>
                    <Input
                      id="ugYear"
                      type="text"
                      placeholder="e.g., 2024"
                      value={formData.ugYear}
                      onChange={(e) => handleInputChange('ugYear', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="ugPercentage">Percentage/CGPA</Label>
                    <Input
                      id="ugPercentage"
                      type="text"
                      placeholder="e.g., 8.5 CGPA or 75%"
                      value={formData.ugPercentage}
                      onChange={(e) => handleInputChange('ugPercentage', e.target.value)}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* PG Section */}
            <div className="border rounded-lg p-4 mb-4">
              <div className="flex items-center space-x-2 mb-3">
                <Checkbox
                  id="hasPg"
                  checked={formData.hasPg}
                  onCheckedChange={(checked) => handleInputChange('hasPg', !!checked)}
                />
                <Label htmlFor="hasPg" className="text-base font-medium">Post Graduate (PG)</Label>
              </div>
              
              {formData.hasPg && (
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="pgCourse">Course Name</Label>
                    <Input
                      id="pgCourse"
                      type="text"
                      placeholder="e.g., M.Tech, MBA, MA"
                      value={formData.pgCourse}
                      onChange={(e) => handleInputChange('pgCourse', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="pgCollege">College Name</Label>
                    <Input
                      id="pgCollege"
                      type="text"
                      placeholder="Enter college name"
                      value={formData.pgCollege}
                      onChange={(e) => handleInputChange('pgCollege', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="pgSpecialization">Specialization</Label>
                    <Input
                      id="pgSpecialization"
                      type="text"
                      placeholder="e.g., Data Science, Marketing"
                      value={formData.pgSpecialization}
                      onChange={(e) => handleInputChange('pgSpecialization', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="pgYear">Year of Completion</Label>
                    <Input
                      id="pgYear"
                      type="text"
                      placeholder="e.g., 2026"
                      value={formData.pgYear}
                      onChange={(e) => handleInputChange('pgYear', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="pgPercentage">Percentage/CGPA</Label>
                    <Input
                      id="pgPercentage"
                      type="text"
                      placeholder="e.g., 9.0 CGPA or 80%"
                      value={formData.pgPercentage}
                      onChange={(e) => handleInputChange('pgPercentage', e.target.value)}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4">
              <Label>Medium of Instruction</Label>
              <Select value={formData.mediumOfInstruction} onValueChange={(value) => handleInputChange('mediumOfInstruction', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select medium" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tamil">Tamil</SelectItem>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="hindi">Hindi</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Competitive Exam Focus */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-600">Competitive Exam Focus</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="targetExams">Target Exams</Label>
                <Input
                  id="targetExams"
                  type="text"
                  placeholder="e.g., Railways, Forest, Group1, Group2"
                  value={formData.targetExams}
                  onChange={(e) => handleInputChange('targetExams', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="preferredSubjects">Preferred Subjects</Label>
                <Input
                  id="preferredSubjects"
                  type="text"
                  placeholder="e.g., Physics, Chemistry, Mathematics"
                  value={formData.preferredSubjects}
                  onChange={(e) => handleInputChange('preferredSubjects', e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <Label>Current Preparation Level</Label>
                <Select value={formData.preparationLevel} onValueChange={(value) => handleInputChange('preparationLevel', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select preparation level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                    <SelectItem value="revision">Revision Phase</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="coachingPackage">Coaching Package/Batch</Label>
                <Input
                  id="coachingPackage"
                  type="text"
                  placeholder="Enter coaching package or batch details"
                  value={formData.coachingPackage}
                  onChange={(e) => handleInputChange('coachingPackage', e.target.value)}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <Label htmlFor="startDate">Training Start Date</Label>
                <Input
                  id="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => handleInputChange('startDate', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="endDate">Training End Date</Label>
                <Input
                  id="endDate"
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => handleInputChange('endDate', e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Photo Upload */}
          <div>
            <Label htmlFor="photo">Student Photo</Label>
            <div className="mt-2 flex items-center space-x-4">
              <Input
                id="photo"
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => document.getElementById('photo')?.click()}
                className="flex items-center space-x-2"
              >
                <Upload className="h-4 w-4" />
                <span>{formData.photo ? 'Change Photo' : 'Upload Photo'}</span>
              </Button>
              {formData.photo && (
                <img
                  src={formData.photo}
                  alt="Preview"
                  className="w-16 h-16 rounded-lg object-cover border"
                  style={{ background: '#f3f4f6' }}
                />
              )}
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              {isEditing ? 'Update Student' : 'Add Student'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default StudentForm;

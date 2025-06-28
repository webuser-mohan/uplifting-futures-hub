
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
  hasSchoolSSLC: boolean;
  sslcBoard: string;
  sslcYear: string;
  sslcPercentage: string;
  sslcSchool: string;
  
  hasHSC: boolean;
  hscBoard: string;
  hscYear: string;
  hscPercentage: string;
  hscCollege: string;
  hscStream: string;
  
  hasUG: boolean;
  ugCourse: string;
  ugCollege: string;
  ugYear: string;
  ugPercentage: string;
  ugSpecialization: string;
  
  hasPG: boolean;
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
  student?: Student;
  onSubmit: (formData: Omit<Student, 'id'>) => void;
  onCancel: () => void;
  isEditing: boolean;
}

const StudentForm: React.FC<StudentFormProps> = ({ student, onSubmit, onCancel, isEditing }) => {
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: student?.fullName || '',
    dateOfBirth: student?.dateOfBirth || '',
    gender: student?.gender || '',
    parentGuardianName: student?.parentGuardianName || '',
    studentContact: student?.studentContact || '',
    parentContact: student?.parentContact || '',
    email: student?.email || '',
    address: student?.address || '',
    aadharNumber: student?.aadharNumber || '',
    aadharPhoto: student?.aadharPhoto || '',
    
    // Academic Details (keeping for backward compatibility)
    schoolCollegeName: student?.schoolCollegeName || '',
    classGrade: student?.classGrade || '',
    boardUniversity: student?.boardUniversity || '',
    academicRecords: student?.academicRecords || '',
    mediumOfInstruction: student?.mediumOfInstruction || '',
    
    // Academic Sections
    hasSchoolSSLC: student?.hasSchoolSSLC || false,
    sslcBoard: student?.sslcBoard || '',
    sslcYear: student?.sslcYear || '',
    sslcPercentage: student?.sslcPercentage || '',
    sslcSchool: student?.sslcSchool || '',
    
    hasHSC: student?.hasHSC || false,
    hscBoard: student?.hscBoard || '',
    hscYear: student?.hscYear || '',
    hscPercentage: student?.hscPercentage || '',
    hscCollege: student?.hscCollege || '',
    hscStream: student?.hscStream || '',
    
    hasUG: student?.hasUG || false,
    ugCourse: student?.ugCourse || '',
    ugCollege: student?.ugCollege || '',
    ugYear: student?.ugYear || '',
    ugPercentage: student?.ugPercentage || '',
    ugSpecialization: student?.ugSpecialization || '',
    
    hasPG: student?.hasPG || false,
    pgCourse: student?.pgCourse || '',
    pgCollege: student?.pgCollege || '',
    pgYear: student?.pgYear || '',
    pgPercentage: student?.pgPercentage || '',
    pgSpecialization: student?.pgSpecialization || '',
    
    // Competitive Exam Focus
    targetExams: student?.targetExams || '',
    preferredSubjects: student?.preferredSubjects || '',
    preparationLevel: student?.preparationLevel || '',
    coachingPackage: student?.coachingPackage || '',
    startDate: student?.startDate || '',
    endDate: student?.endDate || '',
    
    photo: student?.photo || ''
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({ ...prev, photo: e.target?.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAadharPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({ ...prev, aadharPhoto: e.target?.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
                  placeholder="Enter Aadhar number (optional)"
                  value={formData.aadharNumber}
                  onChange={(e) => handleInputChange('aadharNumber', e.target.value)}
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
                  id="hasSchoolSSLC"
                  checked={formData.hasSchoolSSLC}
                  onCheckedChange={(checked) => handleInputChange('hasSchoolSSLC', checked)}
                />
                <Label htmlFor="hasSchoolSSLC" className="text-base font-medium">School/SSLC (10th Grade)</Label>
              </div>
              
              {formData.hasSchoolSSLC && (
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
                  id="hasHSC"
                  checked={formData.hasHSC}
                  onCheckedChange={(checked) => handleInputChange('hasHSC', checked)}
                />
                <Label htmlFor="hasHSC" className="text-base font-medium">HSC/12th Grade</Label>
              </div>
              
              {formData.hasHSC && (
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
                  id="hasUG"
                  checked={formData.hasUG}
                  onCheckedChange={(checked) => handleInputChange('hasUG', checked)}
                />
                <Label htmlFor="hasUG" className="text-base font-medium">Under Graduate (UG)</Label>
              </div>
              
              {formData.hasUG && (
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
                  id="hasPG"
                  checked={formData.hasPG}
                  onCheckedChange={(checked) => handleInputChange('hasPG', checked)}
                />
                <Label htmlFor="hasPG" className="text-base font-medium">Post Graduate (PG)</Label>
              </div>
              
              {formData.hasPG && (
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
                  placeholder="e.g., NEET, JEE, UPSC, SSC, Banking"
                  value={formData.targetExams}
                  onChange={(e) => handleInputChange('targetExams', e.target.value)}
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
                <span>Upload Photo</span>
              </Button>
              {formData.photo && (
                <img src={formData.photo} alt="Preview" className="w-16 h-16 rounded-lg object-cover" />
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

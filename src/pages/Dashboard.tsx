
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap, Plus, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import StudentForm from '@/components/students/StudentForm';
import StudentTable from '@/components/students/StudentTable';
import Hedlogo from '@/images/logo.jpg';
import axios from 'axios';

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

const Dashboard = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [students, setStudents] = useState<Student[]>([
    {
      id: 1,
      fullName: "Priya Sharma",
      dateOfBirth: "2000-05-15",
      gender: "female",
      parentGuardianName: "Raj Sharma",
      studentContact: "9999999999",
      parentContact: "9999999999",
      email: "priya@example.com",
      address: "123 Main Street, Mumbai, Maharashtra - 400001",
      aadharNumber: "1234-5678-9012",
      aadharPhoto: "",
      schoolCollegeName: "Mumbai Engineering College",
      classGrade: "3rd Year B.Tech",
      boardUniversity: "university",
      academicRecords: "85% in 12th, 8.5 CGPA in Engineering",
      mediumOfInstruction: "english",
      
      // Academic Sections
      hasSchoolSSLC: true,
      sslcBoard: "state-board",
      sslcYear: "2018",
      sslcPercentage: "95%",
      sslcSchool: "Government High School",
      
      hasHSC: true,
      hscBoard: "state-board",
      hscYear: "2020",
      hscPercentage: "88%",
      hscCollege: "Science College",
      hscStream: "science",
      
      hasUG: true,
      ugCourse: "B.Tech",
      ugCollege: "Mumbai Engineering College",
      ugYear: "2024",
      ugPercentage: "8.5 CGPA",
      ugSpecialization: "Computer Science",
      
      hasPG: false,
      pgCourse: "",
      pgCollege: "",
      pgYear: "",
      pgPercentage: "",
      pgSpecialization: "",
      
      targetExams: "GATE, Campus Placements",
      preferredSubjects: "Computer Science, Mathematics",
      preparationLevel: "advanced",
      coachingPackage: "GATE Preparation Batch",
      startDate: "2024-01-15",
      endDate: "2024-12-15",
      photo: "https://images.unsplash.com/photo-1494790108755-2616c05e8d08?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 2,
      fullName: "Rahul Kumar",
      dateOfBirth: "1999-08-22",
      gender: "male",
      parentGuardianName: "Suresh Kumar",
      studentContact: "9876543212",
      parentContact: "9876543213",
      email: "rahul@example.com",
      address: "456 Park Avenue, Delhi, India - 110001",
      aadharNumber: "9876-5432-1098",
      aadharPhoto: "",
      schoolCollegeName: "Delhi Public School",
      classGrade: "12th Grade",
      boardUniversity: "cbse",
      academicRecords: "92% in 11th grade",
      mediumOfInstruction: "english",
      
      // Academic Sections
      hasSchoolSSLC: true,
      sslcBoard: "cbse",
      sslcYear: "2016",
      sslcPercentage: "92%",
      sslcSchool: "Delhi Public School",
      
      hasHSC: true,
      hscBoard: "cbse",
      hscYear: "2018",
      hscPercentage: "89%",
      hscCollege: "Delhi Public School",
      hscStream: "science",
      
      hasUG: false,
      ugCourse: "",
      ugCollege: "",
      ugYear: "",
      ugPercentage: "",
      ugSpecialization: "",
      
      hasPG: false,
      pgCourse: "",
      pgCollege: "",
      pgYear: "",
      pgPercentage: "",
      pgSpecialization: "",
      
      targetExams: "JEE Main, JEE Advanced",
      preferredSubjects: "Physics, Chemistry, Mathematics",
      preparationLevel: "intermediate",
      coachingPackage: "JEE Two Year Program",
      startDate: "2024-02-01",
      endDate: "2025-05-31",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    }
  ]);

  // ... keep existing code (useEffect, handleLogout, handleFormSubmit, handleEdit, handleDelete, handleCancel functions)

  // useEffect(() => {
  //   const isAuthenticated = localStorage.getItem('isAuthenticated');
  //   if (!isAuthenticated) {
  //     navigate('/login');
  //   }
  // }, [navigate]);

  const handleLogout = () => {
    // localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    });
    // navigate('/');
    navigate('/login');
  };

  // const handleFormSubmit = (formData: Omit<Student, 'id'>) => {
  //   if (!formData.fullName || !formData.dateOfBirth || !formData.parentGuardianName) {
  //     toast({
  //       title: "Error",
  //       description: "Please fill in all required fields.",
  //       variant: "destructive"
  //     });
  //     return;
  //   }

  //   if (editingStudent) {
  //     setStudents(prev => prev.map(student => 
  //       student.id === editingStudent.id 
  //         ? { ...student, ...formData }
  //         : student
  //     ));
  //     toast({
  //       title: "Success",
  //       description: "Student updated successfully!",
  //     });
  //     setEditingStudent(null);
  //   } else {
  //     const newStudent: Student = {
  //       id: Date.now(),
  //       ...formData
  //     };
  //     setStudents(prev => [...prev, newStudent]);
  //     toast({
  //       title: "Success",
  //       description: "Student added successfully!",
  //     });
  //   }

  //   setShowAddForm(false);
  // };

  const handleFormSubmit = async (formData: Omit<Student, 'id'>) => {
    if (!formData.fullName || !formData.dateOfBirth || !formData.parentGuardianName) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    try {
      const token = localStorage.getItem('access_token');
      if (!token) {
        toast({
          title: "Unauthorized",
          description: "Please log in again.",
          variant: "destructive"
        });
        return;
      }

      const response = await axios.post('http://127.0.0.1:8000/api/students/', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      // If successful, update the student list
      setStudents(prev => [...prev, response.data]);

      toast({
        title: "Success",
        description: "Student added successfully!",
      });

      setShowAddForm(false);
    } catch (error: any) {
      console.error(error);
      toast({
        title: "Error",
        description: error.response?.data?.detail || "Failed to add student.",
        variant: "destructive"
      });
    }
  };


  const handleEdit = (student: Student) => {
    setEditingStudent(student);
    setShowAddForm(true);
  };

  const handleDelete = (id: number) => {
    setStudents(prev => prev.filter(student => student.id !== id));
    toast({
      title: "Success",
      description: "Student deleted successfully!",
    });
  };

  const handleCancel = () => {
    setShowAddForm(false);
    setEditingStudent(null);
  };

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
                className="h-12 w-auto" />
              <h1 className="text-2xl font-bold text-gray-800">Master Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                onClick={() => setShowAddForm(!showAddForm)}
                className="bg-green-600 hover:bg-green-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Student
              </Button>
              <Button onClick={handleLogout} variant="outline">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Add/Edit Student Form */}
        {showAddForm ? (
          <div className="mb-8">
            <StudentForm
              student={editingStudent || undefined}
              onSubmit={handleFormSubmit}
              onCancel={handleCancel}
              isEditing={!!editingStudent}
            />
          </div>
        ) : (
          // Students Table
          <Card>
            <CardHeader>
              <CardTitle>Students List ({students.length})</CardTitle>
              <CardDescription>Manage all registered students with comprehensive details</CardDescription>
            </CardHeader>
            <CardContent>
              <StudentTable
                students={students}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </CardContent>
          </Card>
        )}
      </div>

    </div>
  );
};

export default Dashboard;

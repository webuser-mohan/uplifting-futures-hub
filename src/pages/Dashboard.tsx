
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
import { API_BASE_URL } from "@/api/config";

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

const Dashboard = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [students, setStudents] = useState<Student[]>([]);
  const [editStudent, setEditStudent] = useState<Student | null>(null);

  const initialFormData = {
    fullName: '',
    dateOfBirth: '',
    gender: '',
    parentGuardianName: '',
    studentContact: '',
    parentContact: '',
    email: '',
    address: '',
    aadharNumber: '',
    aadharPhoto: '',
    schoolCollegeName: '',
    classGrade: '',
    boardUniversity: '',
    academicRecords: '',
    mediumOfInstruction: '',
    hasSchoolSslc: false,
    sslcBoard: '',
    sslcYear: '',
    sslcPercentage: '',
    sslcSchool: '',
    hasHsc: false,
    hscBoard: '',
    hscYear: '',
    hscPercentage: '',
    hscCollege: '',
    hscStream: '',
    hasUg: false,
    ugCourse: '',
    ugCollege: '',
    ugYear: '',
    ugPercentage: '',
    ugSpecialization: '',
    hasPg: false,
    pgCourse: '',
    pgCollege: '',
    pgYear: '',
    pgPercentage: '',
    pgSpecialization: '',
    targetExams: '',
    preferredSubjects: '',
    preparationLevel: '',
    coachingPackage: '',
    startDate: '',
    endDate: '',
    photo: ''
  };

  const [formData, setFormData] = useState<Omit<Student, 'id'>>(initialFormData);

  useEffect(() => {
    const fetchStudents = async () => {
      const token = localStorage.getItem('access_token');
      
      if (!token) {
        toast({
          title: "Unauthorized",
          description: "Please log in again.",
          variant: "destructive"
        });
        navigate('/login');
        return;
      }

      try {
        const response = await axios.get(`${API_BASE_URL}/api/students/`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const formatted = response.data.map((student: any) => toCamelCase(student));
        setStudents(formatted);
      } catch (error) {
        console.error("Error fetching students:", error);
        toast({
          title: "Error",
          description: "Failed to fetch students from the database.",
          variant: "destructive"
        });
      }
    };

    fetchStudents();
  }, [toast, navigate]);

  // ... keep existing code (useEffect, handleLogout, handleFormSubmit, handleEdit, handleDelete, handleCancel functions)

  // useEffect(() => {
  //   const isAuthenticated = localStorage.getItem('isAuthenticated');
  //   if (!isAuthenticated) {
  //     navigate('/login');
  //   }
  // }, [navigate]);
  const toSnakeCase = (obj: any) => {
    const result: any = {};
    for (const key in obj) {
      const snakeKey = key.replace(/([A-Z])/g, "_$1").toLowerCase();
      result[snakeKey] = obj[key];
    }
    return result;
  };

  const toCamelCase = (obj: any) => {
    const result: any = {};
    for (const key in obj) {
      const camelKey = key.replace(/_([a-z])/g, (_, g) => g.toUpperCase());
      result[camelKey] = obj[key];
    }
    return result;
  };

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

  const handleFormSubmit = async (formData: Omit<Student, 'id'>) => {
    console.log("Submitting to backend:", toSnakeCase(formData));
    const token = localStorage.getItem('access_token');
    if (!token) {
      toast({
        title: "Unauthorized",
        description: "Please log in again.",
        variant: "destructive"
      });
      return;
    }

    try {
      const payload = toSnakeCase(formData);

      if (editStudent) {
        // Update (PUT) request
        const response = await axios.put(`${API_BASE_URL}/api/students/${editStudent.id}/`, payload, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        const updatedStudent = toCamelCase(response.data);
        // Update local state
        setStudents(prev =>
          prev.map(student =>
            student.id === editStudent.id ? updatedStudent : student
          )
        );

        toast({
          title: "Updated",
          description: "Student record updated successfully!",
        });

        setFormData(initialFormData);
        setEditingStudent(null);
        setShowAddForm(false);

      } else {
        // Create (POST) request
        const response = await axios.post(`${API_BASE_URL}/api/students/`, payload, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        setStudents(prev => [...prev, response.data]);

        toast({
          title: "Added",
          description: "Student added successfully!",
        });

        setFormData(initialFormData);
        setEditingStudent(null);
        setShowAddForm(false);
      }

      setShowAddForm(false);
      setEditStudent(null);
    } catch (error: any) {
      console.error(error);
      toast({
        title: "Error",
        description: JSON.stringify(error.response?.data) || "Failed to save student.",
        variant: "destructive"
      });
    }
  };



  // const handleEdit = (student: Student) => {
  //   setEditingStudent(student);
  //   setFormData(student);
  //   setShowAddForm(true);
  // };
  
  const handleEdit = (student: Student) => {
    // setEditStudent(student);
    // setFormData({ ...student });  // This fills the form with current values
    // setShowAddForm(true);
    const camelCaseStudent = toCamelCase(student);
    console.log("handleEdit camel ", camelCaseStudent)
    setEditStudent(camelCaseStudent);
    setFormData(camelCaseStudent);  // ✅ prefill form including booleans
    setShowAddForm(true);
  };

  const handleDelete = async (id: number) => {
    const confirm = window.confirm("Are you sure you want to remove this student?");
    if (!confirm) return;

    const token = localStorage.getItem('access_token');
    if (!token) {
      toast({
        title: "Unauthorized",
        description: "Please log in again.",
        variant: "destructive"
      });
      return;
    }

    try {
      await axios.delete(`${API_BASE_URL}/api/students/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setStudents(prev => prev.filter(student => student.id !== id));
      toast({
        title: "Deleted",
        description: "Student deleted successfully!",
      });
    } catch (error) {
      console.error("Delete error:", error);
      toast({
        title: "Error",
        description: "Failed to delete student.",
        variant: "destructive"
      });
    }
  };



  const handleCancel = () => {
    setShowAddForm(false);
    setEditingStudent(null);
    setFormData(initialFormData);
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
              formData={formData}
              setFormData={setFormData}
              onSubmit={handleFormSubmit}
              onCancel={handleCancel}
              isEditing={!!editStudent}
            />
          </div>
        ) :  (
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

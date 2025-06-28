
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap, Plus, LogOut, Upload, Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';

interface Student {
  id: number;
  name: string;
  course: string;
  year: string;
  achievement: string;
  photo: string;
  phone: string;
  email: string;
  address: string;
}

const Dashboard = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [students, setStudents] = useState<Student[]>([
    {
      id: 1,
      name: "Priya Sharma",
      course: "B.Tech Computer Science",
      year: "2023",
      achievement: "Placed at Tech Mahindra",
      photo: "https://images.unsplash.com/photo-1494790108755-2616c05e8d08?w=300&h=300&fit=crop&crop=face",
      phone: "9876543210",
      email: "priya@example.com",
      address: "Mumbai, Maharashtra"
    },
    {
      id: 2,
      name: "Rahul Kumar",
      course: "MBA Finance",
      year: "2023",
      achievement: "Started Own Business",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      phone: "9876543211",
      email: "rahul@example.com",
      address: "Delhi, India"
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    course: '',
    year: '',
    achievement: '',
    phone: '',
    email: '',
    address: '',
    photo: ''
  });

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    });
    navigate('/');
  };

  const handleInputChange = (field: string, value: string) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.course || !formData.year) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    if (editingStudent) {
      setStudents(prev => prev.map(student => 
        student.id === editingStudent.id 
          ? { ...student, ...formData }
          : student
      ));
      toast({
        title: "Success",
        description: "Student updated successfully!",
      });
      setEditingStudent(null);
    } else {
      const newStudent: Student = {
        id: Date.now(),
        ...formData
      };
      setStudents(prev => [...prev, newStudent]);
      toast({
        title: "Success",
        description: "Student added successfully!",
      });
    }

    setFormData({
      name: '',
      course: '',
      year: '',
      achievement: '',
      phone: '',
      email: '',
      address: '',
      photo: ''
    });
    setShowAddForm(false);
  };

  const handleEdit = (student: Student) => {
    setFormData({
      name: student.name,
      course: student.course,
      year: student.year,
      achievement: student.achievement,
      phone: student.phone,
      email: student.email,
      address: student.address,
      photo: student.photo
    });
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-600" />
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
        {showAddForm && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{editingStudent ? 'Edit Student' : 'Add New Student'}</CardTitle>
              <CardDescription>
                {editingStudent ? 'Update student information' : 'Enter student details and upload photo'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="course">Course *</Label>
                    <Input
                      id="course"
                      type="text"
                      placeholder="e.g., B.Tech Computer Science"
                      value={formData.course}
                      onChange={(e) => handleInputChange('course', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Year *</Label>
                    <Select value={formData.year} onValueChange={(value) => handleInputChange('year', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter email address"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="achievement">Achievement</Label>
                    <Input
                      id="achievement"
                      type="text"
                      placeholder="e.g., Job placement, Business started"
                      value={formData.achievement}
                      onChange={(e) => handleInputChange('achievement', e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Address</Label>
                  <Textarea
                    id="address"
                    placeholder="Enter full address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    rows={2}
                  />
                </div>

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
                  <Button type="button" variant="outline" onClick={() => {
                    setShowAddForm(false);
                    setEditingStudent(null);
                    setFormData({
                      name: '',
                      course: '',
                      year: '',
                      achievement: '',
                      phone: '',
                      email: '',
                      address: '',
                      photo: ''
                    });
                  }}>
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                    {editingStudent ? 'Update Student' : 'Add Student'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Students Table */}
        <Card>
          <CardHeader>
            <CardTitle>Students List ({students.length})</CardTitle>
            <CardDescription>Manage all registered students</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Photo</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Course</TableHead>
                  <TableHead>Year</TableHead>
                  <TableHead>Achievement</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>
                      <img 
                        src={student.photo} 
                        alt={student.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </TableCell>
                    <TableCell className="font-medium">{student.name}</TableCell>
                    <TableCell>{student.course}</TableCell>
                    <TableCell>{student.year}</TableCell>
                    <TableCell>{student.achievement}</TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>{student.phone}</div>
                        <div className="text-gray-500">{student.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(student)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDelete(student.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

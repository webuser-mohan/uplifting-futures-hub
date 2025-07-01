
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ArrowLeft, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Hedlogo from '@/images/logo.jpg';
import Hedname from '@/images/Hed_name.png';

const StudentGallery = () => {
  const [filterYear, setFilterYear] = useState('all');
  const [filterCourse, setFilterCourse] = useState('all');

  const students = [
    {
      id: 1,
      name: "Priya Sharma",
      course: "B.Tech Computer Science",
      year: "2023",
      achievement: "Placed at Tech Mahindra",
      image: "https://images.unsplash.com/photo-1494790108755-2616c05e8d08?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Rahul Kumar",
      course: "MBA Finance",
      year: "2023",
      achievement: "Started Own Business",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Anjali Patel",
      course: "M.Sc Mathematics",
      year: "2022",
      achievement: "Government Teacher",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Arjun Singh",
      course: "B.Com Accounting",
      year: "2023",
      achievement: "CA Articleship",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Sneha Reddy",
      course: "BCA",
      year: "2022",
      achievement: "Software Developer",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Vikash Yadav",
      course: "Mechanical Engineering",
      year: "2024",
      achievement: "Job at Tata Motors",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 7,
      name: "Kavita Joshi",
      course: "B.Ed",
      year: "2022",
      achievement: "Primary School Teacher",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 8,
      name: "Manish Gupta",
      course: "Diploma Civil",
      year: "2024",
      achievement: "Construction Supervisor",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 9,
      name: "Pooja Kumari",
      course: "B.Sc Nursing",
      year: "2023",
      achievement: "Staff Nurse",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const filteredStudents = students.filter(student => {
    const yearMatch = filterYear === 'all' || student.year === filterYear;
    const courseMatch = filterCourse === 'all' || student.course.toLowerCase().includes(filterCourse.toLowerCase());
    return yearMatch && courseMatch;
  });

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
                className="h-12 w-auto"
              />
              <img
                src={Hedname}
                alt="Mukkulathor Free Educational & Employment Trust"
                className="h-12 w-auto"
              />
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
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Student Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our successful students who have transformed their lives through education and hard work.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-800">Filter Students</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
              <Select value={filterYear} onValueChange={setFilterYear}>
                <SelectTrigger>
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Course</label>
              <Select value={filterCourse} onValueChange={setFilterCourse}>
                <SelectTrigger>
                  <SelectValue placeholder="Select course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Courses</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="mba">MBA</SelectItem>
                  <SelectItem value="bca">BCA</SelectItem>
                  <SelectItem value="bcom">B.Com</SelectItem>
                  <SelectItem value="nursing">Nursing</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button 
                onClick={() => {
                  setFilterYear('all');
                  setFilterCourse('all');
                }}
                variant="outline"
                className="w-full"
              >
                Clear Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Students Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudents.map((student) => (
            <Card key={student.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={student.image} 
                  alt={student.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{student.name}</h3>
                <p className="text-blue-600 font-medium mb-1">{student.course}</p>
                <p className="text-gray-600 mb-2">Class of {student.year}</p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-green-800 font-medium text-sm">
                    🎉 {student.achievement}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredStudents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No students found matching your filters.</p>
            <Button 
              onClick={() => {
                setFilterYear('all');
                setFilterCourse('all');
              }}
              className="mt-4"
              variant="outline"
            >
              Clear Filters
            </Button>
          </div>
        )}



      </div>
    </div>
  );
};

export default StudentGallery;

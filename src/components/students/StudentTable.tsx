
import React from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Edit, Trash2 } from 'lucide-react';

interface Student {
  id: number;
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
  
  targetExams: string;
  preferredSubjects: string;
  preparationLevel: string;
  coachingPackage: string;
  startDate: string;
  endDate: string;
  photo: string;
}

interface StudentTableProps {
  students: Student[];
  onEdit: (student: Student) => void;
  onDelete: (id: number) => void;
}

const StudentTable: React.FC<StudentTableProps> = ({ students, onEdit, onDelete }) => {
  const getHighestEducation = (student: Student) => {
    if (student.hasPG) return `${student.pgCourse} - ${student.pgCollege}`;
    if (student.hasUG) return `${student.ugCourse} - ${student.ugCollege}`;
    if (student.hasHSC) return `HSC ${student.hscStream} - ${student.hscCollege}`;
    if (student.hasSchoolSSLC) return `SSLC - ${student.sslcSchool}`;
    return student.classGrade || 'Not specified';
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Photo</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Education</TableHead>
          <TableHead>Target Exams</TableHead>
          <TableHead>Contact</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {students.map((student) => (
          <TableRow key={student.id}>
            <TableCell>
              <img 
                src={student.photo || "https://images.unsplash.com/photo-1494790108755-2616c05e8d08?w=200&h=200&fit=crop&crop=face"} 
                alt={student.fullName}
                className="w-12 h-12 rounded-full object-cover"
              />
            </TableCell>
            <TableCell className="font-medium">{student.fullName}</TableCell>
            <TableCell>
              <div className="text-sm">
                <div className="font-medium">{getHighestEducation(student)}</div>
                <div className="text-gray-500">{student.mediumOfInstruction && `Medium: ${student.mediumOfInstruction}`}</div>
              </div>
            </TableCell>
            <TableCell>{student.targetExams || 'Not specified'}</TableCell>
            <TableCell>
              <div className="text-sm">
                <div>{student.parentContact}</div>
                <div className="text-gray-500">{student.email}</div>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => onEdit(student)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => onDelete(student.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StudentTable;

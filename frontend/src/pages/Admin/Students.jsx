import React, { useState, useEffect } from 'react';

import Sidebar from './Sidebar';
import axios from 'axios';
import {
  StudentsContainer,
  Content,
  StudentsContent,
  StudentsHeader,
  StudentList,
  StudentItem,
  AddStudentForm,
  AddStudentInput,
  AddStudentButton,
} from '../../styles/StudentsStyles';

const Students = () => {
  const [newStudent, setNewStudent] = useState({
    name: '',
    registrationNumber: '',
    grade: '',
  });
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        'http://localhost:4000/api/v1/students/getall'
      );
      setStudents(response.data.students);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();
    if (
      newStudent.name.trim() !== '' &&
      newStudent.registrationNumber.trim() !== '' &&
      newStudent.grade.trim() !== ''
    ) {
      try {
        const response = await axios.post(
          'http://localhost:4000/api/v1/students',
          newStudent
        );
        setStudents([...students, response.data.student]);
        setNewStudent({ name: '', registrationNumber: '', grade: '' });
      } catch (error) {
        console.error('Error adding student:', error);
      }
    }
  };

  return (
    <StudentsContainer>
      <Sidebar />
      <Content>
        <StudentsContent>
          <StudentsHeader>
            <AddStudentForm onSubmit={handleAddStudent}>
              <AddStudentInput
                type="text"
                placeholder="Enter student Name"
                value={newStudent.name}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, name: e.target.value })
                }
              />

              <AddStudentInput
                type="text"
                placeholder="Enter Registration Number"
                value={newStudent.registrationNumber}
                onChange={(e) =>
                  setNewStudent({
                    ...newStudent,
                    registrationNumber: e.target.value,
                  })
                }
              />

              <AddStudentInput
                type="text"
                placeholder="Enter Grade"
                value={newStudent.grade}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, grade: e.target.value })
                }
              />

              <AddStudentButton type="submit">Add student</AddStudentButton>
            </AddStudentForm>
            <StudentList>
              {students.map((student) => {
                <StudentItem  key={student.id}> {student.name}-{student.registrationNumber}-{student.grade} </StudentItem>;
              })}
            </StudentList>
          </StudentsHeader>
        </StudentsContent>
      </Content>
    </StudentsContainer>
  );
};

export default Students;

// CheckExamSection.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import { ExamContainer, SidebarContainer, Content, ExamHeader, ExamForm, FormLabel, FormInput, AddButton } 
from '../../styles/ExamStyles'; 

const CheckExamSection = () => {
  












  return (
    <ExamContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ExamHeader>Exam Details</ExamHeader>
        <ExamForm onSubmit={handleAddExam}>
          <FormLabel>Name:</FormLabel>
          <FormInput
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <FormLabel>Registration Number:</FormLabel>
          <FormInput
            type="text"
           
            required
          />
          <FormLabel>Class:</FormLabel>
          <FormInput
            type="text"
           
            required
          />
          <FormLabel>Marks:</FormLabel>
          <FormInput
            type="number"
           
            required
          />
          <AddButton type="submit">Add Exam</AddButton>
        </ExamForm>
        <h2>Total Marks: {calculateTotalMarks()}</h2>
        <h3>Exam Details:</h3>
        <ul>
          
        </ul>
      </Content>
    </ExamContainer>
  );
};

export default CheckExamSection;
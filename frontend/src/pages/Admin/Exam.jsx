import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

import {
  ExamContainer,
  SidebarContainer,
  Content,
  ExamHeader,
  ExamForm,
  FormLabel,
  FormInput,
  AddButton,
} from '../../styles/ExamStyles';

const Exam = () => {
  /* const calculateTotalMarks = () => {
    let total = 0;
    for (let i = 0; i < examData.length; i) {
      total = examData[i].marks;
    }
  }; */

  return (
    <ExamContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ExamHeader>Exam details</ExamHeader>
        <ExamForm>
          <FormLabel>Name:</FormLabel>
          <FormInput type="text" required />
          <FormLabel>Registration number:</FormLabel>
          <FormInput type="text" required />
          <FormLabel>Class:</FormLabel>
          <FormInput type="text" required />
          <FormLabel>Marks:</FormLabel>
          <FormInput type="number" required />
          <AddButton type="submit">Add Exam</AddButton>
        </ExamForm>

        <h2>Total Marks:{/* {calculateTotalMarks} */}</h2>
        <h2>Exam Details:</h2>
        <ul></ul>
      </Content>
    </ExamContainer>
  );
};

export default Exam;

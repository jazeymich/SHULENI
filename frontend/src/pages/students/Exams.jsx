import React, { useRef } from 'react';
import Sidebar from './Sidebar';


import {
  ExamContainer,
  SidebarContainer,
  Content,
  ExamHeader,
  ExamResultsContainer,
  ExamSubject,
  ExamResult,
  ExamChartContainer,
} from '../../styles/ExamStyles';

const ExamSection = () => {
  return (
    <ExamContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ExamHeader>Exam Results</ExamHeader>
        <ExamResultsContainer>
          <ExamChartContainer></ExamChartContainer>
        </ExamResultsContainer>
      </Content>
    </ExamContainer>
  );
};

export default ExamSection;

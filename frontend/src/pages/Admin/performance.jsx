import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

import {
  PerformanceContainer,
  Content,
  PerformanceContent,
  PerformanceHeader,
  SchoolPerformance,
  IndividualPerformance,
} from '../../styles/PerformanceStyles';

const Performance = () => {
  //sample data for school performance reference
  const SchoolPerformanceData = {
    averageScore: 80,
    totalStudents: 100,
  };

  const individualPerformanceData = [
    { id: 1, name: 'John Doe', score: 90 },
    { id: 1, name: 'Jane Doe', score: 86 },
    { id: 1, name: 'James Doe', score: 70 },
  ];

  return (
    <PerformanceContainer>
      <Sidebar />
      <Content>
        <PerformanceContent>
          <PerformanceHeader>School Performance</PerformanceHeader>
          <SchoolPerformance>
            <p>Average Score:{SchoolPerformanceData.averageScore}</p>
            <p>Total students:{SchoolPerformanceData.totalStudents}</p>
          </SchoolPerformance>

          <PerformanceHeader>Individual Performance</PerformanceHeader>

          <IndividualPerformance>
            {individualPerformanceData.map((student) => (
              <p key={student.id}>
                {student.name}:{student.score}
              </p>
            ))}
          </IndividualPerformance>
        </PerformanceContent>
      </Content>
    </PerformanceContainer>
  );
};

export default Performance;

// PerformanceSection.js
import React from 'react';
import Sidebar from './Sidebar';
// import { Line } from 'react-chartjs-2';
import {
  PerformanceContainer,
  SidebarContainer,
  Content,
  PerformanceHeader,
  PerformanceInfo,
  PerformanceGraphContainer,
  TotalMarks,
} from '../../styles/PerformanceStyles'; // Import styled components from PerformanceSectionStyles.js

const PerformanceSection = () => {
  return (
    <PerformanceContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <PerformanceHeader>Performance</PerformanceHeader>
        <PerformanceInfo>
          <PerformanceGraphContainer>
            <Line />
          </PerformanceGraphContainer>
          <TotalMarks>Total Marks: </TotalMarks>
        </PerformanceInfo>
      </Content>
    </PerformanceContainer>
  );
};

export default PerformanceSection;

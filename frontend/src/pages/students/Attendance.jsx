import React from 'react';
import Sidebar from './Sidebar';
import {
  AttendanceContainer,
  SidebarContainer,
  Content,
  AttendanceHeader,
  AttendanceList,
  AttendanceItem,
  AttendanceDate,
  AttendanceStatus,
} from '../../styles/AttendanceStyles';

const AttendanceSection = () => {
  return (
    <AttendanceContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <AttendanceHeader>Attendance</AttendanceHeader>
        <AttendanceList>
          {attendance.map(({ id, date, present }) => (
            <AttendanceItem key={id}>
              <AttendanceDate>{date}</AttendanceDate>
              <AttendanceStatus present={present}>
                {present ? 'Present' : 'Absent'}
              </AttendanceStatus>
            </AttendanceItem>
          ))}
        </AttendanceList>
      </Content>
    </AttendanceContainer>
  );
};

export default AttendanceSection;

import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

import {
  AssignmentsContainer,
  SidebarContainer,
  Content,
  AssignmentCard,
  AssignmentTitle,
  AssignmentDescription,
  AssignmentButton,
  AssignmentDoneMessage,
} from '../../styles/AssignmentsStyles'; // Import styled components from AssignmentStyles.js

const StudentAssignments = () => {
  return (
    <AssignmentsContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <h1>Assignments</h1>
        {assignments.map((assignment) => (
          <AssignmentCard key={assignment.id}>
            <AssignmentTitle>{assignment.title}</AssignmentTitle>
            <AssignmentDescription>
              {assignment.description}
            </AssignmentDescription>
            {!assignment.done ? (
              <AssignmentForm
                onDoAssignment={() => handleDoAssignment(assignment.id)}
              />
            ) : (
              <AssignmentDoneMessage>Assignment Done</AssignmentDoneMessage>
            )}
          </AssignmentCard>
        ))}
      </Content>
    </AssignmentsContainer>
  );
};

export default StudentAssignments;

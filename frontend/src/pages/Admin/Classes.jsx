import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import {
  ClassesContainer,
  Content,
  ClassesContent,
  ClassHeader,
  ClassList,
  ClassItem,
  AddClassButton,
  AddClassForm,
  AddClassInput,
  ClassContainer,
} from '../../styles/ClassesStyles';
const Classes = () => {
  return (
    <ClassesContainer>
      <Sidebar />
      <Content>
        <ClassesContent>
          <ClassHeader>Classes</ClassHeader>
          <AddClassForm>
            <AddClassInput type="text" placeholder="Enter Class Name" />
            <AddClassButton type='submit'> Add Class </AddClassButton>
          </AddClassForm>
          <ClassList>


            
          </ClassList>
        </ClassesContent>
      </Content>
    </ClassesContainer>
  );
};

export default Classes;

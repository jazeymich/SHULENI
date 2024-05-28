import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

import {
  ProfileContainer,
  SidebarContainer,
  Content,
  ProfileHeader,
  ProfileDetails,
  ProfileLabel,
  ProfileInfo,
  EditButton,
} from '../../styles/SettingsProfileStyles'; // Import styled components from SettingsProfileStyles.js

const SettingsProfile = () => {

  const teacherInfo = {
    name: 'Jane Doe',
    email: 'janedoe@example.com',
    phone: '123-456-7890',
    address: '124 Main St, City, Country',
    qualification: 'Master of Education',
  };


  return (
    <ProfileContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ProfileHeader>Profile Details</ProfileHeader>
        <ProfileDetails>
          <ProfileLabel>Name:</ProfileLabel>
          <ProfileInfo>{teacherInfo.name}</ProfileInfo>
          <ProfileLabel>Email:</ProfileLabel>
          <ProfileInfo>{teacherInfo.email}</ProfileInfo>
          <ProfileLabel>Phone:</ProfileLabel>
          <ProfileInfo>{teacherInfo.phone}</ProfileInfo>
          <ProfileLabel>Address:</ProfileLabel>
          <ProfileInfo>{teacherInfo.address}</ProfileInfo>
          <ProfileLabel>Qualification:</ProfileLabel>
          <ProfileInfo>{teacherInfo.qualification}</ProfileInfo>
        </ProfileDetails>
        <EditButton>Edit Profile</EditButton>
      </Content>
    </ProfileContainer>
  );
};

export default SettingsProfile;

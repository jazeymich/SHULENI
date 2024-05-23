import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Eventcalendar from './Eventcalendar';
import Announcement from './Announcement';
import Performance from './performance';
import axios from 'axios';
import {
  AdminDashboardContainer,
  Content,
  TopContent,
  BottomContent,
  Section,
  SectionTitle,
  CardContainer,
  Card,
  CardContent,
  CardTitle,
} from '../../styles/DashboardStyles';

const AdminDashboard = () => {
  return (
    <AdminDashboardContainer>
      <Content>
        <TopContent>
          <Section>
            <SectionTitle>Overview</SectionTitle>
            <CardContainer>
              <Card>
                <CardTitle>Total Students</CardTitle>
                <CardContent>500</CardContent>
              </Card>
              <Card>
                <CardTitle>Total Teachers</CardTitle>
                <CardContent>50</CardContent>
              </Card>
              <Card>
                <CardTitle>Total Classes</CardTitle>
                <CardContent>20</CardContent>
              </Card>
            </CardContainer>
          </Section>

          <Section>
            <SectionTitle>All Events</SectionTitle>
          </Section>
        </TopContent>

        <BottomContent>
          <Performance>
          <SectionTitle>Students Performance</SectionTitle>
          </Performance>
          <Announcement />
        </BottomContent>
      </Content>
    </AdminDashboardContainer>
  );
};

export default AdminDashboard;

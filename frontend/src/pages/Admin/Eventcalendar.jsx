import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

import {
  EventCalendarContainer,
  Content,
  CalendarContainer,
  Events,
  Event,
  AddEventForm,
  EventInput,
  AddEventButton,
  ErrorText,
} from '../../styles/EventCalendarStyles';

const Eventcalendar = () => {
  return (
    <EventCalendarContainer>
      <Sidebar />
      <Content>
        <h1>Events & Calendar</h1>
        <div>Current Time: </div>
        <CalendarContainer>
          {/* Display Calendar Here */}
          {/* For example: <Calendar /> */}
          Calendar
        </CalendarContainer>
        <AddEventForm>
          <h2>Add New Event</h2>
          <EventInput type="text" placeholder="Enter Event" />
          <AddEventButton type="submit">Add Event</AddEventButton>
        </AddEventForm>

        <Events>
          <h2>Events</h2>
        </Events>
      </Content>
    </EventCalendarContainer>
  );
};

export default Eventcalendar;

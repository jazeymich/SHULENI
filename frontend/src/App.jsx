import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home';
import ChooseUser from './components/Chooseuser';
import AdminSignIn from './components/Adminsignin';
import StudentSignIn from './components/Studentsignin';
import TeacherSignIn from './components/Teachersignin';
import AdminDashboard from './pages/Admin/Dashboard';
import Classes from './pages/Admin/Classes';

import Exam from './pages/Admin/Exam';

import Attendance from './pages/Admin/Attendance';

import Performance from './pages/Admin/performance';

import Teachers from './pages/Admin/Teachers';

import Students from './pages/Admin/Students';

import Assignments from './pages/Admin/Assignment';

import Library from './pages/Admin/Library';

import Eventcalendar from './pages/Admin/Eventcalendar';

import SettingsProfile from './pages/Admin/Settingsprofile';

import Announcement from './pages/Admin/Announcement';







function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choose-user" element={<ChooseUser />} />
        {/*All the sign in pages routes are here*/}
        <Route exact path="/admin-SignIn" element={<AdminSignIn />} />
        <Route exact path="/student-SignIn" element={<StudentSignIn />} />
        <Route exact path="/teacher-SignIn" element={<TeacherSignIn />} />

        {/* All the dashboard routes */}
        <Route exact path="/admin/dashboard" element={<AdminDashboard />} />

        {/* Admin sections here */}
        <Route exact path="/admin/classes" element={<Classes />} />
        <Route exact path="/admin/exams" element={<Exam />} />
        <Route exact path="/admin/attendance" element={<Attendance />} />
        <Route exact path="/admin/performance" element={<Performance />} />
        <Route exact path="/admin/teachers" element={<Teachers />} />
        <Route exact path="/admin/students" element={<Students />} />
        <Route exact path="/admin/assignments" element={<Assignments />} />
        <Route exact path="/admin/library" element={<Library />} />
        <Route exact path="/admin/communication" element={<Announcement />} />
        <Route exact path="/admin/events" element={< Eventcalendar />} />
        <Route exact path="/admin/settings" element={<SettingsProfile />} />



      </Routes>
    </Router>
  );
}

export default App;

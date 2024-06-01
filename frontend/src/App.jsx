import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home';
import ChooseUser from './components/Chooseuser';
import AdminSignIn from './components/Adminsignin';
import StudentSignIn from './components/Studentsignin';
import TeacherSignIn from './components/Teachersignin';


//import the dashboards
import AdminDashboard from './pages/Admin/Dashboard';
import StudentDashboard from './pages/students/Dashboard';
import TeacherDashboard from './pages/Teachers/Dashboard';


//import the admin sections
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

//import students sections
import StudentAssignments from './pages/students/Assignment';
import ExamSection from '../src/pages/students/Exams';
import PerformanceSection from '../src/pages/students/Performance';
import AttendanceSection from '../src/pages/students/Attendance';
import LibrarySection from '../src/pages/students/Library';
import AnnouncementSection from '../src/pages/students/Announcement';
import ProfileSection from '../src/pages/students/Profile';


//import students sections
import ClassSection from '../src/pages/Teachers/Classes';
import StudentSection from '../src/pages/Teachers/Students';
import TeacherSection from '../src/pages/Teachers/Teachers';
import CheckPerformanceSection from '../src/pages/Teachers/Performance';
import EventSection from '../src/pages/Teachers/Events';
import TeacherProfileSection from '../src/pages/Teachers/Profile';
import CheckAnnouncementSection from '../src/pages/Teachers/Announcement';
import AssignmentSection from '../src/pages/Teachers/Assignments';
import CheckAttendanceSection from '../src/pages/Teachers/Attendance';
import CheckExamSection from '../src/pages/Teachers/Exams';




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
        <Route exact path="/student/dashboard" element={<StudentDashboard />} />
        <Route exact path="/teacher/dashboard" element={<TeacherDashboard />} />

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
        <Route exact path="/admin/events" element={<Eventcalendar />} />
        <Route exact path="/admin/settings" element={<SettingsProfile />} />

        {/* student section */}
        <Route exact path="/student/assignments" element={<StudentAssignments />} />
        <Route exact path="/student/exams" element={<ExamSection />} />
        <Route exact path="/student/performance" element={<PerformanceSection />} />
        <Route exact path="/student/attendance" element={<AttendanceSection />} />
        <Route exact path="/student/library" element={<LibrarySection />} />
        <Route exact path="/student/communication" element={<AnnouncementSection/>} />
        <Route exact path="/student/settings" element={<ProfileSection />} />

        {/* Teachers section */}
        <Route exact path="/teacher/classes" element={<ClassSection />} />
        <Route exact path="/teacher/students" element={<StudentSection />} />
        <Route exact path="/teacher/teachers" element={<TeacherSection />} />
        <Route exact path="/teacher/assignments" element={<AssignmentSection />} />
        <Route exact path="/teacher/exams" element={<CheckExamSection />} />
        <Route exact path="/teacher/performance" element={<CheckPerformanceSection />} />
        <Route exact path="/teacher/attendance" element={<CheckAttendanceSection />} />
        <Route exact path="/teacher/communication" element={<CheckAnnouncementSection />} />
        <Route exact path="/teacher/events" element={<EventSection />} />
        <Route exact path="/teacher/settings" element={<TeacherProfileSection/>} />






      </Routes>
    </Router>
  );
}

export default App;

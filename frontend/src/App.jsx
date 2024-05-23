import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home';
import ChooseUser from './components/Chooseuser';
import AdminSignIn from './components/Adminsignin';
import StudentSignIn from './components/Studentsignin';
import TeacherSignIn from './components/Teachersignin';

























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
      </Routes>
    </Router>
  );
}

export default App;

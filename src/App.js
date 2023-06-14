import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "./screens/Student";
import "bootstrap/dist/css/bootstrap.min.css";
import EditStudent from "./screens/EditStudent";
import StudentData from "./screens/StudentData";
import Teacher from "./screens/Teacher";
import TeacherData from "./screens/TeacherData";
import EditTeacher from "./screens/EditTeacher";
// import Signup from "./screens/Signup";
// import Login from "./screens/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Signup/>}/> */}
          {/* <Route path="/login" element={<Login/>}/> */}
          <Route path="/student" element={<Student />} />
          <Route path="editStudent/:id" element={<EditStudent />} />
          <Route path="/studentData" element={<StudentData />} />
          <Route path="/teacher" element={<Teacher/>}/>
          <Route path="/teacherData" element={<TeacherData/>}/>
          <Route path="editTeacher/:id" element={<EditTeacher/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

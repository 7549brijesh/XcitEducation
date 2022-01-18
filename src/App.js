import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Login from "./Components/Login";
// import StudentReg from "./Register/StudentReg";
// import CompanyReg from "./Register/CompanyReg";
import StudentLog from "./Components/StudentLog";
import CompanyLog from "./Components/CompanyLog";
import Student from "./Components/Student";
import Employ from "./Components/Employ";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyApplication from "./Components/MyApplicationTable";
import MyApplicationCard from "./Components/MyApplicationCard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/register/Student" element={<Student />} />
          <Route path="/register/Company" element={<Employ />} />
          <Route path="/login/StudentLog" element={<StudentLog />} />
          <Route path="/login/CompanyLog" element={<CompanyLog />} />
          <Route path="/login/MyApplication" element={<MyApplication />} />
          <Route
            path="/login/MyApplicationCard"
            element={<MyApplicationCard />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

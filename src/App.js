import "./App.css";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Login from "./Login/Login";
import StudentReg from "./Register/StudentReg";
import CompanyReg from "./Register/CompanyReg";
import StudentLog from "./Login/StudentLog";
import CompanyLog from "./Login/CompanyLog";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyApplication from "./My Application/MyApplication";
import MyApplicationCard from "./My Application/MyApplicationCard";

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
          <Route path="/register/Student" element={<StudentReg />} />
          <Route path="/register/Company" element={<CompanyReg />} />
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

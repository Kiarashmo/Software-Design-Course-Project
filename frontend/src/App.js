import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import CourseCard from "./components/CourseCard";
import CarouselBS from "./components/CarouselBS";
import CoursesSection from "./components/CoursesSection";

function App() {
  const [state, setState] = useState('main')

  // const adminUser = {
  //   email: "admin@admin.com",
  //   password: "admin",
  // }

  // const [user, setUser] = useState({name:"", email:""});
  // const [error, setError] = useState("");

  // const Login = details => {
  //   console.log(details)
  // }

  // const Logout = () => {
  //   console.log("Logout");
  // }


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/register' element={<RegisterForm/>} />
          <Route path='/log-in' element={<LoginForm/>} />
          <Route path='/courses' element={<CoursesSection/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

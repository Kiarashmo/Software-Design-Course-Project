import React, { useState } from 'react';
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Navbar from './components/Navbar'
import MainPage from './components/MainPage'
import CourseCard from './components/CourseCard';
import CarouselBS from './components/CarouselBS';
import CoursesSection from './components/CoursesSection';


function App() {
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
      <Navbar />
      <CoursesSection />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import CourseCard from "./components/CourseCard";
import CarouselBS from "./components/CarouselBS";
import TodoList from "./components/taskcomponent/TodoList";
import CoursesSection from "./components/CoursesSection";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/log-in" element={<LoginForm />} />
          <Route path="/courses" element={<CoursesSection />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

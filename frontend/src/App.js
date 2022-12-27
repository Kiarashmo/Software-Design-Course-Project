import React, { useState } from "react";
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
      <TodoList />
    </div>
  );
}

export default App;

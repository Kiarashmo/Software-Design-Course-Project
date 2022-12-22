import React from "react";
import MLCourse from "../icons/MLS.course.png";
import "./CourseCard.css";

export default function CourseCard() {
  return (
    <div className="course-card">
      <img src={MLCourse} className="course-pic" />
      <h4 className="course-text">Machine Learning Course</h4>
    </div>
  );
}

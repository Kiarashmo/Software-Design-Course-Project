import React from "react";
import "./CourseCard.css";

export default function CourseCard(props) {
  return (
    <div className="course-card">
      <img src={props.img} className="course-pic" />
      <h4 className="course-text">{props.text}</h4>
    </div>
  );
}

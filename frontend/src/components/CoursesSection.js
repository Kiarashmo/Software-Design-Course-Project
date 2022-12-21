import React from 'react'
import CarouselBS from './CarouselBS'
import './CourseSection.css'
export default function CoursesSection() {
  return (
    <div className='courses-section'>
      <h2 className='course-h'>Trending courses:</h2>
      <CarouselBS/>
      <h2 className='course-h'>My courses:</h2>
      <CarouselBS/>
    </div>
  )
}

import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselCard from "./CourseCard";
import "./CarouselBS.css";
import Stack from "react-bootstrap/Stack";

export default function CarouselBS() {
  return (
    <div className="my-carousel">
      <Carousel variant="dark">
        <Carousel.Item>
          <Stack
            direction="horizontal"
            className="h-100 justify-content-center align-items-center"
            gap={3}
          >
            <CarouselCard 
              img ={require("../icons/MLS.course.png")}
              text="Machine Learning Course"
            />
            <CarouselCard 
              img ={require("../icons/MLS.course.png")}      text="Deep Learning Course"
            />
            <CarouselCard 
              img ={require("../icons/MLS.course.png")}      text="Backend Course"
            />
          </Stack>
        </Carousel.Item>
        <Carousel.Item>
          <Stack
            direction="horizontal"
            className="h-100 justify-content-center align-items-center"
            gap={3}
          >
            <CarouselCard 
              img ={require("../icons/MLS.course.png")}      text="Frontend Course"
            />
            <CarouselCard 
              img ={require("../icons/MLS.course.png")}      text="DS Course"
            />
            <CarouselCard 
              img ={require("../icons/MLS.course.png")}      text="GAN Course"
            />
          </Stack>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

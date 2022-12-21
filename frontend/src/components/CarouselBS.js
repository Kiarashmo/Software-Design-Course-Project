import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselCard from "./CourseCard";
import "./CarouselBS.css";
import Stack from 'react-bootstrap/Stack';

export default function CarouselBS() {
    
  return (
    <div className="my-carousel">
      <Carousel  variant="dark">
        <Carousel.Item>
        <Stack
        direction="horizontal"
        className="h-100 justify-content-center align-items-center"
        gap={3}
        >
          <CarouselCard />
          <CarouselCard />
          <CarouselCard />
          </Stack>  
        </Carousel.Item>
        <Carousel.Item>
          <CarouselCard />
        </Carousel.Item>
        <Carousel.Item>
          <CarouselCard />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

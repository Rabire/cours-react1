import "./Slider.css";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const slides = [
  {
    imageUrl: "https://images.unsplash.com/photo-1504279807002-09854ccc9b6c",
    alt: "someone playing poker",
    title: "Bienvenu sur D-Thunes",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1604156425963-9be03f86a428",
    alt: "money",
    title: "J'ai rien de fou à raconter",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1547722700-57de0f73d3a5",
    alt: "a homeless person",
    title: "Regades les promotions à ne pas louper",
  },
];

export const Slider = () => {
  const sliderItem = slides.map((slide) => (
    <>
      <div className="slide">
        <img className="img" src={slide.imageUrl} alt={slide.alt} />
      </div>
      <h5 className="title">{slide.title}</h5>
    </>
  ));

  return (
    <div className="carousel-box">
      <Carousel className="carousel">{sliderItem}</Carousel>
    </div>
  );
};

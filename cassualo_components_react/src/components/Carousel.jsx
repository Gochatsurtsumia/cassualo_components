import React, { useState } from "react";
import "../styles/carousel.css";
import firstImg from "../assets/victoria-1444-x-700.avif";
import secondImg from "../assets/sea-to-sky-web.avif";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="container">
      <div className="img">
        <img
          src={firstImg}
          alt="First"
          style={{ display: currentIndex === 0 ? "block" : "none" }}
        />
        <img
          src={secondImg}
          alt="Second"
          style={{ display: currentIndex === 1 ? "block" : "none" }}
        />
      </div>

      <div className="buttons">
        <button onClick={() => showSlide(0)}>&lt;</button>
        <button onClick={() => showSlide(1)}>&gt;</button>
      </div>

      <div className="bottom-btns">
        <button
          style={{
            backgroundColor: currentIndex === 0 ? "grey" : "white",
          }}
          onClick={() => showSlide(0)}
        ></button>
        <button
          style={{
            backgroundColor: currentIndex === 1 ? "grey" : "white",
          }}
          onClick={() => showSlide(1)}
        ></button>
      </div>
    </div>
  );
};

export default Carousel;

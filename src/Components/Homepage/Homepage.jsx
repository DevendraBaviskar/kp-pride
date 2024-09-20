import React, { useState, useEffect } from "react";
import "./Homepage.css";
import Building from "../../Images/Building.avif";
import Floor from "../../Images/Floor.avif";
import Lobby from "../../Images/Lobby.avif";
import Hall from "../../Images/Hall.avif";
import Bar from "../../Images/Bar.avif";

const Homepage = () => {
  const images = [Lobby, Building, Floor, Hall, Bar];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <div>
      <div className="slider">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
        <div className="indicators">
          {images.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
      <div className="heading">
        <h1>
          Welcome to Hotel <span>K P Pride</span>
        </h1>
      </div>
    </div>
  );
};

export default Homepage;

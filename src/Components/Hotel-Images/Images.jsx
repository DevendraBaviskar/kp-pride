import React from "react";
import "./Images.css";
import First from "../../Images/First.jpg";
import Second from "../../Images/Second.jpg";
import Third from "../../Images/Third.avif";
import Fourth from "../../Images/Fourth.avif";
import Fifth from "../../Images/Fifth.jpg";
import Six from "../../Images/Six.avif";
import Seven from "../../Images/Seven.webp";
import Eight from "../../Images/Eight.webp";
import Nine from "../../Images/Nine.webp";
import Ten from "../../Images/Ten.webp";
import Eleven from "../../Images/Eleven.webp";
import Twelve from "../../Images/Twelve.webp";
import Thirteen from "../../Images/Thirteen.webp";
import Fourteen from "../../Images/Fourteen.webp";
const images = [
  First,
  Second,
  Third,
  Fourth,
  Fifth,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Eleven,
  Twelve,
  Thirteen,
  Fourteen,
  // Add more images to this array
];

const Images = () => {
  return (
    <div className="gallery">
      {images.map((img, index) => (
        <div key={index} className="gallery-item">
          <img src={img} alt={`Gallery item ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Images;

import React from "react";
import "./Rooms.css"; // Make sure to create this CSS file
import Standard from "../../Images/Rooms-images/Standard.jpg";
import Super from "../../Images/Rooms-images/Super.jpg";
import Executive from "../../Images/Rooms-images/Executive.jpg";
import { useNavigate } from "react-router-dom";
const Rooms = () => {
  const navigate = useNavigate();
  const handleNavigate = (roomType) => {
    navigate(`/${roomType}`);
  };
  return (
    <div className="rooms">
      <div className="image-container">
        <div className="room-box" onClick={() => handleNavigate("standard")}>
          <h2>Standard Deluxe Room(1800/-)</h2>
          <img src={Standard} alt="Standard Deluxe Room" />
          <p className="description">
            These attractively furnished and decorated special rooms are for
            <span className="span"> Single Occupancy</span>.
          </p>
        </div>
        <div className="room-box" onClick={() => handleNavigate("super")}>
          <h2>Super Deluxe Room(2000/-)</h2>
          <img src={Super} alt="Super Deluxe Room" />
          <p className="description">
            Each room is air conditioned, elegantly designed, furnished with{" "}
            <span className="span">Double bed</span> & exquisite furniture
          </p>
        </div>
        <div className="room-box" onClick={() => handleNavigate("executive")}>
          <h2>Executive Premium Room(2000/-)</h2>
          <img src={Executive} alt="Executive Premium Deluxe Room" />
          <p className="description">
            This is an <span className="span">Big</span> executive premium
            deluxe room for the ultimate experience.
          </p>
        </div>
      </div>
      <div>
        <span className="note">
          Note - The above room Tariff is for 2 people, Rs 600 will be added for
          the extra person.
        </span>
      </div>
    </div>
  );
};

export default Rooms;

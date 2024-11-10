import React from "react";
import Photo from "../../images/photo.png";
import "./card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="photo">
        <img src={Photo} alt="" />
      </div>
      <div className="text">
        <h1>Headline</h1>
        <p>
          Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
          ornare in venen.
        </p>
      </div>
      <div className="buttons">
        <button className="button1">See more</button>
        <button className="button2">Save</button>
      </div>
    </div>
  );
};

export default Card;

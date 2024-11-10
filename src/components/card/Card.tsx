import React from "react";
import Photo from "../../images/photo.png";

const Card = () => {
  return (
    <div>
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
        <button>See more</button>
        <button>Save</button>
      </div>
    </div>
  );
};

export default Card;

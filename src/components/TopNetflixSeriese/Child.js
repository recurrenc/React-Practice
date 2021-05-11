import React from "react";
import "./card.css";

const Child = (props) => {
  return (
    <>
      <div
        className="container"
        style={{
          backgroundImage: `linear-gradient(
      to right,
      rgb(255, 255, 255) 45%,
      transparent
    ), url(${props.cover})`,
        }}
      >
        <div className="img">
          <img src={props.imgsrc} alt="Thumbnail" />
        </div>

        <button className="primary">Watch Now</button>

        <div className="stars">
          <h3>Stars: {props.stars} </h3>
        </div>
        <div className="info">
          <div className="title">
            <h3>{props.title}</h3>
          </div>
          <div className="director">
            <h3>
              {props.year}, {props.director}
            </h3>
          </div>
          <div className="runtime">
            <p>
              {props.runtime} Min || {props.genre}
            </p>
          </div>
          <div className="description">{props.description}</div>
        </div>
      </div>
    </>
  );
};

export default Child;

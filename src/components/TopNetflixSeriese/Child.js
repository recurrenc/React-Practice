import React from "react";
import "./card.css";

const Child = (props) => {
  console.log(props);
  return (
    <>
      <div className="container">
        <div className="img">
          <img src={props.imgsrc} alt="Thumbnail" />
        </div>
        <div className="info">
          <div className="title">
            <h3>{props.title}</h3>
          </div>
          <div className="director">
            <h3>Director: {props.director}</h3>
          </div>
          <div className="runtime">
            <p>Duration: {props.runtime} </p>
          </div>
          <div className="genre">
            <p>Genre: {props.genre} </p>
          </div>
          <div className="stars">
            <p>Stars: {props.stars} </p>
          </div>
          <button className="primary">Watch Now</button>
        </div>
      </div>
    </>
  );
};

export default Child;

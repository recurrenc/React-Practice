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
          <div className="title"></div>
          <div className="director"></div>
          <div className="runtime"></div>
          <div className="genre"></div>
          <div className="stars"></div>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            {" "}
            Watch Now
          </a>
        </div>
      </div>
    </>
  );
};

export default Child;

import React from "react";
import Child from "./Child";
import ListData from "./ListData";
import "./card.css";
const Card = () => {
  return (
    <>
      <div className="heading">
        <h1>List of Top Movies on OTT Platform</h1>
      </div>
      {ListData.map((elem, i) => {
        return (
          <Child
            key={i}
            imgsrc={elem.imgsrc}
            title={elem.title}
            director={elem.director}
            genre={elem.genre}
            runtime={elem.runtime}
            link={elem.link}
            stars={elem.stars}
          />
        );
      })}
    </>
  );
};

export default Card;

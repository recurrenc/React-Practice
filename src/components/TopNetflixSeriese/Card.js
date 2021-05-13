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
      <div className="main">
        {ListData.map((elem, i) => {
          console.log(elem);
          return (
            <Child
              key={i}
              imgsrc={elem.imgsrc}
              year={elem.year}
              description={elem.description}
              cover={elem.cover}
              title={elem.title}
              director={elem.director}
              genre={elem.genre}
              runtime={elem.runtime}
              link={elem.link}
              stars={elem.stars}
            />
          );
        })}
      </div>
    </>
  );
};

export default Card;

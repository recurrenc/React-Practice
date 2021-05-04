import React from "react";
import ListItem from "./ListItem";
import "./list.css";

const List = () => {
  return (
    <div className="App">
      <h1>List of Top 5 Netflix Serise</h1>
      <div className="list">
        <ListItem no="1" item="Shadow and Bone" />
        <ListItem no="2" item="The Circle" />
        <ListItem no="3" item="Cocomelon" />
        <ListItem no="4" item="The Baker and the Beauty" />
        <ListItem no="5" item="Life In Color With David Attenborough" />
      </div>
    </div>
  );
};

export default List;

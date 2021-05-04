import React from "react";

const ListItem = (props) => {
  return (
    <div>
      {props.no}. {props.item}
    </div>
  );
};

export default ListItem;

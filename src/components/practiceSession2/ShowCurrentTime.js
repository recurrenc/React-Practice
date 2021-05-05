import React from "react";

const name = "Sonu Kumar";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

const ShowCurrentTime = () => {
  return (
    <>
      <h1>Hellow Folks,</h1>
      <h4>Myself {name}</h4>
      <p>Today's Date is {currDate}</p>
      <p>Current Time is {currTime}</p>
    </>
  );
};

export default ShowCurrentTime;

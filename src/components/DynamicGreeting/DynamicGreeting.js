import React from "react";

let greet = "";

let date = new Date(2021, 4, 4, 22);
let hour = date.getHours();

const mainDiv = {
  width: "100vw",
  height: "100vh",
  backgroundColor: "#f933f9",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const spanStyle = {
  color: "",
};

if (hour < 12 && hour >= 1) {
  greet = "Good Morning";
  spanStyle.color = "yellow";
} else if (hour >= 12 && hour < 20) {
  greet = "Good Evening";
  spanStyle.color = "green";
} else {
  greet = "Good Night";

  spanStyle.color = "purple";
}

const DynamicGreeting = () => {
  return (
    <>
      <div style={mainDiv}>
        <h1
          style={{
            padding: "20px",
            backgroundColor: "whitesmoke",
            borderRadius: "30px",
            color: "tomato",
          }}
        >
          Hello Sir, <span style={spanStyle}>{greet}</span>!
        </h1>
      </div>
    </>
  );
};

export default DynamicGreeting;

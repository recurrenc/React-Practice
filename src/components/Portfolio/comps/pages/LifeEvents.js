import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const LifeEvents = () => {
  return (
    <div>
      <Container maxWidth="xl" style={{ paddingTop: "12px" }}>
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "90vh" }}
        >
          Hello from Life Event Page
        </Typography>
      </Container>
    </div>
  );
};

export default LifeEvents;

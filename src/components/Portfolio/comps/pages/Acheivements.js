import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const Acheivements = () => {
  return (
    <div>
      <Container maxWidth="xl" style={{ paddingTop: "12px" }}>
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "90vh" }}
        >
          Hello from Acheivements Page
        </Typography>
      </Container>
    </div>
  );
};

export default Acheivements;

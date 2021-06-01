import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const GitStats = () => {
  return (
    <div>
      <Container maxWidth="sm">
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        />
        <h1>Hello from github stats</h1>
      </Container>
    </div>
  );
};

export default GitStats;

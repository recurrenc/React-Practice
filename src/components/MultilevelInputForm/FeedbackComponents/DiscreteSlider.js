import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}`;
}

function DiscreteSlider(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        {props.question}
      </Typography>
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={50}
      />
    </div>
  );
}
export default DiscreteSlider;

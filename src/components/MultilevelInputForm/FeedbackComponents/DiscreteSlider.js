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

function handleOnChange(event, value) {
  console.log(value);
  console.log(event);
}

function DiscreteSlider(props) {
  const classes = useStyles();

  return (
    <span className={classes.root}>
      <Typography component={"span"} id="discrete-slider" gutterBottom>
        {props.question}
      </Typography>
      <Slider
        defaultValue={0}
        name="teacher01"
        onChange={handleOnChange}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={50}
      />
    </span>
  );
}
export default DiscreteSlider;

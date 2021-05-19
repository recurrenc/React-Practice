import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Drawer from "./Components/SideDrawer";
import StickyTable from "./Components/StickyTable";
import Body from "./Body";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 0,
    padding: 0,
  },
}));

export default function CovieIndia() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Drawer />
        </Grid>
        <Grid item xs={12}>
          <Body />
        </Grid>
        <StickyTable />
      </Grid>
    </div>
  );
}

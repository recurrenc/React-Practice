import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    width: "100vw",
    margin: 4,
    boxShadow: "0 8px 6px -6px black",
    background: "#161625",
    borderRadius: 10,
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#4c75f2",
    background: "#161625",
  },
  superPaper: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default function IndiaCard(props) {
  const {
    state,
    active,
    deaths,
    recovered,
    confirmed,
    deltaconfirmed,
    deltadeaths,
    deltarecovered,
  } = props.data;
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          style={{
            textAlign: "center",
            color: "#bdbdbd",
            fontWeight: 800,
            textTransform: "uppercase",
            marginBottom: 6,
          }}
          variant="h5"
          component="h2"
        >
          {state}
        </Typography>
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xs={12}>
            <Paper className={classes.paper}>Total Active : {active}</Paper>
          </Grid>
          <Grid className={classes.superPaper} item lg={3} sm={6} xs={12}>
            <Paper className={classes.paper}>
              Total Confirmed : {confirmed}
            </Paper>
            <Paper className={classes.paper}>
              New Confirmed : {deltaconfirmed}
            </Paper>
          </Grid>

          <Grid className={classes.superPaper} item lg={3} sm={6} xs={12}>
            <Paper className={classes.paper}>
              Total Recovered : {recovered}{" "}
            </Paper>
            <Paper className={classes.paper}>
              New Recovered : {deltarecovered}{" "}
            </Paper>
          </Grid>
          <Grid className={classes.superPaper} item lg={3} sm={6} xs={12}>
            <Paper className={classes.paper}>Total Deaths : {deaths} </Paper>
            <Paper className={classes.paper}>New Deaths : {deltadeaths} </Paper>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

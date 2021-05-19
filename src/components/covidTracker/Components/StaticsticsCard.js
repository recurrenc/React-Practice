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
    width: 400,
    margin: 4,
    boxShadow: "0 8px 6px -6px black",
    background: "#bdbdbd",
    borderRadius: 6,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    fontSize: 20,
    color: "#161625",
    background: "#bdbdbd",
  },
  superPaper: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
}));

export default function StaticsticsCard(props) {
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
            color: "#fff",
            fontSize: "22px",
            fontWeight: "20px",
            fontStyle: "bold",
            textTransform: "uppercase",
            marginBottom: 6,
            background: "#161625",
          }}
          variant="h5"
          component="h2"
        >
          {state}
        </Typography>
        <Grid container spacing={0}>
          <Grid item lg={12} sm={12} xs={12}>
            <Paper className={classes.paper}>
              Total Active <br /> {active}
            </Paper>
          </Grid>
          <Grid className={classes.superPaper} item lg={12} sm={12} xs={12}>
            <Paper className={classes.paper}>
              Total Confirmed <br />
              {confirmed}
            </Paper>
            <Paper className={classes.paper}>
              New Confirmed <br /> {deltaconfirmed}
            </Paper>
          </Grid>

          <Grid className={classes.superPaper} item lg={12} sm={12} xs={12}>
            <Paper className={classes.paper}>
              Total Recovered <br /> {recovered}{" "}
            </Paper>
            <Paper className={classes.paper}>
              New Recovered <br /> {deltarecovered}{" "}
            </Paper>
          </Grid>
          <Grid className={classes.superPaper} item lg={12} sm={12} xs={12}>
            <Paper className={classes.paper}>
              Total Deaths <br /> {deaths}{" "}
            </Paper>
            <Paper className={classes.paper}>
              New Deaths <br /> {deltadeaths}{" "}
            </Paper>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

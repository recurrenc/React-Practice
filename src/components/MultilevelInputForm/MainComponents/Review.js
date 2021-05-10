import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const Teachers = [
  { name: "Teacher 1", avgRating: 4 },
  { name: "Teacher 2", avgRating: 3 },
  { name: "Teacher 3", avgRating: 4 },
  { name: "Teacher 4", avgRating: 4 },
  { name: "Teacher 5", avgRating: 4 },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

function Review() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Feedback Summary
      </Typography>
      <List disablePadding>
        {Teachers.map((Teacher) => (
          <ListItem className={classes.listItem} key={Teacher.name}>
            <ListItemText primary={Teacher.name} />
            <Typography variant="body2">{Teacher.avgRating}</Typography>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}
export default Review;

import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import DiscreteSlider from "../FeedbackComponents/DiscreteSlider";
import Question from "../FeedbackQuestion/Question";
import TeacherList from "../FieldList/TeacherList";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
    name: `teacher${index + 1}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

// const TeacherList = [
//   "Teacher1",
//   "Teacher2",
//   "Teacher3",
//   "Teacher4",
//   "Teacher5",
//   "Teacher6",
//   "Teacher7",
//   "Teacher8",
// ];

function Feedback(props) {
  console.log(
    props.studentState.department + " " + props.studentState.semester
  );
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  // const [input, setInput] = useState([
  //   {
  //     teacher: "",
  //     question1: "",
  //     question2: "",
  //     question3: "",
  //     question4: "",
  //     question5: "",
  //     question6: "",
  //     question7: "",
  //     question8: "",
  //     question9: "",
  //     question10: "",
  //     question11: "",
  //   },
  // ]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {TeacherList.filter(
            (e) =>
              e.department === props.studentState.department &&
              e.semester === props.studentState.semester
          )
            .map((e) => e.faculty)
            .flat()
            .map((Name, i) => {
              return <Tab key={i} label={Name} {...a11yProps(i)} />;
            })}
        </Tabs>
      </AppBar>

      {TeacherList.map((name, i) => {
        return (
          <TabPanel key={i} value={value} index={i}>
            {Question.map((question, j) => {
              return <DiscreteSlider key={j} Key={j} question={question} />;
            })}
          </TabPanel>
        );
      })}
    </div>
  );
}

export default Feedback;

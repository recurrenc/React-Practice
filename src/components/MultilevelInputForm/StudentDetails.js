import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import DropdownInput from "./FeedbackComponents/DropDownInput";

export default function StudentDetails() {
  const [inputValues, setInputValues] = useState({
    firstname: "",
    lastname: "",
    course: "",
    department: "",
    semester: "",
    enrollment: "",
    email: "",
    mobile: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    console.log(`${name}   and  ${value}`);
    setInputValues({ ...inputValues, [name]: value });
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Student Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstname"
            name="firstname"
            label="First Name"
            onChange={handleInput}
            value={inputValues.firstname}
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastname"
            name="lastname"
            label="Last Name"
            onChange={handleInput}
            value={inputValues.lastname}
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <DropdownInput
          name="Course"
          onChange={handleInput}
          options={["B.Tech", "BCA", "M.Tech", "MCA", "B.Sc", "M.Sc"]}
        />
        <DropdownInput
          name="Department"
          onChange={handleInput}
          renderValue={inputValues.department}
          options={[
            "Computer Science",
            "Information Technology",
            "Electronics and Communication",
            "Mechenical",
            "Civil",
            "Chemical",
            "Industrial Production",
          ]}
        />

        <DropdownInput
          name="Semester"
          onChange={handleInput}
          renderValue={inputValues.semester}
          options={["I", "II", "III", "IV", "V", "VI", "VII", "VIII"]}
        />

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="enrollment"
            name="enrollment"
            label="Enrollment Number"
            onChange={handleInput}
            value={inputValues.enrollment}
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="email"
            name="email"
            label="Email"
            onChange={handleInput}
            value={inputValues.email}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="mobile"
            name="mobile"
            onChange={handleInput}
            value={inputValues.mobile}
            label="Mobile Number"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

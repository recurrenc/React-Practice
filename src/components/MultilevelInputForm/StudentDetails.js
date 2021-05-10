import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import DropdownInput from "./FeedbackComponents/DropDownInput";

export default function StudentDetails() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Student Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <DropdownInput
          name="Course"
          options={["B.Tech", "BCA", "M.Tech", "MCA", "B.Sc", "M.Sc"]}
        />
        <DropdownInput
          name="Department"
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
          options={["I", "II", "III", "IV", "V", "VI", "VII", "VIII"]}
        />

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="enrollment"
            name="enrollment"
            label="Enrollment Number"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="email" name="email" label="Email" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="mobile"
            name="mobile"
            label="Mobile Number"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

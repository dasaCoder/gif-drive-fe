import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  TextField,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { RegisterSchema } from "./RegisterSchema";

export const Register = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },
  });

  return (
    <Grid container justifyContent={"center"} style={{ paddingTop: "50px" }}>
      <Grid item md={8}>
        <Card>
          <CardHeader
            style={{ textAlign: "center" }}
            title="Login To Your Account"
          />
          <form onSubmit={formik.handleSubmit}>
            <CardContent>
              <TextField
                fullWidth
                label="Name"
                id="name"
                name="name"
                style={{ marginTop: "20px" }}
                helperText={formik.errors.name}
                value={formik.values.name}
                onChange={formik.handleChange}
                variant="standard"
              />

              <TextField
                fullWidth
                label="Email"
                id="email"
                name="email"
                style={{ marginTop: "20px" }}
                helperText={formik.errors.email}
                value={formik.values.email}
                onChange={formik.handleChange}
                variant="standard"
              />
              <TextField
                fullWidth
                label="Password"
                id="password"
                name="password"
                helperText={formik.errors.password}
                style={{ marginTop: "20px" }}
                value={formik.values.password}
                onChange={formik.handleChange}
                variant="standard"
                type="password"
              />
            </CardContent>

            <CardActions style={{ float: "right", margin: "10p 7px 20px 0" }}>
              <Button variant="contained" onClick={() => formik.handleSubmit()}>
                Login
              </Button>
            </CardActions>
          </form>

          <Typography fontSize={"12px"} textAlign="center">
            Already have an account?{" "}
            <Link to={"/login"}> Click Here to Login</Link>
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
};

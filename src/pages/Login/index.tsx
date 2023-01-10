import { Grid, Card, TextField, CardActions, Button } from "@mui/material";
import CardContent from "@mui/material/CardContent/CardContent";
import CardHeader from "@mui/material/CardHeader/CardHeader";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginSchema } from "./LoginValidationSchema";

export const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
      localStorage.setItem("token", "sdfsfsdfsfsd");
      navigate("/");
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
                label="Email"
                id="email"
                name="email"
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
            Don't have an account?{" "}
            <Link to={"/register"}>Create A New Account</Link>
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
};

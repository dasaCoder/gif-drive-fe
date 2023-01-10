import React from "react";
import "./App.css";
import AppRoute from "./routes";
import NavBar from "./components/Nav";
import { Grid } from "@mui/material";

function App() {
  return (
    <div>
      <NavBar />
      <Grid container>
        <AppRoute />
      </Grid>
    </div>
  );
}

export default App;

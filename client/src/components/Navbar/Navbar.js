import React from "react";
import classes from "./Navbar.module.css";
import { Container, Grid } from "@material-ui/core";
import Search from "../Search/Search";
import logo from "./rabotniki.png";

const Navbar = () => {
  return (
    <Container>
      <div className={classes.Navbar}>
        <Grid item xs={3}>
          <div className={classes.logoBox}>
            <img src={logo} alt={logo} />
          </div>
        </Grid>
        <Grid item xs={6}>
          <Search />
        </Grid>
        <Grid item xs={4}>
          <div className={classes.NavLogin}>
            <a href={""}>Register</a>
            <a href={""}>Login</a>
          </div>
        </Grid>
      </div>
    </Container>
  );
};

export default Navbar;

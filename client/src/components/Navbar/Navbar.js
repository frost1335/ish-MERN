import React from "react";
import classes from "./Navbar.module.css";
import { Container, Grid } from "@material-ui/core";
import Menu from "../Menu/Menu";
import Search from "../Search/Search";

const Navbar = () => {
  return (
    <Container>
      <div className={classes.menuBox}>
        <Menu />
      </div>
      <Grid item xs={3}>
        <div className={classes.logoBox}>Logo</div>
      </Grid>
      <Grid item xs={6}>
        <Search />
      </Grid>
      <Grid item xs={4}>
        <div>
          <a href={""}>Register</a>
          <a href={""}>Login</a>
        </div>
      </Grid>
    </Container>
  );
};

export default Navbar;

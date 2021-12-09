import React from "react";
import classes from "./Navbar.module.css";
import { Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import logo from "./rabotniki.png";

const Navbar = () => {
  return (
    <div style={{ background: "#fff" }}>
      <Container>
        <div className={classes.Navbar}>
          <Grid item xs={3}>
            <div className={classes.logoBox}>
              <Link to="/">
                <img src={logo} alt={logo} />
              </Link>
            </div>
          </Grid>
          <Grid item xs={6}>
            <Search />
          </Grid>
          <Grid item xs={4}>
            <div className={classes.NavLogin}>
              <Link to="/">
                <i className={"fad fa-user-plus"}></i> Register
              </Link>
              <Link to="/">
                <i className={"fad fa-sign-in "}></i> Login
              </Link>
            </div>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Container, Grid } from "@material-ui/core";
import Category from "../components/Category/Category";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Category />
      </Container>
    </>
  );
};

export default Home;

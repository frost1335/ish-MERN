import React from "react";
import classes from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={classes.LoaderBox}>
      <div className={classes.Loader}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;

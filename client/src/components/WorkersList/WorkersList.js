import React from "react";
import classes from "./WorkersList.module.css";
import WorkersItem from "./WorkersItem/WorkersItem";
import { Container } from "@material-ui/core";

const WorkersList = (props) => {
  return (
    <Container>
      <div className={classes.WorkersList}>
        <WorkersItem />
      </div>
    </Container>
  );
};

export default WorkersList;

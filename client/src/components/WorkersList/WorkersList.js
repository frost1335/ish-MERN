import React from "react";
import classes from "./WorkersList.module.css";
import WorkersItem from "./WorkersItem/WorkersItem";

const WorkersList = (props) => {
  const workersMap = () => {
    props.category.map((worker, index) => {
      return <WorkersItem worker={worker} key={index} />;
    });
  };

  return <div className={classes.WorkersList}>{workersMap()}</div>;
};

export default WorkersList;

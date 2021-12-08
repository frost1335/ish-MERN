import React from "react";
import classes from "./WorkersList.module.css";
import WorkersItem from "./WorkersItem/WorkersItem";

const WorkersList = (props) => {
  return (
    <div className={classes.WorkersList}>
      {props.category.map((worker, index) => {
        return <WorkersItem worker={worker} key={index} />;
      })}
    </div>
  );
};

export default WorkersList;

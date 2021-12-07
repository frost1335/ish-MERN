import React, { useState, useEffect } from "react";
import classes from "./WorkersList.module.css";
import WorkersItem from "./WorkersItem/WorkersItem";
import { useParams } from "react-router-dom";
import axios from "axios";

const WorkersList = (props) => {
  console.log(props);
  const workersMap = () => {
    props.category.map((worker, index) => {
      return <WorkersItem worker={worker} key={index} />;
    });
  };

  return <div className={classes.WorkersList}>{workersMap()}</div>;
};

export default WorkersList;

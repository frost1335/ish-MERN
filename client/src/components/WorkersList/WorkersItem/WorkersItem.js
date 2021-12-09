import React from "react";
import classes from "./WorkersItem.module.css";
import Rating from "@material-ui/lab/Rating";
import { Link } from "react-router-dom";

const WorkersItem = (props) => {
  console.log(props.worker);
  return (
    <Link to={`/worker/${props.worker._id}`} style={{textDecoration: 'none', color: '#000'}}>
      <div className={classes.WorkersItem}>
        <div className={classes.itemLeft}>
          <div className={classes.imgBox}>
            <img src={"..."} alt={"IMG"} />
          </div>
          <div className={classes.itemStars}>
            <Rating
              value={3}
              readOnly
              name={"asd"}
              size="small"
              precision={0.5}
            />
          </div>
          <span className={classes.workerReview}>7 отзывов</span>
        </div>
        <div className={classes.itemRight}>
          <h2 className={classes.workerName}>{props.worker.name}</h2>
          <p className={classes.workerAdress}>
            <i className={"fad fa-map-marker-alt"}></i> {props.worker.adress}
          </p>
          <p className={classes.workerDate}> {props.worker.date} </p>
          <p className={classes.workerDescription}>
            {props.worker.description}
          </p>
        </div>
      </div>
    </Link>
  );
};
export default WorkersItem;

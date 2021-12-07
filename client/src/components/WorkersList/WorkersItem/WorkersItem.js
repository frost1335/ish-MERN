import React from "react";
import classes from "./WorkersItem.module.css";
import Rating from "@material-ui/lab/Rating";

const WorkersItem = (props) => {
  console.log(props);
  return (
    <div className={classes.WorkersItem}>
      <div className={classes.itemLeft}>
        <div className={classes.imgBox}>
          <img src={"asd"} alt={"IMG"} />
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
        <h2 className={classes.workerName}>Worker name</h2>
        <p className={classes.workerAdress}>
          <i className={"fad fa-map-marker-alt"}></i> Worker adress adress
        </p>
        <p className={classes.workerDate}>worker registered date</p>
        <p className={classes.workerDescription}>
          Worker comment = as dsa jas dkask dksj kdjsakj jksa jkdsakj dhaskjh
          dkjhs
        </p>
      </div>
    </div>
  );
};
export default WorkersItem;

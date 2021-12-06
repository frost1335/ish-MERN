import { Grid } from "@material-ui/core";
import React from "react";
import classes from "./WorkersItem.module.css";
//...WorkersItem
const WorkersItem = () => {
  return (
    <Grid item xs={12} md={10} lg={8} xl={8} style={{ margin: "auto" }}>
      <div className={classes.WorkersItem}>
        <div>
          <img src={"asd"} alt={"IMG"} />
          <div>*****</div>
          <span>7 отзывов</span>
        </div>
        <div>
          <h2>Worker name</h2>
          <p>Worker adress adress</p>
          <p>
            Worker comment = as dsa jas dkask dksj kdjsakj jksa jkdsakj dhaskjh
            dkjhs
          </p>
        </div>
      </div>
    </Grid>
  );
};

export default WorkersItem;

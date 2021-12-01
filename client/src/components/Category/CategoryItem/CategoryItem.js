import React from "react";
import classes from "./CategoryItem.module.css";

const CategoryItem = (props) => {
  return (
    <div className={classes.CategoryItem}>
      <p>{props.category.name}</p>
      <span>{props.category.image}</span>
    </div>
  );
};

export default CategoryItem;

import React from "react";
import classes from "./CategoryItem.module.css";
import { Link } from "react-router-dom";

const CategoryItem = (props) => {
  
  return (
    <Link to={`/categorys/${props.category._id}`}>
      <div className={classes.CategoryItem}>
        <p>{props.category.name}</p>
        <span>{props.category.img}</span>
      </div>
    </Link>
  );
};

export default CategoryItem;

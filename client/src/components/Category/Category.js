import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import classes from "./Category.module.css";
import CategoryItem from "./CategoryItem/CategoryItem";

const Category = (props) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    setCategory([
      { name: "asd", image: "asdasdasd" },
      { name: "asd", image: "asdasdasd" },
      { name: "asd", image: "asdasdasd" },
      { name: "asd", image: "asdasdasd" },
      { name: "asd", image: "asdasdasd" },
      { name: "asd", image: "asdasdasd" },
      { name: "asd", image: "asdasdasd" },
      { name: "asd", image: "asdasdasd" },
    ]);
  }, []);

  const categoryList = category.map((category, index) => {
    return (
      <Grid item={true} key={index} xs={12} sm={6} md={4} lg={3}>
        <CategoryItem category={category} />
      </Grid>
    );
  });

  return (
    <Grid container className={classes.Category}>
      {categoryList}
    </Grid>
  );
};

export default Category;

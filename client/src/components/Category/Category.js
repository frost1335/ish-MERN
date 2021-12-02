import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import classes from "./Category.module.css";
import CategoryItem from "./CategoryItem/CategoryItem";
import axios from "axios";
import Loader from "../Loader/Loader";

const Category = (props) => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const { data } = await axios.get("/admin/categorys/");
        console.log(data.data);
        setCategory(data.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) return;
        console.log(error.response.data);
      }
    }

    fetchData();
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
      {loading ? <Loader /> : categoryList}
    </Grid>
  );
};

export default Category;

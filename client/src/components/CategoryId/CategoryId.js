import React, { useEffect, useState } from "react";
import classes from "./CategoryId.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../Loader/Loader";
import WorkersList from "../WorkersList/WorkersList";
import { Container, Grid } from "@material-ui/core";

const CategoryId = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`/admin/categorys/${params.id}`);
        setCategory(data.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) return;
        console.log(error.response.data);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Grid item xs={12} md={10} lg={8}>
              <WorkersList category={category} />
            </Grid>
            <Grid item xs={12} md={10} lg={4}>
              <div>Filter</div>
            </Grid>
          </div>
        </Container>
      )}
    </div>
  );
};

export default CategoryId;

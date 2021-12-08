import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Grid } from "@material-ui/core";
import Loader from "../Loader/Loader";

const WorkerId = (props) => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [worker, setWorker] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/admin/workers/${params.id}`);
        setWorker(data.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) return;
        console.log(error.response.data);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Grid item xs={12} lg={5}></Grid>
          <Grid item xs={12} lg={7}>
            <p>{worker.name}</p>
            <p>{worker.adress}</p>
            <p>{worker.date}</p>
            <p>{worker.description}</p>
          </Grid>
        </>
      )}
    </Container>
  );
};

export default WorkerId;

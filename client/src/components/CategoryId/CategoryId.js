import React, { useEffect, useState } from "react";
import classes from "./CategoryId.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../Loader/Loader";
import WorkersList from "../WorkersList/WorkersList";

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
    <div>{loading ? <Loader /> : <WorkersList category={category} />}</div>
  );
};

export default CategoryId;

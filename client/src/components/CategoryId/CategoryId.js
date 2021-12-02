import React, { useEffect, useState } from "react";
import classes from "./CategoryId.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const CategoryId = () => {
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
      const fetchData = async()=> {
          const {data} = await axios.get('/admin/categorys/:id')

      }
  }, [])
  const params = useParams();
  return (
    <div>
      <h1>Category id</h1>
    </div>
  );
};

export default CategoryId;

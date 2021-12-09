import React from "react";
import classes from "./WorkerId.module.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Grid } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
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
        <div className={classes.WorkerId}>
          <div className={classes.workerRow}>
            <Grid item xs={12} lg={4}>
              <div className={classes.imgBox}>
                <img src="..." alt="IMG" />
              </div>
            </Grid>
            <Grid item xs={12} lg={7}>
              <p>{worker.name}</p>
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
              <p>{worker.adress}</p>
              <p>{worker.date}</p>
            </Grid>
          </div>

          <div className={classes.workerRow}>
            <Grid item xs={12} lg={8}>
              <h2 className={classes.descriptionTitle}>Информация</h2>
              <p className={classes.workerDescription}>{worker.description}</p>
            </Grid>
          </div>

          <h2 className={classes.commentTitle}>Отзыви работника</h2>

          <div className={classes.workerComments}>
            {
              /* worker.review */ [1, 2, 3, 4].map((rev, index) => {
                return (
                  <div className={classes.comment} key={index}>
                    <span>Дата: 09.12.2021</span>
                    <div className={classes.commentStar}>
                      <span>Отлично: </span>
                      <Rating
                        value={3}
                        readOnly
                        name={"asd"}
                        size="small"
                        precision={0.5}
                      />
                    </div>
                    <div className={classes.commentReview}>
                      <p className={classes.textReview}>
                        Взялся за нестандартный проект квартиры с LED
                        освещением, инфракрасными полами. Выполнил работы по
                        установке и подключению сантехники, электрики и
                        вентиляции. Были в работе сложные технические вопросы,
                        но решения в итоге были найдены удачно. К работе подход
                        ответственный и добросовестный. В квартире уже живу,
                        недостатков в проделанной работе не вижу.
                      </p>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      )}
    </Container>
  );
};

export default WorkerId;

import React from "react";
import classes from "./Search.module.css";

const Search = () => {
  return (
    <div className={classes.Search}>
      <form action={null} className={classes.SearchForm}>
        <input type="text" placeholder="Кто вам нужен ?" />
        <button>Найти мастера</button>
      </form>
    </div>
  );
};

export default Search;

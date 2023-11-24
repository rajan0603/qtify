import React from "react";
import styles from "./Search.module.css";

const Search = ({ placeholder }) => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.search} placeholder={placeholder} required/>
      <button className={styles.searchbutton}>
        <img
          src={require("../../assets/Search-icon.png")} alt = "search" width={20}
        />
      </button>
    </div>
  );
};

export default Search;
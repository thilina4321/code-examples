import React from "react";
import classes from "./mainbar.module.css";

const Mainbar = ({ setIsSide, isSide }) => {
  return (
    <div className={classes.mainbar}>
      <button className={classes.btn} onClick={() => setIsSide(!isSide)}> Click </button>
      <p className={classes.p}> Main Brand </p>
    </div>
  );
};

export default Mainbar;

import React, { useContext } from "react";
import { counterContext } from "./auth-content";
import classes from "./counter.module.css";

const Counter = () => {
  const { count, increase, decrease } = useContext(counterContext);
  return (
    <div className={classes.counter}>
      <button onClick={decrease}> Decrease </button>
      <div>Count : {count} </div>
      <button onClick={increase}> Increase </button>
    </div>
  );
};

export default Counter;

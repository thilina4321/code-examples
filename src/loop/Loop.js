import React, { useState } from "react";
import classes from "./loop.module.css";

const Loop = () => {
  const [tables, setTables] = useState([]);
  const [values, setValues] = useState([]);

  const onSelectHandler = () => {
    const one = [1, 2, 3];
    const two = [4, 5, 6];
    const three = [7, 8, 9];

    const myArray = [];
    let number = 1;

    for (let i = 0; i < one.length; i++) {
      myArray[i] = { [number]: one[i] };
    }
    number++;

    for (let i = 0; i < two.length; i++) {
      myArray[i] = { ...myArray[i], [number]: two[i] };
    }
    number++;

    for (let i = 0; i < three.length; i++) {
      myArray[i] = { ...myArray[i], [number]: three[i] };
    }

    setTables(myArray);
    const myNumbers = [];
    for (let i = 0; i < number; i++) {
      myNumbers.push(i);
    }

    setValues(myNumbers);
  };

  return (
    <div className={classes.loop}>
      <button onClick={onSelectHandler}>Please Click the button</button>
      {tables.map((tb, i) => (
        <div key={i} className={classes.item}>
          <p> My Column </p>

          {values.map((_, index) => (
            <p key={index}> {tb[index + 1]} </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Loop;

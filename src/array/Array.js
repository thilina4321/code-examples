import React, { useState } from "react";

const Array = () => {
  const [arr, setArr] = useState([]);

  const onSelectHandler = () => {
    // methanata for loop ekata oyge number 11 danna == 4 vage
    const anth = [];
    for (let i = 0; i < 4; i++) {
      anth.push(i);
    }
    setArr(anth);
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "80%",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1> Selection </h1>
      <button onClick={onSelectHandler}> Select </button>

      {arr.map((a, i) => (
        <p key={i}> Hello </p>
      ))}
    </div>
  );
};

export default Array;

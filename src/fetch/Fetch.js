import React, { useState } from "react";

const Fetch = () => {
  const [rimId, setRimid] = useState([]);

  const onSelectHandler = () => {
    for (let i = 0; i < 4; i++) {
      const myData = fetchData(i);
      setRimid((p) => [...p, myData.data]);
    }
  };

  // methanin print venava setRimId() eka 9 veni line eke call unama
  console.log(rimId);

  const fetchData = (index) => {
    const arrData = ["pid", "pid2", "pid3", "pid4"];

    return { data: arrData[index] };
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button onClick={onSelectHandler}> Select </button>
    </div>
  );
};

export default Fetch;

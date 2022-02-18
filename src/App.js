import { useEffect, useState } from "react";

const App = () => {
  useEffect(() => {
    fetch(
      "https://qjgw0y2t09.execute-api.us-east-1.amazonaws.com/metadata?index=6317"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  // javascript
  const [names, setNames] = useState([{ name: "saman" }, { name: "kamal" }]);
  const [customName, setcustomName] = useState("");

  const addName = () => {
    setNames((prev) => [...prev, { name: customName }]);
  };

  return (
    <div>
      <div className="section" style={{ display: "flex", margin: "20px" }}>
        <p> Home </p>
        <p> Contact us </p>
        <p> About us </p>
      </div>
      Hello World
      <input
        value={customName}
        onChange={(e) => setcustomName(e.target.value)}
      />
      {names.map((nam, index) => (
        <p key={index}> {nam.name} </p>
      ))}
      <p onClick={addName}> Add Name </p>
    </div>
  );
};

export default App;

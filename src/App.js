import { useState } from "react";

const App = () => {
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

import { useState } from "react";

function App() {
  const [id, setId] = useState("");
  const dropdown = [
    { id: 1, title: "one" },
    { id: 2, title: "two" },
    { id: 3, title: "three" },
    { id: 4, title: "four" },
    { id: 5, title: "five" },
  ];

  const onGetId = (e) => {
    setId(e.target.value);
  };

  return (
    <div>
      <select onChange={onGetId}>
        {dropdown.map((d) => (
          <option key={d.id} value={d.id}>
            {d.title}
          </option>
        ))}
      </select>
      {id && <p> Id : {id} </p>}
    </div>
  );
}

export default App;

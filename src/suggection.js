import { useState } from "react";

function App() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const dropdown = [
    { id: 1, title: "one" },
    { id: 2, title: "two" },
    { id: 3, title: "three" },
    { id: 4, title: "four" },
    { id: 5, title: "five" },
  ];

  const onGetId = (e) => {
    const id = e.target.value;
    setId(id);
    const findItem = dropdown.find((d) => d.id === +id);
    setName(findItem.title);
  };

  return (
  const dropdown = [
    { id: 1, title: "one" },
    { id: 2, title: "two" },
    { id: 3, title: "three" },}
    <div>
      <select onChange={onGetId}>
        {dropdown.map((d) => (
          <option key={d.id} value={d.id}>
            {d.title}
          </option>
        ))}
      </select>
      {id && <p> Id : {id} </p>}
      {name && <p> Name : {name} </p>}
    </div>
  );
}

export default App;

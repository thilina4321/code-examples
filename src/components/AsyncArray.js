import { useState } from "react";

const AsyncArray = () => {
  const [arrayData, setarrayData] = useState([
    { id: 1, name: "name 1" },
    { id: 2, name: "name 2" },
  ]);

  const [arrayData2, setarrayData2] = useState([]);

  const saveDataHandler = async () => {
    try {
      for (const iterator of arrayData) {
        // const body = { name: iterator.name };
        // const data = await fetch({
        //   url: "url_eka",
        //   body: JSON.stringify(body),
        // });
        // const fetchData = await data.json();

        // uba machan methanin request eka ghuvama 
        // ubata ganna one eka aran 
        // eka set krpan
        // palleha code eke one thenata

        setarrayData2((prev) => [...prev, "select Id" + iterator.id]);
      }
    } catch (error) {
      console.log("this is error", error);
    }
  };

  return (
    <div>
      <button onClick={saveDataHandler}> Click Button </button>
      {arrayData2.map((data, index) => (
        <p key={index}>{data}</p>
      ))}
    </div>
  );
};

export default AsyncArray;

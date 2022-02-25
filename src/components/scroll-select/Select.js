import React, { Fragment, useState } from "react";
import classes from "./select.module.css";

const Select = () => {
  const [item, setItem] = useState("");
  const examples = [
    { id: 1, title: `example 1`, description: "description 1" },
    { id: 2, title: `example 2`, description: "description 2" },
    { id: 3, title: `example 3`, description: "description 3" },
    { id: 4, title: `example 4`, description: "description 4" },
    { id: 5, title: `example 5`, description: "description 5" },
  ];
  const onSelectItem = (id) => {
    const seleItm = examples.find((ex) => ex.id === id);
    setItem(seleItm);
  };
  return (
    <Fragment>
      <div className={classes.section}>
        {examples.map((ex) => (
          <h2
            className={classes.item}
            key={ex.id}
            onClick={() => onSelectItem(ex.id)}
          >
            {ex.id} -- {ex.title}
          </h2>
        ))}
      </div>

      <section style={{ width: "60%", margin: "5rem auto" }}>
        {item && (
          <div>
            <p> id : {item.id} </p>
            <p> title : {item.title} </p>
            <p> description : {item.description} </p>
          </div>
        )}
      </section>
    </Fragment>
  );
};

export default Select;

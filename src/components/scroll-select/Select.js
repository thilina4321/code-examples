import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import classes from "./select.module.css";

const examp = [];

  for (let i = 0; i < 30; i++) {
    examp.push({
      id: i,
      title: `example ${i}`,
      description: `description ${i}`,
    });
  }

  // me code kotasa backend eka vidiyata hithapan

  const myBackendCode = (limit, pageNumber)=>{
    // mama data ganna patan ganna thena
    // okkoma data 30k thiye kiyala hithamu
    // limit eka pahaine, palaveni pituva nan one 0 idan 5 venakan 
    const startPoint = (pageNumber - 1) * limit
    // den mama mata ona data gana gannava
    const neededData = []
    for (let i = startPoint; i < array.length; i++) {
      const element = array[i];
      
    }
  }

const Select = () => {
  const [item, setItem] = useState("");
  const [examples, setExamples] = useState([])


  useEffect(()=>{
    // methanadi palaveni parata data load veddi mn data 5k illanava

  }, [])

  
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

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

const myBackendCode = (limit, pageNumber) => {
  // mama data ganna patan ganna thena
  // okkoma data 30k thiye kiyala hithamu
  // limit eka pahaine, palaveni pituva nan one 0 idan 5 venakan
  // (pageNumber - 1) * limit = (1-1) * 5 = 0  <==(starting point)
  // deveni pituvedi -- (2-1) * 5 = 5  <==(starting point)
  const startPoint = (pageNumber - 1) * limit;
  // den mama mata ona data gana gannava
  const neededData = [];
  for (let i = startPoint; i < startPoint + limit; i++) {
    neededData.push(examp[i]);
  }
  // ape limit ekata adavala page kiyak thiyeda balanava
  const pageCount = Math.ceil(examp.length / limit);
  return { data: neededData, pageCount, pageNumber };
};

const Select = () => {
  const [item, setItem] = useState("");
  const [examples, setExamples] = useState([]);
  const [pageNum, setPageNum] = useState(0);
  const [pagination, setPaginations] = useState([]);

  useEffect(() => {
    // methanadi palaveni parata data load veddi mn data 5k illanava
    setPaginations([]);
    const { data, pageCount, pageNumber } = myBackendCode(5, 1);
    setExamples(data);
    setPageNum(pageNumber);
    const pagi = [];
    for (let i = 0; i < pageCount; i++) {
      pagi.push(i + 1);
    }
    setPaginations((prev) => [...pagi]);
  }, []);

  const onSelectItem = (id) => {
    const seleItm = examples.find((ex) => ex.id === id);
    setItem(seleItm);
  };

  const onPaginationHandler = (wantPageNum) => {
    if (pageNum === wantPageNum) {
      return;
    }
    const { data, pageCount, pageNumber } = myBackendCode(5, wantPageNum);
    setExamples(data);
    setPageNum(pageNumber);
    const pagi = [];
    for (let i = 0; i < pageCount; i++) {
      pagi.push(i + 1);
    }
    setPaginations((prev) => [...pagi]);
    setItem('');
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

      <div
        className="pagination"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        {pagination.map((p, i) => (
          <div
            onClick={() => onPaginationHandler(p)}
            style={{
              cursor: "pointer",
            }}
            key={i}
          >
            {p}
          </div>
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

import React, { createContext, useState } from "react";

export const counterContext = createContext({
  count: 0,
  increase: () => {},
  decrease: () => {},
});

const CounterContextProvider = (props) => {
  const [count, setCount] = useState(0);

  const increseHandler = () => {
    setCount(count + 1);
  };
  const decreseHandler = () => {
    setCount(count - 1);
  };

  return (
    <counterContext.Provider
      value={{
        count: count,
        increase: increseHandler,
        decrease: decreseHandler,
      }}
    >
      {props.children}
    </counterContext.Provider>
  );
};

export default CounterContextProvider;

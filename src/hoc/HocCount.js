import React from "react";

const HocCount = (WrapComp) => {
  return () => {
    return (
      <div style={{ color: "red" }}>
        <WrapComp />
      </div>
    );
  };
};

export default HocCount;

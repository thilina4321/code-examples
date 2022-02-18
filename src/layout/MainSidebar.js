import React, { Fragment, useState } from "react";
import { navigation } from "../pages/index";
import classes from "./layout.module.css";
import { NavLink } from "react-router-dom";

const MainSidebar = (props) => {
  const { isSide, setIsSide, isMobile = false } = props;

  const [isShowIndex, setIsShowIndex] = useState(-1);

  const expandSideUnit = (id) => {
    if (isShowIndex === id) {
      setIsShowIndex(-1);
      return;
    }

    setIsShowIndex(id);
  };

  return (
    <Fragment>
      <div className={classes.main_slider}>
        {isMobile && (
          <h3
            style={{ cursor: "pointer", width: "20px" }}
            onClick={() => setIsSide(!isSide)}
          >
            X
          </h3>
        )}
        {navigation.map(({ main, sub = [] }, index) => (
          <div key={index}>
            <p
              className={classes.main_element}
              onClick={() => expandSideUnit(index)}
            >
              {main}
            </p>
            {index === isShowIndex &&
              sub.map(({ name, path }, i) => {
                return (
                  <NavLink
                    onClick={() => setIsSide(false)}
                    className={(isAc) => {
                      return isAc.isActive ? classes.active : classes.inactive;
                    }}
                    key={i}
                    to={path}
                    
                  >
                    <p className={classes.sub_name}> {name} </p>
                  </NavLink>
                );
              })}
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default MainSidebar;

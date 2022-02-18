import React, { Fragment, useState } from "react";
import Mainbar from "./Mainbar";
import classes from "./layout.module.css";
import MainSidebar from "./MainSidebar";

const Layout = (props) => {
  const [isSide, setIsSide] = useState(false);

  return (
    <Fragment>
      <Mainbar isSide={isSide} setIsSide={setIsSide} />
      {isSide && (
        <div className={classes.mobile_sidebar}>
          <MainSidebar isSide={isSide} setIsSide={setIsSide} isMobile={true} />
        </div>
      )}
      <div className={classes.main_layout}>
        <div className={classes.side}>
          <MainSidebar isSide={isSide} setIsSide={setIsSide} />
        </div>
        <div className={classes.content}>
          <div> {props.children} </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;

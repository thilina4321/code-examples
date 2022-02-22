import React, { useState } from "react";
import classes from "./menu.module.css";

const App = () => {
  window.onscroll = () => {
    // main section ganna
    const section = document.querySelectorAll("section");

    // nav item ganna
    const navLinks = document.querySelectorAll("header nav a");
    
    section.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      

      if (top >= offset && top < offset + height) {
        navLinks.forEach((nav) => {
          console.log(nav.classList);
          nav.classList.remove("active");
          document
            .querySelector("header nav a[href*=" + id + "]")
            .classList.add("active");
        });
      }
    });
  };

  return (
    <div>
      <header className={classes.header}>
        <nav>
          <a className="active" href="#home">
            {" "}
            Home{" "}
          </a>
          <a href="#contact"> Contact </a>
          <a href="#navigation"> Navigation </a>
          <a href="#win"> Win </a>
          <a href="#game"> Game </a>
        </nav>
      </header>

      <div style={{ marginTop: "200px" }}></div>

      <section id="home"> Home </section>
      <section id="contact"> Contact </section>
      <section id="navigation"> Navigation </section>
      <section id="win"> Win </section>
      <section id="game"> Game </section>
    </div>
  );
};


export default App;

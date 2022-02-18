import React, { Fragment, useState } from "react";
import "./assets/sass/styles.scss";

const navigation = [
  <a href="#" className="nav__link active">
    <ion-icon name="home-outline" className="nav__icon"></ion-icon>
    <span className="nav__name">Dashboard</span>
  </a>,
  <a href="#" className="nav__link">
    <ion-icon name="chatbubbles-outline" className="nav__icon"></ion-icon>
    <span className="nav__name">Messenger</span>
  </a>,

  <Fragment>
    <ion-icon name="folder-outline" className="nav__icon"></ion-icon>
    <span className="nav__name">Projects</span>

    <ion-icon
      id="a"
      name="chevron-down-outline"
      className="collapse__link"
    ></ion-icon>

    <ul className={"collapse__menu"}>
      <a href="#" className="collapse__sublink">
        Data
      </a>
      <a href="#" className="collapse__sublink">
        Group
      </a>
      <a href="#" className="collapse__sublink">
        Members
      </a>
    </ul>
  </Fragment>,
  <a href="#" className="nav__link">
    <ion-icon name="pie-chart-outline" className="nav__icon"></ion-icon>
    <span className="nav__name">Analytics</span>
  </a>,
  <Fragment>
    <ion-icon name="people-outline" className="nav__icon"></ion-icon>
    <span className="nav__name">Team</span>

    <ion-icon name="chevron-down-outline" className="collapse__link"></ion-icon>

    <ul className="collapse__menu">
      <a href="#" className="collapse__sublink">
        Data
      </a>
      <a href="#" className="collapse__sublink">
        Group
      </a>
      <a href="#" className="collapse__sublink">
        Members
      </a>
    </ul>
  </Fragment>,
];

const Sidebar = () => {
  const [menuShow, setMenuShow] = useState(false);

  const showMenu = () => {
    let navbar = document.getElementById("navbar");
    let bodypadding = document.getElementById("body-pd");

    navbar.classList.toggle("expander");
    bodypadding.classList.toggle("body-pd");
  };

  // select krana eka pata venava
  const linkColor = document.querySelectorAll(".nav__link");
  function colorLink() {
    linkColor.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  }

  linkColor.forEach((l) => l.addEventListener("click", colorLink));
  // select krana eka pata venava end

  const linkCollapse = document.querySelectorAll(".collapse__link");

  // const linkColor = document.querySelectorAll(".nav__link");
  for (let i = 0; i < linkCollapse.length; i++) {
    linkCollapse[i].addEventListener("click", function () {
      const collapseMenu = this.nextElementSibling;
      collapseMenu.classList.toggle("showCollapse");

      const rotate = collapseMenu.previousElementSibling;
      rotate.classList.toggle("rotate");
    });
    // const collapseMenu = this.nextElementSibling;
    // collapseMenu.classList.toggle("showCollapse");

    // const rotate = collapseMenu.previousElementSibling;
    // rotate.classList.toggle("rotate");
  }

  console.log(linkCollapse);

  const onCollapse = () => {
    // setMenuShow(!menuShow)
    const linkCollapsee = document.getElementById("a");

    console.log(linkCollapsee);
    console.log(linkCollapsee.nextElementSibling);
    const collapseMenu = linkCollapsee.nextElementSibling;

    collapseMenu.classList.toggle("showCollapse");

    const rotate = collapseMenu.previousElementSibling;
    rotate.classList.toggle("rotate");
    // console.log(linkColor);

    for (let i = 0; i < linkCollapse.length; i++) {
      const collapseMenu = this.nextElementSibling;
      collapseMenu.classList.toggle("showCollapse");

      const rotate = collapseMenu.previousElementSibling;
      rotate.classList.toggle("rotate");
    }
  };

  return (
    <div id="body-pd">
      <div className="l-navbar" id="navbar">
        <nav className="nav">
          <div>
            <div onClick={showMenu} className="nav__brand">
              <ion-icon
                name="menu-outline"
                className="nav__toggle"
                id="nav-toggle"
              ></ion-icon>
              <a href="#" className="nav__logo" style={{ display: "none" }}>
                Bedimcode
              </a>
            </div>
            <div className="nav__list">
              <a href="#" className="nav__link active">
                <ion-icon name="home-outline" className="nav__icon"></ion-icon>
                <span className="nav__name">Dashboard</span>
              </a>
              <a href="#" className="nav__link">
                <ion-icon
                  name="chatbubbles-outline"
                  className="nav__icon"
                ></ion-icon>
                <span className="nav__name">Messenger</span>
              </a>

              <div onClick={onCollapse} className="nav__link collapse">
                <ion-icon
                  name="folder-outline"
                  className="nav__icon"
                ></ion-icon>
                <span className="nav__name">Projects</span>

                <ion-icon
                  id="a"
                  name="chevron-down-outline"
                  className="collapse__link"
                ></ion-icon>

                <ul className={"collapse__menu"}>
                  <a href="#" className="collapse__sublink">
                    Data
                  </a>
                  <a href="#" className="collapse__sublink">
                    Group
                  </a>
                  <a href="#" className="collapse__sublink">
                    Members
                  </a>
                </ul>
              </div>

              <a href="#" className="nav__link">
                <ion-icon
                  name="pie-chart-outline"
                  className="nav__icon"
                ></ion-icon>
                <span className="nav__name">Analytics</span>
              </a>
              <div onClick={onCollapse} className="nav__link collapse">
                <ion-icon
                  name="people-outline"
                  className="nav__icon"
                ></ion-icon>
                <span className="nav__name">Team</span>

                <ion-icon
                  name="chevron-down-outline"
                  className="collapse__link"
                ></ion-icon>

                <ul className="collapse__menu">
                  <a href="#" className="collapse__sublink">
                    Data
                  </a>
                  <a href="#" className="collapse__sublink">
                    Group
                  </a>
                  <a href="#" className="collapse__sublink">
                    Members
                  </a>
                </ul>
              </div>
              <a href="#" className="nav__link">
                <ion-icon
                  name="settings-outline"
                  className="nav__icon"
                ></ion-icon>
                <span className="nav__name">Settings</span>
              </a>
            </div>
          </div>

          <a href="#" className="nav__link">
            <ion-icon name="log-out-outline" className="nav__icon"></ion-icon>
            <span className="nav__name">Log Out</span>
          </a>
        </nav>
      </div>

      <h1>Componentes</h1>
    </div>
  );
};

export default Sidebar;

import { Fragment } from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <Fragment>
      <footer className={classes.footer}>
        <section className={classes.quicklinks}>
          <h2>Quick Links</h2>
          <p>New Card Application</p>
          <p> Status New Customer</p>
          <p>egistrations Preliminary</p>
        </section>
        <section className={classes.getintouch}>
          <h2>Get In Touch</h2>
          <p> 011 2 488 500 </p>
          <p> infor@infor.lk</p>
          <p>infor.facebook.com</p>
        </section>
        <section className={classes.quickcontact}>
          <h2>Quick Contact</h2>
          <input placeholder="Name" />
          <input placeholder="Email" type="email" />
          <textarea rows={5} placeholder="Message" />
          <h4> Send </h4>
        </section>
      </footer>
    </Fragment>
  );
};

export default Footer;

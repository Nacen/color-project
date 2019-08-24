import React from "react";
import './Footer.css';

const Footer = (props) => {
  const footerClass = props.className ? props.className : "Footer";
  return <footer className={footerClass}>{props.children}</footer>;
};

export default Footer;

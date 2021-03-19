import React from "react";

export default function Footer() {
  return (
    <div id="footer">
      <a
        href="https://github.com/jenstella"
        target="_blank"
        rel="noreferrer"
        style={{
          textDecoration: "none",
          color: "black",
          fontFamily: "Bungee Shade",
          fontSize: "30px",
        }}
      >
        Github
      </a>
      <a
        href="https://www.linkedin.com/in/jennifermartelle/"
        target="_blank"
        rel="noreferrer"
        style={{
          textDecoration: "none",
          color: "black",
          fontFamily: "Bungee Shade",
          fontSize: "30px",
        }}
      >
        Linkedin
      </a>
      <a
        href="tel:8023739851"
        style={{
          textDecoration: "none",
          color: "black",
          fontFamily: "Bungee Shade",
          fontSize: "30px",
        }}
      >
        Phone
      </a>
      <a
        href="mailto:jennifer.stella.martelle@gmail.com"
        target="_blank"
        rel="noreferrer"
        style={{
          textDecoration: "none",
          color: "black",
          fontFamily: "Bungee Shade",
          fontSize: "30px",
        }}
      >
        Email
      </a>
    </div>
  );
}

import React from "react";

export default function Links() {
  return (
    <div>
      <div id="link-container">
        <a
          href="https://github.com/jenstella"
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
    </div>
  );
}

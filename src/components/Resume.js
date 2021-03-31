import React from "react";
import JSResume from "../Images/JSResume.pdf";
import jenMartelleResume from "../Images/jenMartelleResume.png";

let jenResume = jenMartelleResume;

export default function Resume() {
  return (
    <div id="resume">
      <img src={jenResume} alt="resume" height="1000px" />
      <br></br>
      <a href={jenResume} download>
  <img src="../Images/JSResume.pdf" alt="Download a copy of my resume by clicking here" style={{textDecoration: "none"}}/>
</a>
    </div>
  );
}

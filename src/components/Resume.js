import React from "react";
import myresume from "../Images/myresume.png";

let jenResume = myresume;

export default function Resume() {
  return (
    <div id="resume">
      <img src={jenResume} alt="resume" height="1000px" />
      <br></br>
      <a href="../Images/myresume.png" download>
  <img src="../images/myresume.png" alt="Download a copy of my resume by clicking here" style={{textDecoration: "none"}}/>
</a>
{/* get the download link to work */}
    </div>
  );
}

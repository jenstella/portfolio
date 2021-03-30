import React from "react";
import JenStellaResume from "../Images/JenStellaResume.pdf";
import resumepng from "../Images/resumepng.png";

let jenResume = resumepng;

export default function Resume() {
  return (
    <div id="resume">
      <img src={jenResume} alt="resume" height="1000px" />
      <br></br>
      <a href={jenResume} download>
  <img src="../Images/JenStellaResume.pdf" alt="Download a copy of my resume by clicking here" style={{textDecoration: "none"}}/>
</a>
{/* get the download link to work */}
    </div>
  );
}

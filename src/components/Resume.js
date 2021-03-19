import React from "react";
import myresume from "../Images/myresume.png";

let jenResume = myresume;

export default function Resume() {
  return (
    <div id="resume">
      <img src={jenResume} alt="resume" height="1000px" />
    </div>
  );
}

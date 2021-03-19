import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div id="nav">
      <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
        Home
      </Link>
      <Link style={{ textDecoration: "none", color: "black" }} to={"/about"}>
        About
      </Link>
      {/* <Link style={{ textDecoration: "none", color: "black" }} to={"/resume"}>
        Resume
      </Link> */}
      <Link style={{ textDecoration: "none", color: "black" }} to={"/resume"}>
        Resume
      </Link>
      <Link style={{ textDecoration: "none", color: "black" }} to={"/projects"}>
        Projects
      </Link> 
      <Link style={{ textDecoration: "none", color: "black" }} to={"/contact"}>
        Contact
      </Link>
    </div>
  );
}

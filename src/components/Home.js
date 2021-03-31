import React from "react";
// import {Link} from 'react-router-dom'
// import About from './About'

export default function Home() {
  return (
    <div>
      <h1 className="intro">Hello, I'm Jen Stella.</h1>
      <h1 className="subIntro">
        I'm a Full-Stack Software Engineer
      </h1>
      {/* <Link path={'/about'} render={() => {
          return <About />
      }}> */}
      <img
        id="photo-of-me"
        src="https://i.pinimg.com/564x/54/6c/ce/546ccef1e8be5e15e1cfec197d7cb5c5.jpg"
        alt="jen sitting at her laptop"
      ></img>
    </div>
  );
}

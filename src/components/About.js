import React from "react";

export default function About() {
  return (
    <div>
      <h1 id="about-one">&lt;about&gt;</h1>
      <div id="about-container">
        <h3 className="tagline">
          I am a Full Stack Developer with a passion for front end design, and the art
          of functionality to bring it all to life.
        </h3>
        <p>Enter some more information about myself here!</p>
      </div>
      <div id="hobbies-container">
          <h3 className="hobbies-header">Hobbies & Interests</h3>
          <p>I love to travel (when the world is not in a pandemic). I spend as much time as I can outside, with my 2 dogs and my family. We love to snowboard, hike, and hang by a nice river in the summer. 
          </p>
      </div>
      <h1 id="about-two">&lt;/about&gt;</h1>
    </div>
    
  );
}

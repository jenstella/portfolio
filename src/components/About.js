import React from "react";

export default function About() {
  return (
    <div>
      <h1 id="about-one">&lt;about&gt;</h1>
      <div id="about-container">
        <h3 className="tagline">
          Who Am I? <br></br>I am a Full Stack Developer with a passion for
          front end design, and the art of functionality to bring it all to
          life.
        </h3>
        <p>
          Previously working in marketing and social work, I decided to take the
          plunge into the field of web development in Jan 2021. I had been eager
          to make the career pivot and am so glad I finally did. I love creating
          aesthetically pleasing functional web applications through React.
        </p>
        <p>Originally from Connecticut, currently living in Vermont. </p>
      </div>
      <div id="hobbies-container">
        <h3 className="hobbies-header">Hobbies & Interests</h3>
        <p>
          When the world is not in a pandemic, I love to travel. I spend as much
          time as I can outside, with my family and two dogs: Rex (a 13 yr old
          rescue) and Ranger (one year old Border Collie). We love to snowboard,
          hike, go camping, and hang by the river in the summer.
        </p>
        <p>
          I love exploring new places and cultures, and am always excited to
          visit a new museum. Often I can be found lost in a good book with my
          head in the clouds.
        </p>
      </div>
      <h1 id="about-two">&lt;/about&gt;</h1>
    </div>
  );
}

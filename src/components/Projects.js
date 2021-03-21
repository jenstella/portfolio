import React from "react";
// import photos
import geoVermonter from "../Images/geoVermonter.png";
import guess from "../Images/guess.png";
import remock from "../Images/remock.png";
import til from "../Images/til.png";
import ttt from "../Images/ttt.png";
import yelpington from "../Images/yelpington.png";
import zorkington from "../Images/zorkington.png";

export default function Projects() {
  return (
    <div id="projects-container">
      <h1 id="projects-one">&lt;projects&gt;</h1>
      <div id="projects-content">
        <h1 className="proj-title">Today I Learned...</h1>
        <h3>Tech used: React, MongoDB, ExpressJS and Mongoose. This project for Burlington Code Academy acts as an online journal, which allows for editing and deletion of posts. The data is saved on a database, where it can be fetched from and manipulated. </h3>
        <br></br>
        <a
          href="https://salty-caverns-29070.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
          className="external-links"
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "30px",
          }}
        >
          test it out here!
        </a>
        <br></br>
        <a
          href="https://github.com/jenstella/react-journal"
          target="_blank"
          rel="noreferrer"
          className="external-links"
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "30px",
          }}
        >
          github repo
        </a>
        <img src={til} alt="screenshot of today I learned" />
        <hr></hr>

        <h1 className="proj-title">Yelpington</h1>
        <h3>Tech used: ExpressJS, JSON, AJAX, Leaflet Maps and React. Built a server to hold JSON files, which through Javascript were parsed, and displayed on the front end of the webpage. Displayed and manipulated an embedded map with coordinates for different restaurants pinned. Using React, when name of restaurant is clicked or the pin for it is clicked, it brings up that restaurants data from server.</h3>
        <br></br>
        <a
          href="https://github.com/jenstella/yelpington"
          target="_blank"
          rel="noreferrer"
          className="external-links"
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "30px",
          }}
        >
          github repo
        </a>
        <img src={yelpington} alt="screenshot of yelpington" />
        <hr></hr>

        <h1 className="proj-title">Geo-Vermonter</h1>
        <h3>Tech used: React, Leaflet, embedded map API's, geocoding API's. Created a game where when the start button is pressed, a pin is dropped into a random part of the state of Vermont and the map zooms in. </h3>
        <br></br>
        <a
          href="https://github.com/jenstella/geo-vermonter"
          target="_blank"
          rel="noreferrer"
          className="external-links"
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "30px",
          }}
        >
          github repo
        </a>
        <br></br>
        <img src={geoVermonter} alt="screenshot of geovermonter" />
        <hr></hr>

        <h1 className="proj-title">Tic Tac Toe</h1>
        <h3>project description</h3>
        <br></br>
        <a
          href="https://github.com/jenstella/tic-tac-toe"
          target="_blank"
          rel="noreferrer"
          className="external-links"
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "30px",
          }}
        >
          github repo
        </a>
        <br></br>
        <img src={ttt} alt="screenshot of tic tac toe" />
        <hr></hr>

        <h1 className="proj-title">Remock</h1>
        <h3>project description</h3>
        <br></br>
        <a
          href="https://github.com/jenstella/remock-blog"
          target="_blank"
          rel="noreferrer"
          className="external-links"
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "30px",
          }}
        >
          github repo
        </a>
        <br></br>
        <img src={remock} alt="screenshot of remock" />
        <hr></hr>

        <h1 className="proj-title">Zorkington</h1>
        <h3>project description</h3>
        <br></br>
        <a
          href="https://github.com/jenstella/zorkington"
          target="_blank"
          rel="noreferrer"
          className="external-links"
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "30px",
          }}
        >
          github repo
        </a>
        <br></br>
        <img src={zorkington} alt="screenshot of zorkington" />
        <hr></hr>

        <h1 className="proj-title">Guess The Number</h1>
        <h3>project description</h3>
        <br></br>
        <a
          href="https://github.com/jenstella/guess-the-number"
          target="_blank"
          rel="noreferrer"
          className="external-links"
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "30px",
          }}
        >
          github repo
        </a>
        <br></br>
        <img src={guess} alt="screenshot of guess the number" />
      </div>

      <h1 id="projects-two">&lt;/projects&gt;</h1>
    </div>
  );
}

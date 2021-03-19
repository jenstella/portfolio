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
        <h3>project description</h3>
        <br></br>
        <a
          href="https://github.com/jenstella/react-journal"
          target="_blank"
          rel="noreferrer"
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
        <h3>project description</h3>
        <br></br>
        <a
          href="https://github.com/jenstella/yelpington"
          target="_blank"
          rel="noreferrer"
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
        <h3>project description</h3>
        <br></br>
        <a
          href="https://github.com/jenstella/geo-vermonter"
          target="_blank"
          rel="noreferrer"
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

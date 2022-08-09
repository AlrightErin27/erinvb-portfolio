import React from "react";
import Logo from "../Images/logo.png";

function Home() {
  return (
    <div className="Home">
      {/* HEADER */}
      <div className="H-header">
        Welcome to <p id="H-header-p">Erin Van Brunt's</p> Portfolio
      </div>

      {/* ABOUT */}
      <div id="H-about">
        Capstone Project for Flatiron's Full Stack Software Engineering Program
      </div>

      {/* LOWER PAGE */}
      <div className="H-lowerPg">
        <div id="H-logo-container">
          <img
            src={Logo}
            alt="Erin's Logo"
            className="rotate linear infinite"
            id="H-logo"
          />
        </div>

        <ul>
          <label id="H-list-title"> APP created with:</label>
          <br />
          <li>React | </li>
          <li>Ruby on Rails | </li>
          <li>Javascript | </li>
          <li>RESTful Routes | </li>
          <li>CSS | </li>
          <li>React Router Dom | </li>
          <li>HTML | </li>
          <li>JSX | </li>
          <li>JSON API | </li>
          <li>Bcrypt Authorization | </li>
          <li>MVC Architecture | </li>
          <li>Redux | </li>
          <li>PostgresSQL DataBase | </li>
          <li>Validations | </li>
          <li>Heroku Deployment | </li>
          <li>Github | </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;

import { NavLink, Link } from "react-router-dom";
import Cone from "../Images/cone.png";

function Projects() {
  return (
    <div>
      <div className="pro-con">
        <img src={Cone} alt="cone" className="cone" />
        <h1>Currently Under Construction</h1>
        <img src={Cone} alt="cone" className="cone" />
      </div>
      Projects:
      <>
        <a href="https://castles-fi.herokuapp.com/login">The Castle Shop</a>
        (Login: "Bárðr", ps: "2BorNot2B")
      </>
      <br />
      <>
        <Link to="/tictactoe" style={{ textDecoration: "none" }}>
          Tic Tac Toe
        </Link>
      </>
      <br />
      <>
        <Link to="/tetris" style={{ textDecoration: "none" }}>
          Tetris
        </Link>
      </>
    </div>
  );
}

export default Projects;

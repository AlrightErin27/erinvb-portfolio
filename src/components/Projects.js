import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="projects">
      <h1>Projects:</h1>
      <a href="https://castles-fi.herokuapp.com/login" className="project-btn">
        The Castle Shop
        <p>(Login: "Bárðr", ps: "2BorNot2B")</p>
      </a>

      <br />
      <>
        <Link to="/tictactoe" style={{ textDecoration: "none" }}>
          <button className="project-btn">Tic Tac Toe</button>
        </Link>
      </>
      <br />
      <>
        <Link to="/tetris" style={{ textDecoration: "none" }}>
          <button className="project-btn">Tetris</button>
        </Link>
      </>
    </div>
  );
}

export default Projects;

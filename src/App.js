// import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import TicTacToe from "./components/Games/TicTacToe/TicTacToe";
import Tetris from "./components/Games/Tetris/Tetris";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/resume">
            <Resume />
          </Route>

          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/tictactoe">
            <TicTacToe />
          </Route>

          <Route path="/tetris">
            <Tetris />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

import { useState } from "react";
import Logo from "../Images/logo.png";
import forest from "../Images/forestint.jpg";

function Home() {
  // Invert logo
  const [invert, setInvert] = useState(true);

  function invertLogo() {
    setInvert(!invert);
  }

  return (
    <div className="Home">
      <div id="forest-container">
        <img src={forest} alt="forest" id="background-forest" />
      </div>
      {/* HEADER */}
      <div className="H-header">
        Welcome to <p id="H-header-p">Erin Van Brunt's</p> Portfolio
      </div>

      {/* ABOUT */}
      <div id="H-about">
        Software engineering graduate with an emphasis on front-end user design.
        Titled a "unicorn" based on knowledge to full-stack applications,
        javascript logic & an artist eye. Dedicated to creating user friendly,
        sleek, streamline products.
      </div>

      {/* LOWER PAGE */}
      <div className="H-lowerPg">
        <div id="H-logo-container">
          {invert ? (
            <img
              onClick={invertLogo}
              src={Logo}
              alt="Erin's Logo"
              className="rotate linear infinite"
              id="H-logo"
            />
          ) : (
            <img
              onClick={invertLogo}
              src={Logo}
              alt="Erin's Logo"
              className="rotate linear infinite"
              id="H-logo-invert"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;

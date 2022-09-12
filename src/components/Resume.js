import resumePDF from "../Images/ResumeErinVanBrunt.pdf";
import downloadIcon from "../Images/dl.webp";
import linkedIcon from "../Images/linkedin.png";
import githubIcon from "../Images/github.png";
import logo from "../Images/logo.png";

function Resume() {
  return (
    <>
      <div className="resume-page">
        <div className="resume">
          <div className="r-fixed">
            <img src={logo} alt="erinslogo" id="r-logo" />
            <a href={resumePDF} download className="r-download">
              <img
                src={downloadIcon}
                alt="download icon"
                className="r-download-icon"
              />
              RESUME PDF
            </a>
          </div>
          <div className="r-top">
            {/*~~~~~~~~~~~~~~~~~~~~ HEADER ~~~~~~~~~~~~~~~~~~~~ */}
            <p className="r-name">Erin Van Brunt</p>
            <p id="r-job-title"> Front-end Software Engineer</p>
            <br /> Eugene, OR • (541) 543-4781 • erinmontybruce@gmail.com <br />
            <a
              href="https://www.linkedin.com/in/erin-van-brunt/"
              className="r-link"
            >
              <img
                src={linkedIcon}
                alt="www.linkedin.com/in/erin-van-brunt/"
                className="r-linkedin-icon"
              />
              Linked In
            </a>
            <a href="https://github.com/AlrightErin27" className="r-link">
              <img
                src={githubIcon}
                alt="www.linkedin.com/in/erin-van-brunt/"
                className="r-github-icon"
              />
              github.com/AlrightErin27
            </a>
          </div>
          {/*~~~~~~~~~~~~~~~~~~~~ SKILLS ~~~~~~~~~~~~~~~~~~~~ */}
          <p className="r-header">Skills</p>
          <p className="r-skills">
            Full-stack, Javascript, Ruby, Rails, Python, HTML5, CSS3, API,
            RESTful Routing, MVC Framework, JSON, React.js, Axios, Fetch, Active
            Record, Sinatra, VScode, MongoDB, Structured Query Language,
            PostgresSQL, B-crypt, Authorization, Node.js, Next.js, Heroku,
            Netlify, Git/Github, User Interface Design, Operational Analysis,
            Database Management, MacOS, Windows, Visual Studio Code
          </p>
          {/*~~~~~~~~~~~~~~~~~~ PROJECTS ~~~~~~~~~~~~~~~~~~ */}
          <p className="r-header">Projects</p>
          {/* PROJECT 1 */}
          <a href="https://castles-fi.herokuapp.com/login">The Castle Shop</a>
          <a href="https://github.com/AlrightErin27/castlesFI">Github</a>
          <a href="https://vimeo.com/741486139">Video Walk Through</a>
          <p>
            Ruby on Rails, JS, React, HTML, CSS, Gemfile, Node.js, Sinatra,
            Postgres SQL, MVC Framework, Fetch
          </p>
          <p>
            • Manufactured table associations with foreign keys that involved
            many-to-many relations & one-to-many relationships. <br />•
            Fabricated migrations, seeds, database calls, & tables in rake
            console terminal. <br />• Fetched data from back-end Ruby / sqlDB
            app to a front-end React.js app kept in a second repository. <br />•
            Operated JSON Web Tokens & B-crypt authenticate to safely store
            user's data. <br />• Invented class & instance methods that endures
            a session to keep user's collection. <br />• Coordinated &
            controlled all Github merges & merge conflicts. This produced code
            that was highly legible for all 3 students in the project. Used
            scrum project management. <br />• Orchestrated product management,
            through agile software development & innovation, what the group
            members should focus on, & maintained efficiency.
          </p>
          {/* PROJECT 2 */}
          <a href="https://erin-van-brunt-portfolio.herokuapp.com/tictactoe">
            Tic Tac Toe
          </a>
          <a href="https://github.com/AlrightErin27/erinvb-portfolio/tree/main/src/components/Games/TicTacToe">
            Github
          </a>
          <a href="https://player.vimeo.com/video/741487103">
            Video Walk Through
          </a>
          <p>Javascript Logic, HTML, CSS, React, JSX</p>
          <p>
            • Designed & engineered a fully front-end game with innovative
            styling. <br />• Lifted state to track user's place in game & save
            user's winnings in a way that the data persists in a SQL database.{" "}
            <br />• Utilized React's useState & useEffect to control game state.{" "}
            <br />• Built links & page state using React-Router-Dom &
            useHistory.
          </p>
          {/* PROJECT 3 */}
          <a href="https://erin-van-brunt-portfolio.herokuapp.com/tetris">
            Jungle Tetris
          </a>
          <a href="https://github.com/AlrightErin27/erinvb-portfolio/tree/main/src/components/Games/Tetris">
            Github
          </a>
          <a href="https://player.vimeo.com/video/741488052">
            Video Walk Through
          </a>
          <a href="https://player.vimeo.com/video/741488275">
            Code Video Walk Through
          </a>
          <p>React, Javascript, HTML, CSS, Custom React Hooks, Game State</p>
          <p>
            • Created a single player, multi-level game that uses keyboard input
            to move tetrominoes across the board.
            <br />• Constructed custome hooks, CSS animations, shared props,
            controllers, useCallback, looped through cells to create grids, &
            useInterval, dynamic rendering to accomplish unique challenges
            within the game.
          </p>
          {/*~~~~~~~~~~~~~~~~~~ EXPERIENCE ~~~~~~~~~~~~~~~~~~ */}
          <p className="r-header">Professional Experience</p>
          {/*++++++ RESTAURANTS ++++++ */}
          <p className="r-subheader">Restaurant Manager (2014-2020) </p>
          <p className="r-edu-local">
            Alamo Draft-house, San Antonio, TX | Persephone, Aptos, CA |
            Mazzi's, Eugene, OR
          </p>
          <p className="r-text">
            • Led the front of house team of 20 employees, practicing
            open-mindedness & teamwork in my leadership role. <br />
            • Responsible for training, organizing, supervising & evaluating
            staff, enabling them to maintain excellent customer experience &
            keep the restaurant running smoothly. <br />
            • Handled writing schedules, updating social media, completing
            weekly stocking product orders & staying up to date on book keeping,
            by strategic thinking, in order to certify the restaurant was in
            working order, correctly advertised & was financially successful.
            <br />
            •Hiring staff that had the correct certifications & knowledge of the
            competitive trade, bringing a level of professionalism, inspiration
            & dependability to the environment.
          </p>
          {/*++++++ MASK DESIGN ++++++ */}
          <p className="r-subheader">Layout Engineer (2011-2015)</p>
          <p className="r-edu-local">Analog Devices, San Jose, CA</p>
          <p className="r-text">
            • Yielded analog & digital mask designs for integrated circuits in
            mobile phones. <br />
            • Being very passion filled & detail oriented, I worked closely with
            employees from all departments to ensure we came out with the best
            product. <br />
            • Creating &/ or refining, a high quality product that brought costs
            down, ran functionally & established the math, product & layouts
            were dry & concise. <br />
            • Learned critical thinking, attention to detail, adaptability, a
            strong work ethic, effective communication & organization. <br />•
            Ability to develop and iterate on ideas/concepts through creativity
            in problem solving and the ability to think outside of established
            solutions.
          </p>
          {/*~~~~~~~~~~~~~~~~~~~ EDUCATION ~~~~~~~~~~~~~~~~~~ */}
          <p className="r-header">Education</p>
          {/*++++++ FLAT IRON ++++++ */}
          <p className="r-subheader">
            Flat Iron, Denver, CO: Full-stack Software Engineering Live 2022
          </p>
          <p className="r-text">
            Being a software engineer requires more than knowing how to code or
            build a web application. This program teaches you to learn to think,
            and build, like software engineers — from developing coding
            proficiency to gaining an understanding of how products are designed
            and managed. Students develop key skills through interactive labs,
            lectures, and close collaboration, showcasing progress through
            Portfolio Projects. While the bulk of the material covered
            encompasses the Ruby and JavaScript ecosystems, we carefully
            designed our curriculum to prepare students to launch software
            engineering careers, independent of any specific language or
            technology.
          </p>
          {/*++++++ GENERAL ASSEMBLY ++++++ */}
          <p className="r-subheader">
            General Assembly, SEA, WA: Software Engineering Immersive 2021
          </p>
          <p className="r-text">
            Full-stack software engineering immersive student in an intensive,
            twelve-week, 450+ hour program focused on product development
            fundamentals, object-oriented programming, MVC frameworks, data
            modeling, & team collaboration strategies. Developed a portfolio of
            individual & group projects.
          </p>
          {/*++++++ ADDICTION EDUCATION ++++++ */}
          <p className="r-subheader">
            Silicon Design Institute, Santa Clara, CA: Mask Design / Layout
            Engineer
          </p>
          <p className="r-subheader">
            2011-2013 P.C.C., Portland, OR: Art / Math Major 2009-2011
          </p>
          <p className="r-subheader">
            Cabrillo College, Aptos, CA : Art History Major 2007-2009
          </p>
          <p className="r-subheader">
            Harbor High School, Santa Cruz, CA: Class of 2007
          </p>
        </div>
      </div>
    </>
  );
}

export default Resume;

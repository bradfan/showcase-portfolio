import React from "react";
import face from "./images/face.jpeg";
import lake from "./images/lake.JPG";
import mountain from "./images/mountain.jpg";

function Header() {
  return (
    <div className="header-primary">
      <div class="container">
        <div class="collage">
          <img src={lake} alt="Lake" class="collage_photo collage_photo--p1" />
          <img
            src={mountain}
            alt="Mountain"
            class="collage_photo collage_photo--p2"
          />
        </div>
      </div>

      <div className="my-name">
        <strong>
          <h2>Brad Tomlinson</h2>
        </strong>
      </div>
      <div class="pic-box">
        <img class="pic" src={face} alt="Brad Tomlinson" />
      </div>
      <nav className="nav-primary">
        <ul>
          <strong>
            <a href="mailto:brt.jst@gmail.com">
              <li>brt.jst@gmail.com</li>
            </a>
          </strong>
          {/* <strong>
              <a href="tel:520-304-2384">
                <li style={lineStyle}>Phone: 520-304-2384</li>
              </a>
            </strong> */}
          <strong>
            <a
              href="https://www.linkedin.com/in/brad-tomlinson-90210/"
              target="blank"
            >
              <li>LinkedIn</li>
            </a>
          </strong>
          <strong>
            <a href="https://github.com/bradfan" target="blank">
              <li>Github</li>
            </a>
          </strong>
          <strong>
            <a
              href="https://1drv.ms/u/s!Akf67WBgSDkQi3TO9FYsKntpsDFF?e=LG3LZa"
              target="blank"
            >
              <li>Resume</li>
            </a>
          </strong>
        </ul>
      </nav>
      <div class="header-info">
      <div class="header-secondary">
        <strong>
          <h5>
            I am a web developer who is leveraging a multi-faceted background to
            provide unique perspectives on how end-users interact with web
            applications. I am an innovative problem-solver who is passionate
            about personal growth and web development.
          </h5>
        </strong>
      {/* </div>
      <div class="header-secondary"> */}
        <strong>
          <h5>
            Click on the links above to email me, see my LinkedIn and Github
            profiles or view and print my resume!
          </h5>
        </strong>
      </div>
      </div>
      
    </div>
  );
}

export default Header;

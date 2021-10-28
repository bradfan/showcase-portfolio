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
          <h1>Brad Tomlinson</h1>
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
              href="https://drive.google.com/file/d/1ygd_FFeDK1f1M9kAhltrEYXJ4GWfHpjM/view?usp=sharing"
              target="blank"
            >
              <li>Resume</li>
            </a>
          </strong>
        </ul>
      </nav>

      <div class="header-secondary">
        <strong>
          <h5>
           Click on the links above to email me, see my LinkedIn and Github profiles or view and print my resume!
          </h5>
        </strong>
      </div>
    </div>
  );
}

export default Header;

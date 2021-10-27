import React from "react";
import face from "./images/face.jpeg";


function Header() {
  return (
    <div className="header-primary">
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

      <div className="my-name">
        <strong>
          <h1>Brad Tomlinson</h1>
        </strong>
      </div>
      <div class="pic-box">
        <img class="pic" src={face} alt="Brad Tomlinson" />
      </div>

      <div class="header-secondary">
        <strong>
          <h5>
            My current email address is found at the top of the page which you
            may click on to Contact Me directly. You will also find links to my
            LinkedIn and Github profiles as well as view and print a copy of My
            Resume!
          </h5>
        </strong>
      </div>
    </div>
  );
}

export default Header;

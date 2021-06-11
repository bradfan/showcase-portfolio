import React from "react";
import background from "./images/header.jpg";
import face from "./images/face.jpeg";

const styles = {
  fontFamily: "Roboto, Times New Roman, Times, serif",
  boxSizing: "border-box",
  backgroundImage: `url(${background})`,
};
const lineStyle = {
  listStyleType: "none",
  display: "inline-block",
  marginLeft: "8%",
  marginRight: "5%",
  marginTop: "2%",
  marginBottom: "2%",
  fontWeight: "600",
  fontSize: "1rem",
};

const name = {
  float: "right",
  marginRight: "40%",
  fontWeight: "600",
  fontSize: "10rem",
};

const pic = {
  width: "300px",
  height: "300px",
  border: "3px solid black",
  borderRadius: "10px",
  marginLeft: "40%",
};

function Header() {
  return (
    <body style={styles}>
      <div>
        <nav>
          <ul>
            <strong>
              <a href="mailto:brt.jst@gmail.com">
                <li style={lineStyle}>Email</li>
              </a>
            </strong>
            <strong>
              <a href="tel:520-304-2384">
                <li style={lineStyle}>Phone: 520-304-2384</li>
              </a>
            </strong>
            <strong>
              <a
                href="https://www.linkedin.com/in/brad-tomlinson-90210/"
                target="blank"
              >
                <li style={lineStyle}>LinkedIn</li>
              </a>
            </strong>
            <strong>
              <a href="https://github.com/bradfan" target="blank">
                <li style={lineStyle}>Github</li>
              </a>
            </strong>
            <strong>
              <a
                href="https://drive.google.com/file/d/1ygd_FFeDK1f1M9kAhltrEYXJ4GWfHpjM/view?usp=sharing"
                target="blank"
              >
                <li style={lineStyle}>My Resume</li>
              </a>
            </strong>
          </ul>
        </nav>
      </div>
      <div style={name} class="my_name ">
        <strong>
          <h1>Brad Tomlinson</h1>
        </strong>
      </div>
      <img src={face} style={pic} alt="Brad Tomlinson" />
      <div style={{ textAlign: "center" }}>
        <strong>
          <h5
            style={{ marginLeft: "20%", marginRight: "20%", fontWeight: "600" }}
          >
            My Contact Information is found at the top and bottom of the page
            which you may click on to Contact Me directly. You will also find
            links to my LinkedIn and Github profiles as well as view and print a
            copy of My Resume as well!
          </h5>
        </strong>
        <strong>
          <h5 style={{ fontWeight: "600" }}>
            Click on the "About Me" button below to learn more.
          </h5>
        </strong>
      </div>
    </body>
  );
}

export default Header;

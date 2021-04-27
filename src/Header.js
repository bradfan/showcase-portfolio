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
  marginLeft: "120px",
  marginRight: "120px",
  marginTop: "40px",
  marginBottom: "40px",
};

const name = {
  float: "right",
  marginRight: "10%",
  fontWeight: "600",
  fontSize: "10rem",
};

const pic = {
  width: "300px",
  height: "300px",
  border: "3px solid black",
  borderRadius: "10px",
  marginLeft: "5%",
};

function Header() {
  return (
    <div style={styles}>
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
              href="https://drive.google.com/file/d/1XUXm46d8D-63uvcl7VKwCBYiSriAjOza/view?usp=sharing"
              target="blank"
            >
              <li style={lineStyle}>My Resume</li>
            </a>
          </strong>
        </ul>
      </nav>

      <div style={name} class="my_name ">
        <strong>
          <h1>Brad Tomlinson</h1>
        </strong>
      </div>
      <img src={face} style={pic} alt="Brad Tomlinson" />
    </div>
  );
}

export default Header;

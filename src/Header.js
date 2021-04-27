import React from "react";
import background from "./images/hero.jpg";
// import face from "./images/face.jpeg";

const styles = {
  fontFamily: "Roboto, Times New Roman, Times, serif",
  boxSizing: "border-box",
  backgroundImage: `url(${background})`,
};
const lineStyle = {
  listStyleType: "none",
  display: "inline-block",
  margin: "40px",
};


const name = {
  float: "left",
  marginLeft: "20px",
};

const pic = {
  // personalImage: `url(${face})`
  // float: "right",
  // marginRight: "20px",
};

function Header() {
  return (
    <div style={styles}>
      <nav>
        <ul>
          <a href="mailto:brt.jst@gmail.com">
            <li style={lineStyle}>Email</li>
          </a>
          <a href="tel:520-304-2384">
            <li style={lineStyle}>Phone: 520-304-2384</li>
          </a>
          <a
            href="https://www.linkedin.com/in/brad-tomlinson-90210/"
            target="blank"
          >
            <li style={lineStyle}>LinkedIn</li>
          </a>
          <a href="https://github.com/bradfan" target="blank">
            <li style={lineStyle}>Github</li>
          </a>
          <a
            href="https://drive.google.com/file/d/1XUXm46d8D-63uvcl7VKwCBYiSriAjOza/view?usp=sharing"
            target="blank"
          >
            <li style={lineStyle}>Resume</li>
          </a>
        </ul>
      </nav>

      <div style={name} class="my_name ">
        Brad Tomlinson
      </div>
      <img alt="Brad Tomlinson"/>
    </div>
  );
}

export default Header;

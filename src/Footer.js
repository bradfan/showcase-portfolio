import React from "react";

const styles = {
  textAlign: "center",
  width: "100%",
  backgroundColor: "#FFDEAD",
};
const lineStyle = {
  listStyleType: "none",
  display: "inline-block",
  margin: "40px",
  color: "black",
};

function Footer() {
  return (
    <div style={styles}>
      <nav>
        <ul>
          <li style={lineStyle}>
            <a href="mailto:brt.jst@gmail.com">Email</a>
          </li>
          <li style={lineStyle}>
            <a href="tel:520-304-2384">Phone: 520-304-2384</a>
          </li>
          <li style={lineStyle}>
            <a
              href="https://www.linkedin.com/in/brad-tomlinson-90210/"
              target="blank"
            >
              LinkedIn
            </a>
          </li>
          <li style={lineStyle}>
            <a href="https://github.com/bradfan" target="blank">
              Github
            </a>
          </li>
          <li style={lineStyle}>
            <a
              href="https://drive.google.com/file/d/1XUXm46d8D-63uvcl7VKwCBYiSriAjOza/view?usp=sharing"
              target="blank"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Footer;

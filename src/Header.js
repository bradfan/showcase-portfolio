import React from "react";
import background from "./images/header.jpg";
import face from "./images/face.jpeg";

const styles = {
  fontFamily: "Roboto, Times New Roman, Times, serif",
  // boxSizing: "border-box",
  width: "100%",
  minHeight: "100vh",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${background})`,
  // backgroundAttachment: "fixed",
  // padding: "30px",
};
const navLinks = {
  display: "flex",
  justifyContent: "flex-end",
  // margin: "0 auto",
};
const lineStyle = {
  listStyleType: "none",
  display: "inline-block",
  marginTop: "2%",
  margin: "10px",
  fontWeight: "400",
  fontSize: "1.2rem",
  color: "black",
};

const name = {
  margin: "0 auto",
  textAlign: "center",
  fontWeight: "600",
  fontSize: "10rem",
};

const pic = {
  width: "300px",
  height: "300px",
  border: "3px solid black",
  borderRadius: "10px",
  margin: "0 auto",
  display: "block",
};

function Header() {
  return (
    <div style={styles}>
      <div>
        <nav>
          <ul style={navLinks}>
            <strong>
              <a href="mailto:brt.jst@gmail.com">
                <li style={lineStyle}>brt.jst@gmail.com</li>
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
                <li style={lineStyle}>Resume</li>
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
            style={{
              marginLeft: "20%",
              marginRight: "20%",
              fontWeight: "600",
              padding: "20px",
            }}
          >
            My current email address is found at the top of the page which you
            may click on to Contact Me directly. You will also find links to my
            LinkedIn and Github profiles as well as view and print a copy of My
            Resume!
          </h5>
        </strong>
        <strong>
          <h5 style={{ fontWeight: "600" }}>
            Click on the "About Me" button below to learn more.
          </h5>
        </strong>
      </div>
    </div>
  );
}

export default Header;

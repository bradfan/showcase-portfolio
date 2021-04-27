import React from "react";

const styles = {
    backgroundColor: "#FAEBD7",
    fontFamily: "Roboto, Times New Roman, Times, serif",
    textAlign: "center",

};

function Section() {
  return (
    <div style={styles}>
      <strong><h5 style = {{marginLeft: "20%", marginRight: "20%", fontWeight: "600",}}>
        Please take some time to explore some of my projects listed below. My
        Contact Information is found at the top and bottom of the page which
        you may click on to Contact Me directly. You will also find links to my
        LinkedIn and Github profiles as well as view and print a copy of My Resume
        as well!
      </h5></strong>
    <strong><h5 style={{fontWeight: "600",}}>Learn more about me <strong><a href="https://github.com/bradfan" target="blank">HERE!!</a></strong> </h5></strong>
    </div>
  );
}

export default Section;

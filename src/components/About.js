import React from "react";

const styles = {
  fontFamily: "Roboto, Times New Roman, Times, serif",
  textAlign: "center",
  backgroundColor: "#FAEBD7",
};
const lineStyle = {};

function About() {
  return (
    <div style={styles}>
      <h1>About Brad Tomlinson</h1>
      <p>
        I have a wealth of attributes which I have earned through a lifetime of
        experiences; my work history and my accomplishments can all be
        referenced on my resume. What my resume does not tell you is who I am
        and what I believe in. I was raised in Arizona and while I have lived in
        other areas, I choose to live here because it is where I belong. Whether
        my wife and I are hiking the Grand Canyon or camping in this great
        State's mountains we feel at home.
      </p>
      <p>
        Likewise, I feel at home either learning the latest in web technologies
        or playing music with my friends, or working on my Jeep. No matter what
        I set my mind to, no job is too small and no task is insignificant.
      </p>
    </div>
  );
}

export default About;

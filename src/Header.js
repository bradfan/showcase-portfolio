import React from "react";
import background from "./images/hero.jpg";
//  import personal from "./images/personal.png";

const styles = {
  fontFamily: "Roboto, Times New Roman, Times, serif",
  boxSizing: "border-box",
  backgroundImage: `url(${background})`,
  
};
// const photo = {
//   personal: `url(${personal})`,
// }

function Header() {
  return (
    <div style= {styles}>
      <div class="my_name ">Brad Tomlinson</div>
      <img src= "./images/personal.png" alt="Brad Tomlinson" />
    </div>
  );
}

export default Header;

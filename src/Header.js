import React from 'react'
import background from "./images/hero.jpg";

const styles = {

    fontFamily: "Roboto, Times New Roman, Times, serif",
    boxSizing: "border-box",
    backgroundImage: `url(${background})`

}

function Header() {
    return (
        <div>
            <div class="my_name ">Brad Tomlinson</div>
      <img src=".\images\personal.png" alt="image of Brad Tomlinson"/> 
            
        </div>
    )
}

export default Header

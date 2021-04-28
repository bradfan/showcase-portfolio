import React from 'react'
import newBackground from "images/serene.jpg";

const styles = {
    fontFamily: "Roboto, Times New Roman, Times, serif",
    backgroundImage: `url(${newBackground})`,
    textAlign: "center",

}

function About() {
    return (
        <div style={styles}>
             <h1>About Brad Tomlinson</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipis
        
      </p>
            
        </div>
    )
}

export default About

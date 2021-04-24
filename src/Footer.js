import React from 'react'

const styles = {

    textAlign: "center",
    justifyContent: "space-between",
    backgroundColor: " ",
}

function Footer() {
    return (
        <div>
            <nav> 
         <ul>
           <a href="mailto:brt.jst@gmail.com"><li>Email</li></a>
            <a href="tel:520-304-2384"><li>Phone: 520-304-2384</li></a>
            <a href="https://www.linkedin.com/in/brad-tomlinson-90210/" target="blank"><li>LinkedIn</li></a>
            <a href="https://github.com/bradfan" target="blank"><li>Github</li></a>
            <a href="https://drive.google.com/file/d/1XUXm46d8D-63uvcl7VKwCBYiSriAjOza/view?usp=sharing" target="blank"><li>Resume</li></a>
         </ul>
      </nav> 
            
        </div>
    )
}

export default Footer

import React from "react";

const styles = {
  display: "flex",
  flexDirection: "row",
  float: "left",
  width: "50%",
  padding: "0 10px",
  border: "3px solid black",
  borderRadius: "10px",
  
};

function Card(props) {
  return (
    <div>

      <div style={styles} className="card">
        <div className="img-container">
          <img  src={props.image} alt={props.name} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name: {props.name}</strong>
            </li>
            <li>
              <strong><a href={props.github} target="_blank" >Click Here for Github Repo Link</a></strong>  
            </li>
            <li>
            <strong><a href={props.deployed} target="_blank" >Click Here for the Deployed Application</a></strong> 
              
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Card;

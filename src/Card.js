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
              <strong>Name:</strong> {props.name}
            </li>
            <li>
              <strong>Github Repo Link:</strong> {props.github}
            </li>
            <li>
              <strong>Deployed Link:</strong> {props.deployed}
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Card;

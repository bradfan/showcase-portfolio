import React from "react";

const styles = {
    // display: "flex",
    // flexDirection: "row",
    // float: "left",
    // width: "33%",
    padding: "0 10px",
    border: "3px solid black",
    borderRadius: "10px",
    
  };

function Card() {
  return (
    <div>

      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
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
  );
}

export default Card;

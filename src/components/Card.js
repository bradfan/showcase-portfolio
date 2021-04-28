import React from "react";

const styles = {
  display: "flex",
  flexDirection: "row",
  float: "left",
  width: "50%",
  padding: "0 10px",
  border: "3px solid black",
  borderRadius: "10px",
  backgroundColor: "#FAEBD7",
};
const lineStyle = {
  listStyleType: "none",
};

function Card({ props }) {
  return (
    <div>
      <div style={styles} className="card">
        <div className="img-container">
          <img
            style={{
              width: "200px",
              height: "200px",
              border: "1px solid black",
              borderRadius: "10px",
            }}
            src={props.image}
            alt={props.name}
          />
        </div>
        <div className="content">
          <ul>
            <li style={lineStyle}>
              <strong>Name: {props.name}</strong>
            </li>
            <li style={lineStyle}>
              <strong>Description: {props.description}</strong>
            </li>
            <li style={lineStyle}>
              <strong>
                <a href={props.github} target="_blank">
                  Click Here to view the Github Repo
                </a>
              </strong>
            </li>
            <li style={lineStyle}>
              <strong>
                <a href={props.deployed} target="_blank">
                  Click Here to Deploy the Application
                </a>
              </strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;

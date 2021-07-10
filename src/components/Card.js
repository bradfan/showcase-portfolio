import React from "react";
import { useMediaQuery } from "react-responsive";

const screenWidth = 1;
const cardWidth = screenWidth < 1100 ? "95%" : "45%";

const styles = {
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  width: cardWidth,
  margin: "2%",
  padding: ".5%",
  minWidth: "300px",
  border: "3px solid black",
  borderRadius: "10px",
  backgroundColor: "#FAEBD7",
};
const lineStyle = {
  listStyleType: "none",
   textAlign: "center",
  color: "black",
};
const textStyle = {
  width: "calc(100% - 200px)",
 
  margin: "0 auto",
};

function Card({ props }) {
  return (
    <div>
      <div style={styles} className="card">
        <div className="img-container">
          <p style={lineStyle}>
            <strong>Name: {props.name}</strong>
          </p>
          <img
            style={{
              width: "200px",
              height: "200px",
              border: "1px solid black",
              borderRadius: "10px",
              display: "flex",
              textAlign: "center",
              margin:"0 auto",
            }}
            src={props.image}
            alt={props.name}
          />
        </div>
        <div style={textStyle}>
          <ul style={
            {padding:"0", textAlign: "center",}

          }>
            <li style={lineStyle}>
              <strong>Description: {props.description}</strong>
            </li>
            <li style={lineStyle}>
              <strong>Technologies: {props.technologies}</strong>
            </li>
            <li style={lineStyle}>
              <strong>
                <a href={props.github} target="blank">
                  Click Here to view the Github Repo
                </a>
              </strong>
            </li>
            <li style={lineStyle}>
              <strong>
                <a href={props.deployed} target="blank">
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

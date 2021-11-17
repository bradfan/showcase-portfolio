import React from "react";
// import { useMediaQuery } from "react-responsive";

const screenWidth = 1;
const cardWidth = screenWidth < 1100 ? "95%" : "45%";

function Card({ props }) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="img-container">
          <p className="line">
            <strong>Name: {props.name}</strong>
          </p>
          <img className="img" src={props.image} alt={props.name} />
        </div>
        <div class="text">
          <ul className="list">
            <li className="line">
              <strong>Description: {props.description}</strong>
            </li>
            <li className="line">
              <strong>Technologies: {props.technologies}</strong>
            </li>
            <li className="line">
              <strong>
                <a href={props.github} target="blank">
                  Click Here to view the Github Repo
                </a>
              </strong>
            </li>
            <li className="line">
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

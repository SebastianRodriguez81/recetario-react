import React, { useState }from "react";
import "../Card.css";
import heartOutline from "../assets/heart-outline.png"; // Tell webpack this JS file uses this image
import heartFill from "../assets/heart-fill.png"; // Tell webpack this JS file uses this image
import { getLinkReceta } from '../utils/axiosClient'

export default function Card(props) {
  const [linkReceta, setLinkReceta] = useState('')

  return (
    <div className="card" onLoad={async () => setLinkReceta(await getLinkReceta(props.id))}>
      <div className="card-header">
        <div className="profile">
          <span className="letter">R</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">{props.title}</h5>
          
        </div>
      </div>
      <img className="card-image" src={props.image} alt="Logo" />
      <div className="card-text">{props.description}</div>
      <div className="card-like-bar">
        {props.liked ? (
          <img className="card-like-icon" src={heartFill} alt="Logo" />
        ) : (
          <img className="card-like-icon" src={heartOutline} alt="Logo" />
        )}
        <div className="like-text">
        <button onClick={()=> window.open(`${linkReceta}`, "_blank")}>Ver receta</button>
        </div>
      </div>
    </div>
  );
}
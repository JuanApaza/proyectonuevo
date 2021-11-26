import React from "react";
import { FaTwitter } from "react-icons/fa";
import "./styles/CardCharacters.css";

export default function CardCharacters(props) {
  return (
      <div>
      {props.items.map((item) => {
        return (
          
          <li className="container-img" key={item.id}>
            <div>
              <img className="avatar" src={item.cover_image} alt="" />
            </div>
            
            <div className="container__info">
              <p className="name">{item.titles.en}</p>
              
            </div>
            
          </li>
          
        );
      })}
    </div>
    
  );
}

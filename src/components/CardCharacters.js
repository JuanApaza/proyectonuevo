import React from "react";
import { FaTwitter } from "react-icons/fa";
import "./styles/CardCharacters.css";

export default function CardCharacters(props) {
  return (
    <article class="posts clearfix">
            <h1 class="bdr-title">Animes recomendados</h1>
      <div className="list-unstyled">
      {props.items.map((item) => {
        return (
          
          <li className="container-img" key={item.id}>
            <div>
              <img className="avatar" src={item.cover_image} alt="" />
            </div>
            {/* <div>
              
              <a href={item.trailer_url} class="link-primary">Trailer</a>
            </div> */}
            <div className="container__info">
              <p className="name">{item.titles.en}</p>
              {/* <p className="twitter">
                <FaTwitter />@{item.titles.en}
              </p> */}
              {/* <p>{item.type}</p>
              <p>{item.attributes.synopsiss}</p> */}
            </div>
            
          </li>
          
        );
      })}
    </div>
    </article>
  );
}

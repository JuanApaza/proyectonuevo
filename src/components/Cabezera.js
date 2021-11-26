import React from 'react'
import { FaTwitter } from "react-icons/fa";
import './styles/Cabe.css'
export default function Cabezera(props) {
    return (
        <div className="container">
            {props.items.map((item) => {
                return (
                <div>
                    <div class="container-imagen">
                    <img className="avatar" src={item.banner_image} alt="" />
                    </div>
                   
                    <div className="container__info">
                    <p className="name">{item.titles.en}</p>
                    <p className="twitter">
                        <FaTwitter />@{item.titles.en}
                    </p>
                    </div>
                </div>
                  
            );
            })}
        </div>
    );
}

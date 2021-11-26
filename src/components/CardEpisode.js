import React, { useEffect, useState } from 'react'

import axios from "axios";
export default function CardEpisode(props) {
const [busqueda,setBusqueda]=useState("");
const [tablaUsuario,setTablaUsuario]=useState([]);
const [usuarios,setUsuarios]=useState([]);
const handleChange=e=>{
  setBusqueda(e.target.value);
  console.log("Busqueda:"+e.target.value);
}
  return (
        <div class="container">
          <div id="container-input">
            <form class="d-flex">
              <input class="form-control me-2" 
              placeholder="Busqueda de anime por nombre" 
              value={busqueda}
              onChange= {handleChange}/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
          <div class="table-reponsive">
              <table class="table table-sm table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Año de emision</th>
                    <th>Temporadas</th>
                    <th>Episodios</th>
                    <th>Puntuacion (/100)</th>
                    <th>Trailer</th>
                  </tr>
                </thead>
                

                <tbody>
                {props.items.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.titles.en}</td>
                    <td>{item.season_year}</td>
                    <td>{item.season_period}</td>
                    <td>{item.episodes_count}</td>
                    <td>{item.score}</td>
                    <td><a href={item.trailer_url} class="link-primary"><button class="btn btn-outline-dark">Ver Trailer</button></a></td>
                  </tr>
                );
                })}
                </tbody>
              </table>
            
          </div>
          </div>
  );
}

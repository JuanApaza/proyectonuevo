import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Navbar.css'
import logo from '../images/logo.png'

export default function Navbar() {
    return (
        <div class="container">
          <a class="navbar-brand" href="#">EMIna</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav navbar-right">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Lista de animes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Dirrectorio de animes</a>
                        </li>
                    </ul>
                </div>
        </div>
    )
}

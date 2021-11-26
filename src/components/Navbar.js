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
                    
                        <Link className="nav-link active" to="/"><li>Inicio</li></Link>
                        <Link className="nav-link" to="/characters"><li>Lista de animes</li></Link>
                        <Link className="nav-link" to="/episode"><li>Dirrectorio de animes</li></Link>
                    </ul>
                </div>
        </div>
    )
}

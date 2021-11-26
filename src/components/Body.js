import React from 'react'
import './styles/styles.css'
import imagen from '../images/ataque.jpg'
import imagen13 from '../images/DIGIMON.jpg'
import imagen9 from '../images/WORLD.jpg'
import imagen10 from '../images/NARUTO.jpg'
import {Videos} from './Videos'
function Body() {
    return (
       <div class="container clearfix">
          
            <div class="row">
                <section class="col-md-8">
                    <Videos/>
                    <article class="posts clearfix">
                        <h1 class="bdr-title">Ultimas series, peliculas o animes</h1>
                        <div class="post">
                            <div class="title">
                                <h4>Ataque a los titanes</h4>   
                            </div>
                            <div class="thumb">
                                <img class= "img-responsive" src={imagen}></img>
                            </div>
                            <div class="sinopsis">
                                <p class="text-justify">
                                La historia se desarrolla en un mundo ficticio en donde la humanidad está al borde de la extinción a causa de unas criaturas humanoides llamadas «titanes», por lo que los sobrevivientes se resguardan en tres enormes murallas que impiden el acceso a los monstruos.
                                </p>
                            </div>
                               
                        </div>
                        <div class="post">
                            <div class="title">
                              
                                <h4>Digimon</h4>   

                            </div>
                            <div class="thumb">
                                <img class= "img-responsive" src={imagen13}></img>
                            </div>
                            <div class="sinopsis">
                                <p class="text-justify">
                                Ellos estarán contigo, solo un poco más allá en el futuro…” Tras conocer a una criatura desconocida llamada “Digimon”, que es invisible para la gente corriente, Amanogawa Tomohiro y el misterioso Digimon Gammon se adentran en el mundo de los Digimon
                                </p>
                            </div>
                        </div>
                        <div class="post">
                            <div class="title">
                              
                                <h4>Word</h4>   

                            </div>
                            <div class="thumb">
                                <img class= "img-responsive" src={imagen9}></img>
                            </div>
                            <div class="sinopsis">
                                <p class="text-justify">
                                Cuando la puerta a otro mundo de repente se abre en la Tierra, la ciudad de Mikado es invadida por extrañas criaturas conocidas como “Vecinos”, que son seres maliciosos con armamento tradicional. En respuesta a esta invasión, una organización mundial  
                                </p>
                            </div>
                        </div>
                    </article>
                </section>
                <aside class="col-md-4">
                    <div class="side-bar">
                        <h3 class="bdr-title">Anime del Dia</h3>
                        <div class="content-side">
                          <img class= "img-responsive" src={imagen10}></img>

                        </div>

                    </div>

                </aside>
            </div>
          <div>
        </div>
      </div>   
    )
}

export {Body}






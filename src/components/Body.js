import React from 'react'
import './styles/styles.css'
import imagen from './styles/imagen.jpg'
import thor from './styles/thor.jpg'
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
                              
                                <h4>THOR</h4>   

                            </div>
                            <div class="thumb">
                                <img class= "img-responsive" src=""></img>
                            </div>
                            <div class="sinopsis">
                                <p class="text-justify">
                                    sinopsis del anime que esta como meustra en la pagina
                                    sinopsis del anime que esta como meustra 
                                    

                                </p>
                            </div>
                        </div>
                        <div class="post">
                            <div class="title">
                              
                                <h4>THOR</h4>   

                            </div>
                            <div class="thumb">
                                <img class= "img-responsive" src=""></img>
                            </div>
                            <div class="sinopsis">
                                <p class="text-justify">
                                    sinopsis del anime que esta como meustra en la pagina
                                    sinopsis del anime que esta como meustra 
                                    

                                </p>
                            </div>
                        </div>
                        <div class="post">
                            <div class="title">
                              
                                <h4>THOR</h4>   

                            </div>
                            <div class="thumb">
                                <img class= "img-responsive" src={imagen}></img>
                            </div>
                            <div class="sinopsis">
                                <p class="text-justify">
                                    sinopsis del anime que esta como meustra en la pagina
                                    sinopsis del anime que esta como meustra 
                                    

                                </p>
                            </div>
                        </div>
                    </article>
                </section>
                <aside class="col-md-4">
                    <div class="side-bar">
                        <h3 class="bdr-title">Pelicula del Dia</h3>
                        <div class="content-side">

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






import React from 'react'
import imagen from './styles/imagen.jpg'
import thor from './styles/thor.jpg'

function Videos() {
    return (
        <article class="posts clearfix">
            <h1 class="bdr-title">Ultimos videos publicados</h1>
                <div class="post">
                    <div class="title">
                        <h4 align="cengter">Capitulo 1</h4>
                    </div>
                    <div class="thumb">
                    <img class="img-responsive" src={thor}></img>
                    </div>
                </div>
                <div class="post">
                    <div class="title">
                                <h4 align="cengter">Capitulo 2</h4>
                            </div>
                            <div class="thumb">
                                <img class="img-responsive" src={thor}></img>
                            </div>        
                </div>
                        <div class="post">
                            <div class="title">
                                <h4 align="center">Capitulo 3</h4>
                            </div>
                            <div class="thumb">
                                <img class="img-responsive" src={thor}></img>
                            </div>
                        </div>
                    </article>
    )
}

export {Videos}



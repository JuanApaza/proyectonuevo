import React from 'react'
import imagen5 from '../images/videos.jpg'

function Videos() {
    return (
        <article class="posts clearfix">
            <h1 class="bdr-title">Ultimos videos publicados</h1>
                <div class="post">
                    <div class="title">
                        <h4 align="center">Capitulo 3</h4>
                    </div>
                    <div class="thumb">
                    <img class="img-responsive" src={imagen5}></img>
                    </div>
                </div>
                <div class="post">
                    <div class="title">
                                <h4 align="center">Capitulo 4</h4>
                            </div>
                            <div class="thumb">
                                <img class="img-responsive" src={imagen5}></img>
                            </div>        
                </div>
                        <div class="post">
                            <div class="title">
                                <h4 align="center">Capitulo 5</h4>
                            </div>
                            <div class="thumb">
                                <img class="img-responsive" src={imagen5}></img>
                            </div>
                        </div>
                    </article>
    )
}

export {Videos}



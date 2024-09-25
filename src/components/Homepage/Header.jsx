import React from "react";
import { Link} from "react-router-dom";

export default function Menu(){

    return(
        <div>
            <section>
                <h2>VOLUNTEER</h2>
                <p>"Voluntarios por la tierra: Juntos podemos hacer la diferencia"</p>
                <button><Link>voluntariados</Link></button>
            </section>

            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                     </ol>
                <div class="carousel-inner">

                     <div class="carousel-item active">
                        <img src="..." class="d-block w-100" alt="..."/>
                    </div>
            
                    <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="..."/>
                    </div>

                    <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    );

}


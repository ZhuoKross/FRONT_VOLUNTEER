import React from "react";
import img4 from "../img/ConservaciónAmbiental.jpg"
import {Link} from "react-router-dom";
export default function Convocatoria(){

    return(
        <div className="convocatoria">
            <h1>Convocatorias disponibles</h1>
           <section className="banner">
            <div>
                <img src={img4} alt="" />
                <article>
                    <h3>Los Chorros SOS</h3>
                    <p>Alerta Ambiental

                        La zona verde de los chorros ha sufrido un devastador incendio que ha dejado el área completamente quemada.
                        ....
                    </p>
                   
                    <div className="buttonuno">
                        <Link  className="" to={"/vermas"}>Ver mas..</Link>
                        <button>Participar</button>
                    </div>
                </article>
            </div>

            <div>
                <img src={img4} alt="" />
                <article>
                    <h3>Los Chorros SOS</h3>
                    <p>Alerta Ambiental

                        La zona verde de los chorros ha sufrido un devastador incendio que ha dejado el área completamente quemada.
                        ....
                    </p>
                   
                    <div className="buttonuno">
                        <Link  className="" to={"/vermas"}>Ver mas..</Link>
                        <button>Participar</button>
                    </div>
                </article>
            </div>

            <div>
                <img src={img4} alt="" />
                <article>
                    <h3>Los Chorros SOS</h3>
                    <p>Alerta Ambiental

                        La zona verde de los chorros ha sufrido un devastador incendio que ha dejado el área completamente quemada.
                        ....
                    </p>
                   
                    <div className="buttonuno">
                        <Link  className="" to={"/vermas"}>Ver mas..</Link>
                        <button>Participar</button>
                    </div>
                </article>
            </div>

            <div>
                <img src={img4} alt="" />
                <article>
                    <h3>Los Chorros SOS</h3>
                    <p>Alerta Ambiental

                        La zona verde de los chorros ha sufrido un devastador incendio que ha dejado el área completamente quemada.
                        ....
                    </p>
                   
                    <div className="buttonuno">
                        <Link  className="" to={"/vermas"}>Ver mas..</Link>
                        <button>Participar</button>
                    </div>
                </article>
            </div>

            <div>
                <img src={img4} alt="" />
                <article>
                    <h3>Los Chorros SOS</h3>
                    <p>Alerta Ambiental

                        La zona verde de los chorros ha sufrido un devastador incendio que ha dejado el área completamente quemada.
                        ....
                    </p>
                   
                    <div className="buttonuno">
                        <Link  className="" to={"/vermas"}>Ver mas..</Link>
                        <button>Participar</button>
                    </div>
                </article>
            </div>
           </section>
        </div>
    );

}


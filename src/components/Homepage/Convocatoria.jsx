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
                    <textarea name="descripcion" id="">Alerta Ambiental

                        La zona verde ubicada en [ubicación] ha sufrido un devastador incendio que ha dejado el área completamente quemada. El fuego ha consumido gran parte de la vegetación y ha dañado irreparablemente el ecosistema.

                        Necesitamos toda la ayuda posible

                        Se requiere la intervención inmediata de bomberos y equipos de emergencia para controlar el fuego y evitar que se propague. También necesitamos la ayuda de la comunidad para restaurar la zona verde y proteger el medio ambiente.

                        Voluntarios necesarios

                        Se necesitan voluntarios para ayudar en las tareas de rescate, limpieza y restauración de la zona verde.</textarea>
                    <div className="buttonuno">
                        <Link  className="" to={"/vermas"}>Registro</Link>
                        <button>Participar</button>
                    </div>
                </article>
            </div>
           </section>
        </div>
    );

}


import React from "react";
import {Link} from "react-router-dom";
export default function Menu(){

    return(
        <div className="flex justify-around items-center pt-3">
        <h1>Los Chorros SOS</h1>
        <section>
            <img src="" alt="" />
            <section>
                <p>Alerta Ambiental La zona verde ubicada en [ubicación] ha sufrido un devastador incendio que ha dejado el área completamente quemada. El fuego ha consumido gran parte de la vegetación y ha dañado irreparablemente el ecosistema. Necesitamos toda la ayuda posible Se requiere la intervención inmediata de bomberos y equipos de emergencia para controlar el fuego y evitar que se propague. También necesitamos la ayuda de la comunidad para restaurar la zona verde y proteger el medio ambiente. Voluntarios necesarios Se necesitan voluntarios para ayudar en las tareas de rescate, limpieza y restauración de la zona verde.</p>
                <div>
                    <button>Volver</button>
                </div>
            </section>
        </section>

        </div>
    );

}
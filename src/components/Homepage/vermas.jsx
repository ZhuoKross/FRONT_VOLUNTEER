import React from "react";
import {Link} from "react-router-dom";
import img1 from "../img/login.png"

export default function Menu(){

    return(
        <div className="ver">
            <h1>Los Chorros SOS</h1>
            <section>
                <img src={img1} alt="" />
                <section className="dos">
                    <p>
                        <br /><br />
                        <strong>Alerta Ambiental</strong> 
                        <br></br><br />
                        La zona verde ubicada en  <strong>los chorros</strong> ha sufrido un devastador incendio que ha dejado el área completamente quemada. El fuego ha consumido gran parte de la vegetación y ha dañado irreparablemente el ecosistema.
                            <br /><br />
                       <strong>Necesitamos toda la ayuda posible</strong> 
                            <br /><br />
                        Se requiere la intervención inmediata de bomberos y equipos de emergencia para controlar el fuego y evitar que se propague. También necesitamos la ayuda de la comunidad para restaurar la zona verde y proteger el medio ambiente.
                        <br /><br />
                      <strong>Voluntarios necesarios</strong>
                        <br /><br />
                        Se necesitan voluntarios para ayudar en las tareas de rescate, limpieza y restauración de la zona verde. Si desea ayudar, por favor, póngase en contacto con las autoridades locales o con organizaciones ambientales que estén trabajando en la zona.
                        <br /><br />
                      <strong>Cualquier ayuda es bienvenida</strong>
                        <br /><br />
                        Voluntarios para ayudar en la lucha contra el fuego y la limpieza de la zona.
                        Donaciones de agua, alimentos y suministros médicos para los bomberos y voluntarios.
                        Expertos en restauración ecológica para ayudar a planificar y ejecutar la restauración de la zona verde.
                        Cualquier otra forma de ayuda que pueda ser útil en esta situación de emergencia.

                        Por favor, no dude en ofrecer su ayuda en este momento crítico. Juntos, podemos hacer una diferencia y restaurar la zona verde a su estado natural.
                        </p>
                        <Link className="mas envia" to={"/Convocatoria"}>Volver</Link>
                </section>
                   
            </section>

        </div>
    );

}
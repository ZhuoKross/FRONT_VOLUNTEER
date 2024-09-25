import React from "react";
import { Link} from "react-router-dom";
import img1 from "../img/AyudaHumanitaria.jpg"
import img2 from "../img/ DesarrolloComunitario.jpg"
import img3 from "../img/BienestarAnimal.jpg"
import img4 from "../img/ConservaciónAmbiental.jpg"


export default function voluntariado(){


    return(
        <div className="conta">
            <h3>Voluntariado</h3>
            <p>Un pequeño gesto puede cambiarlo todo. Al voluntariar, no solo mejoras la vida de otros, sino también la tuya.
            Únete a una causa que te apasione y sé parte de un movimiento que genera un impacto positivo</p>

            <section className="caras">
                <div>
                    <img src={img1} alt="" />
                    <p>Ayuda Humanitaria y Alivio en Casos de Desastre</p>
                    <Link className="button">Ver mas..</Link>
                </div>

                <div>
                    <img src={img2}  alt="" />
                    <p> Desarrollo Comunitario</p>
                    <Link className="button">Ver mas..</Link>
                </div>

                <div>
                    <img src={img3} alt="" />
                    <p>Bienestar Animal</p>
                    <Link className="button">Ver mas..</Link>
                </div>

                <div>
                    <img src={img4} alt="" />
                    <p>Conservación Ambiental</p>
                    <Link className="button">Ver mas..</Link>
                </div>
            </section>
        </div>
    );

}
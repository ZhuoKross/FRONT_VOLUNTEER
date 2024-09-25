import React from "react";
import { Link} from "react-router-dom";
import img from "../img/img-1.jpg";

export default function Menu(){

    return(
        <div className="header">
            <section className="header_info">
                <h2>VOLUNTEER</h2>
                <p>"Voluntarios por la tierra: Juntos podemos hacer la diferencia"</p>
                <button><Link>voluntariados</Link></button>
            </section>


            <section className="header_img">
                <img src={img} alt="" />
            </section>
        </div>
    );

}


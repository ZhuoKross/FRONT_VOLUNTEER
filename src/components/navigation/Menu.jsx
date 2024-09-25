import React from "react";
import { Link} from "react-router-dom";

export default function Menu(){

    return(
        <div>
            <h1>Volunteer</h1>
            <ul>
                <Link className="">Inicio</Link>
                <Link>convocatoria</Link>
                <Link>Voluntariado</Link>
                <Link> Voluntaridos</Link>
            </ul>
            <button><Link>Login</Link></button>
        </div>
    );

}


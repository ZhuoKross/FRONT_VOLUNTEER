import React from "react";
import {Link} from "react-router-dom";
export default function Menu(){

    return(

        <div className="flex justify-around items-center pt-3">
            <h1 className="font-bold">Volunteer</h1>
            <ul className="flex justify-around w-96">
                <Link to={"/Home"}>Inicio</Link>
                <Link to={"/Convocatoria"}>convocatoria</Link>
                <Link to={"/Voluntario"}>Voluntariado</Link>
                <Link to={"/CrearConvo"}>crear convocatoria</Link>
            </ul>
            <button className="bg-white border border-gray-300 text-black font-bold py-0 px-4 rounded pt-0"><Link to={"/Login"}>Login</Link></button>
        </div>
    );

}


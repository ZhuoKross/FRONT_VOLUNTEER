import React from "react";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import user_circle from "../img/user_circle.svg";


function IsRegistered({nombre}) {
    if(nombre != null && nombre != undefined){
        return <img src = {user_circle} className="w-7 h-7" title={nombre}></img>
    } else {
        return <button className="bg-white border border-gray-300 text-black font-bold py-0 px-4 rounded pt-0">
                    <Link to={"/Login"}>Login</Link>
                </button>
    }
}


export default function Menu(){


    const user = useSelector((state) => {return state.user});

    //console.log(user.name)

    return(

        <div className="flex justify-around items-center pt-3 pb-3">
            <h1 className="font-bold">Volunteer</h1>
            <ul className="flex justify-around w-96 ul">
                <Link className="li" to={"/"}>Inicio</Link>
                <Link className="li" to={"/Convocatoria"}>Convocatoria</Link>
                <Link to={"/Profile"}>User</Link>
            </ul>

            <IsRegistered nombre={user.nombre || null}/>
            
        </div>
    );

}



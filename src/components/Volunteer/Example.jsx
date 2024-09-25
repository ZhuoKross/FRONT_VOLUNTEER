import React from "react";
import { useSelector } from "react-redux";


export default function Example(){

    const user = useSelector(state => state.usuario)

    return(
        <div>
            <ul>
                <li>{user.nombre}</li>
                <li>{user.email}</li>
                <li>{user.contraseña}</li>
                <li>{user.rol}</li>
            </ul>
        </div>

    );
}
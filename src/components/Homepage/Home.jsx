import React from "react";
import Menu from "../navigation/Menu";
import Header from "./Header";
import { Outlet } from "react-router";
import Frase from "./frase";
import Voluntariado from "./voluntariado";


export default function Home(){
    return(

        <div className="w-full h-dvh">
            <Header/>
            <Frase/>
            <Voluntariado/>

            <Outlet />
        </div>

    );
}
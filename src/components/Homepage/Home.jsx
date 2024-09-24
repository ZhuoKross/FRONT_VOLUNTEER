import React from "react";
import Menu from "../navigation/Menu";
import { Outlet } from "react-router";


export default function Home(){
    return(

        <div className="w-full h-dvh">
            
            <Menu />
            <h1 className="text-3xl font-mono">Home Page</h1>


            <Outlet />
        </div>

    );
}
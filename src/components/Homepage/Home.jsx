import React from "react";
import Menu from "../navigation/Menu";
import Header from "./Header";
import { Outlet } from "react-router";


export default function Home(){
    return(

        <div className="w-full h-dvh">
            
            <Menu />
            <Header/>

            <Outlet />
        </div>

    );
}
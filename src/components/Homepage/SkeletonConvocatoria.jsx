import React from "react";
import {Link} from "react-router-dom";
import img1 from "../img/login.png"

export default function Menu(){

    return(
        <div className="flex flex-col">
            <section>
            <div className="bg-zinc-300 flex flex-row place-content-center items-center w-full">
                <div className="w-full flex m-10 container-main-information">
                    <img src={img1} alt="" className="img-convocatoria me-10"/>
                    <div className="max-w-xl">
                        <p className=" text-zinc-500">Llanos Orientales, Colombia</p>
                        <h1 className="text-5xl font-bold inline-block">Los Chorros SOS</h1>
                        <div className="mt-2 mb-3">
                            <span className="bg-blue-500 inline-block p-1 pe-3 pl-3 rounded-3xl  text-center text-slate-100 me-2">Granja</span>
                            <span className="bg-blue-500 inline-block p-1 pe-3 pl-3 rounded-3xl  text-center text-slate-100 me-2">Mantenimiento</span>
                        </div>
                        <p className="mb-3">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ea in dignissimos aliquam! Id sint unde omnis rem facilis! Odit placeat, harum facilis voluptate atque nostrum voluptatibus commodi aliquid iure perspiciatis iusto! Sunt cumque inventore fugit neque fugiat, repellat veniam hic aliquam. Modi dolores aperiam a dolor temporibus delectus, iure eligendi, aliquam quos cum aliquid vero. Doloremque, quasi ex ipsa eaque non nobis temporibus officia neque totam ut placeat? Pariatur deserunt voluptas delectus. Neque, at. Repellat hic quisquam distinctio odit totam in sit vel asperiores possimus. 
                        </p>
                        <div className="flex ">
                            <p className="self-center w-2/3 underline">Numero de cupos: 25</p>
                            <div className="flex w-1/3">
                                <button className="p-4 bg-lime-500 rounded-3xl w-40 text-slate-200 hover:text-white">Aplicar Ahora</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
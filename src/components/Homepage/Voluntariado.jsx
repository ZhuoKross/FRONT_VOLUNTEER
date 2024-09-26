import React from "react";
import { Link} from "react-router-dom";
import img1 from "../img/AyudaHumanitaria.jpg"
import img2 from "../img/ DesarrolloComunitario.jpg"
import img3 from "../img/BienestarAnimal.jpg"
import img4 from "../img/ConservaciónAmbiental.jpg"


export default function Voluntariado(){


    return(
        <div className="conta">
            <h3>Voluntariado</h3>
            <p>Un pequeño gesto puede cambiarlo todo. Al voluntariar, no solo mejoras la vida de otros, sino también la tuya.
            Únete a una causa que te apasione y sé parte de un movimiento que genera un impacto positivo.</p>

            <section style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>

            
       
                <div class="flex justify-center items-center" style={{margin:'0px 60px'}}>
                    <div class="max-w-[720px] mx-auto">
                        
                        <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                            <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96" style={{height:'200px'}}>
                                <img
                                    src={img1}
                                    alt="card-image"  />
                            </div>
                            <div class="p-6">
                                <div class="flex items-center justify-between mb-2">
                                    <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                    Ayuda Humanitaria y Alivio en Casos de Desastre
                                    </p>
                                </div>
                            </div>
                            <div class="p-6 pt-0">
                                <button
                                    class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                    type="button">
                                    Ver mas..
                                </button>
                            </div>
                        </div>
                    </div>
                </div>







                <div class="flex justify-center items-center " style={{margin:'0px 60px'}}>
                    <div class="max-w-[720px] mx-auto">
                        
                        <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                            <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96 img-dos" style={{height:'230px'}}>
                                
                            </div>
                            <div class="p-6">
                                <div class="flex items-center justify-between mb-2">
                                    <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                    Desarrollo Comunitario
                                    </p>
                                </div>
                            </div>
                            <div class="p-6 pt-0">
                                <button
                                    class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                    type="button">
                                    Ver mas..
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center items-center "style={{margin:'0px 60px'}}>
                    <div class="max-w-[720px] mx-auto">
                        
                        <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                            <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96 img-tres"style={{height:'230px'}}>
                               
                            </div>
                            <div class="p-6">
                                <div class="flex items-center justify-between mb-2">
                                    <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                    Conservación Ambiental
                                    </p>
                                </div>
                            </div>
                            <div class="p-6 pt-0">
                                <button
                                    class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                    type="button">
                                    Ver mas..
                                </button>
                            </div>
                        </div>
                    </div>
                </div>





                <div class="flex justify-center items-center "style={{margin:'18px 60px'}}>
                    <div class="max-w-[720px] mx-auto">
                        
                        <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                            <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96 img-cuatro"style={{height:'230px'}}>
                               
                            </div>
                            <div class="p-6">
                                <div class="flex items-center justify-between mb-2">
                                    <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                    Bienestar Animal
                                    </p>
                                </div>
                            </div>
                            <div class="p-6 pt-0">
                                <button
                                    class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                    type="button">
                                    Ver mas..
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );

}
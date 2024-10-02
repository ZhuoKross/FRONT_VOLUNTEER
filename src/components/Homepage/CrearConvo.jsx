import React from "react";
import img1 from "../img/evento.bmp"

export default function CrearConvo() {

    return (
        <div className="login ">

            <section className=" bg-slate-300 h-screen">
                <h1 className="login-h1  pb-6"> Crear Programa</h1>
                <div className="flex place-content-center">
                    <article className="mt-3 me-8">
                        <img src={img1} alt="" className="img-form-convocatoria"/>
                    </article>
                <article className=" w-96">
                    <form action="" method="post" className="w-full flex flex-col">
                        <label htmlFor="">Nombre del programa: <br />
                            <input className="h-10 w-full rounded-sm" type="text" name="name" id="" placeholder="Nombre del evento" />
                        </label>


                        <label htmlFor="descripcion" className="inline-block"> ¿Qué necesitas? <br />
                            <textarea
                                name="descripcion"
                                id="descripcion"
                                className="w-full rounded-sm"
                            ></textarea>
                        </label>
                        <div className="flex">
                            <label htmlFor="">Fecha de inicio: <br />
                                <input className="me-4" type="date" id="" />
                            </label>
                            <label htmlFor="">Fecha final: <br />
                                <input className="" type="date" id="" />
                            </label>
                        </div>

                        <label htmlFor="" className="mt-5 mb-4">Tipo de programa: <br />
                            <select className="" id="documento" name="documento" style={{ marginLeft: '5px' }}>
                                <option value="">SOS</option>
                                <option value="cedula">Voluntario</option>
                            </select>
                        </label>


                        <input className="input-field envia" type="submit"
                            value="Registrar" />

                    </form>
                </article>
                </div>

            </section>
        </div>
    );

}

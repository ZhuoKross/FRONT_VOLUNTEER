import React from "react";
//import img1 from "../img/evento.bmp"
import CarouselComponent from "../User/CarouselComponent";
import { useState } from "react";


export default function CrearConvo() {

    const [srcImg, setSrcImg] = useState([]);
    const [numImg, setNumimg] = useState(0);

    const previewImg = (e) => {


        const files = e.target.files;

        setNumimg(files.length);
        //console.log(files);
        const urls = [];

        for (let i = 0; i < files.length; i++) {
            const file = files[i]
            if (file) {
                const urlPrevFile = URL.createObjectURL(file);
                urls.push(urlPrevFile);

            }
        }

        //        console.log(urls)

        setSrcImg(urls);
    }

    

    console.log(srcImg);

    return (
        <div className="login ">

            <section className=" h-screen">
                <h1 className="login-h1  pb-6"> Crear Programa</h1>
                <div className="parent-container-form flex flex-col">
                    {/* <article className="mt-3 me-8">
                        <img src={img1} alt="" className="img-form-convocatoria"/>
                    </article> */}



                    <article className=" container-form-create-convocatory">
                        <form action="" method="post" className="w-full flex flex-col bg-slate-100 p-7 rounded-xl ">
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
                            <h4 className="text-2xl mt-8 mb-4">Muestra tu trabajo y lo que Ofreces</h4>

                            <label htmlFor="file"> Sube hasta {numImg}/10 imagenes <br />
                                <input
                                    type="file"
                                    name="file"
                                    id="file"
                                    onChange={(e) => {
                                        //console.log(e.target)
                                        previewImg(e)
                                    }}
                                    className="pt-3"
                                    multiple />
                            </label>

                            <CarouselComponent arrayUrls={srcImg} />


                            <div className="flex place-content-end">
                                <input
                                    className="input-field envia w-1/2 cursor-pointer"
                                    type="submit"
                                    value="Publicar" />
                            </div>

                        </form>


                    </article>
                </div>

            </section>
        </div>
    );

}

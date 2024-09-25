import React from "react";
import img1 from "../img/registro.jpg"

export default function Registro(){

    return(
        <div className="login">
          <h1 className="login-h1"> Registro Evento</h1>
           <section>

            <article className="login-conta">
            <img src={img1} alt="" />
            </article>

            <article login-conta for>
                <form action="" method="post">

                    
                    <label htmlFor="">
                        <input className="input-field" type="text" name="titulo" id="" placeholder="titulo" />
                    </label>
                    <br />


                    <label htmlFor="">
                        <textarea name="contenido" id=""></textarea>
                    </label>

                    
                    
                    <br />
                    <label htmlFor="">
                    <select className="input-fiel" id="documento" name="documento">
                        <option value="">seleccion tipo persona</option>
                        <option value="volumtariado">volumtario</option>
                        <option value="sos">SOS</option>
                    </select>
                    </label>
                    
                    <br /><br /><br />
                    
                    
                    <input className="input-field envia" type="submit" 
                    value="Registrar" />

                </form>
            </article>
           
           </section>
        </div>
    );

}

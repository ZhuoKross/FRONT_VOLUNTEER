import React from "react";
import img1 from "../img/evento.bmp"

export default function CrearConvo(){

    return(
        <div className="login">
          <h1 className="login-h1"> Crear evento</h1>
           <section className="espacio">
            <article className="login-conta">
            <img src={img1} alt="" />
            </article>
            <article login-conta for>
                <form action="" method="post">
                    <label htmlFor="">
                        <input className="input-field" type="text" name="name" id="" placeholder="Nombre evento" />
                    </label>
                    <br />
            
                    <label htmlFor="">
                        <input className="input-field" type="text" name="" id="" placeholder="Contenido" />
                    </label>
                    <label htmlFor="">
                        <input className="input-field" type="date" id=""  />
                    </label>
                    <br />
                    <label htmlFor="">
                    <select className="input-fiel" id="documento" name="documento" style={{marginLeft:'5px'}}>
                        <option value="">SOS</option>
                        <option value="cedula">volumtario</option>
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

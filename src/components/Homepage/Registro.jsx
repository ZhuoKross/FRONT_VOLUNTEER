import React from "react";
import img1 from "../img/login.png"

export default function Registro(){

    return(
        <div className="login">
          <h1 className="login-h1"> Sumate al cambio ambiental</h1>
           <section className="espacio">
            <article className="login-conta">
            <img src={img1} alt="" />
            </article>
            <article login-conta for>
                <form action="" method="post">
                    <label htmlFor="">
                        <input className="input-field" type="text" name="name" id="" placeholder="Nombre" />
                    </label>
                    <br />
            
                    <label htmlFor="">
                        <input className="input-field" type="text" name="" id="" placeholder="Email" />
                    </label>
                    <label htmlFor="">
                        <input className="input-field" type="password" name="" id="" placeholder="******" />
                    </label>
                    <br />
                    <label htmlFor="">
                    <select className="input-fiel" id="documento" name="documento" style={{marginLeft:'5px'}}>
                        <option value="">seleccion tipo persona</option>
                        <option value="cedula">volumtario</option>
                        <option value="tarjeta_identidad">Empresa</option>
                        <option value="pasaporte">ONU</option>
                        <option value="nit">NIT</option>
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

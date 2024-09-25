import React from "react";
import img1 from "../img/registro.jpg"

export default function Registro(){

    return(
        <div className="login">
          <h1 className="login-h1"> Sumate al cambio ambiental</h1>
           <section>
            <article className="login-conta">
            <img src={img1} alt="" />
            </article>
            <article login-conta for>
                <form action="" method="post">

                    
                    <label htmlFor="">
                        <input className="input-field" type="text" name="documento" id="" placeholder="Documento" />
                    </label>
                    <br />
                    <label htmlFor="">
                    <select className="input-fiel" id="documento" name="documento">
                        <option value="">Seleccione una opción</option>
                        <option value="cedula">Cédula de ciudadanía</option>
                        <option value="tarjeta_identidad">Tarjeta de identidad</option>
                        <option value="pasaporte">Pasaporte</option>
                        <option value="nit">NIT</option>
                    </select>
                    </label>
                    
                    <br /><br /><br />

                    <label htmlFor="">
                        <input className="input-field" type="text" name="name" id="" placeholder="Nombre" />
                    </label>

                    
                    <label htmlFor="">
                        <input className="input-field" type="text" name="apellido" id="" placeholder="Apellido" />
                    </label>

                   
                    <label htmlFor="">
                        <input className="input-field" type="text" name="" id="" placeholder="Telefono" />
                    </label>
                    <label htmlFor="">
                        <input className="input-field" type="text" name="" id="" placeholder="direccion" />
                    </label>
                    <br />
                    <br />
                    <label htmlFor="">
                        <input className="input-field" type="text" name="" id="" placeholder="Email" />
                    </label>
                    <label htmlFor="">
                        <input className="input-field" type="password" name="" id="" placeholder="******" />
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

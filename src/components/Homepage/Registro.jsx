import React from "react";
import img1 from "../img/registro.jpg"
import { useState } from "react";
//import { useDispatch } from "react-redux";

export default function Registro(){

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [rol, setRol] = useState("");
    


    const handleSubmitEvent = (e) =>{
        e.preventDefault();

        const formRegistro = e.target.parentNode.parentNode;
        
        const nombre = formRegistro.children[3].children[0].value;
        const email = formRegistro.children[5].children[0].value;
        const contraseña = formRegistro.children[6].children[0].value;
        const rol = formRegistro.children[8].children[0].value;


        // console.log(nombre);
        // console.log(email);
        // console.log(contraseña);
        // console.log(rol);



        
    }


    return(
        <div className="login">
          <h1 className="login-h1"> Sumate al cambio ambiental</h1>
           <section>
            <article className="login-conta">
            <img src={img1} alt="" />
            </article>
            <article login-conta for>
                <form onSubmit={""}>
                    
                    <br /><br /><br />

                    <label htmlFor="">
                        <input className="input-field" type="text" name="name" id="" placeholder="Nombre" />
                    </label>


                    <br />
                    <label htmlFor="">
                        <input className="input-field" type="text" name="" id="" placeholder="Email" />
                    </label>
                    <label htmlFor="">
                        <input className="input-field" type="password" name="" id="" placeholder="contraseña" />
                    </label>
                    <br />
                    <label htmlFor="">
                    <select className="input-fiel" id="documento" name="documento">
                        <option value="">seleccion tipo persona</option>
                        <option value="voluntario">voluntario</option>
                        <option value="empresa">Empresa</option>
                        <option value="onu">ONU</option>
                        <option value="nit">NIT</option>
                    </select>
                    </label>
                    
                    <br /><br /><br />
                    
                    
                    <div >
                        <input className="input-field envia hover:cursor-pointer" type="submit" 
                        value="Registrar" onClick={handleSubmitEvent}/>
                    </div>

                </form>
            </article>
           
           </section>
        </div>
    );

}

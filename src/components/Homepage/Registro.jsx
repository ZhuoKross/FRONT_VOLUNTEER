import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import img1 from "../img/login.png"



export default function Registro(){

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [rol, setRol] = useState("");
    const id = "JILJOIJHGO9077";
    const idRol = "LJLJOIF234"; 
    const idPais = "OIJOIJF098u0923"   

    const dispatch = useDispatch();


    const user = useSelector(state => state.user)


    // useEffect(()=>{
        
    // }, [])
    
    
    // const handleFetchSubmit = async () =>{
    //     await fetch("http://localhost:8081/users/create", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             idUsuario: id,
    //             nombre,
    //             email,
    //             contraseña,
    //             idRol,
    //             idPais
    //         })
    //     })
    // }


    return(
        <div className="login">
          <h1 className="login-h1"> Sumate al cambio ambiental</h1>
           <section className="espacio"> 
            <article className="login-conta">
            <img src={img1} alt="" />
            </article>


            <article className="login-conta for">
                <form >
                    <label htmlFor="">
                        <input 
                        className="input-field" 
                        type="text" 
                        name="name" 
                        id="" 
                        placeholder="Nombre"
                        onChange={(e) => {setNombre(e.target.value)}}
                        />
                    </label>
                    <br />
            
                    <label htmlFor="">
                        <input 
                        className="input-field" 
                        type="text" 
                        name="" 
                        id="" 
                        placeholder="Email" 
                        onChange={(e) => {setEmail(e.target.value)}}
                        />
                    </label>
                    <label htmlFor="">
                        <input 
                        className="input-field" 
                        type="password" 
                        name="" 
                        id="" 
                        placeholder="contraseña" 
                        onChange={(e) => {setContraseña(e.target.value)}}
                        />
                    </label>
                    <br />
                    <label htmlFor="">
                    <select className="input-fiel" id="documento" name="documento" onChange={(e) => {setRol(e.target.value)}}>
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
                        value="Registrar" onClick={(e)=> { 
                            
                            e.preventDefault();
                            
                            console.log(nombre);
                            console.log(email);
                            console.log(contraseña);
                            console.log(rol);

                            dispatch(addUser({nombre, email, contraseña, rol}))
                            
                            handleFetchSubmit();
                            }}/>
                    </div>

                </form>
            </article>
           </section>
        </div>
    
    );

}

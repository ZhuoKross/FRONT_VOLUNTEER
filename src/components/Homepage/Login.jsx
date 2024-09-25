import React from "react";
import img1 from "../img/login.jpg"
import {Link} from "react-router-dom";

export default function Login(){

    return(
        <div className="login">
            <h1 className="login-h1"> Cambia el mundo con nosotros</h1>
           <section>
            <article className="login-conta">
                <img src={img1} alt="" />
            </article>
            <article login-conta for>
                <form action="" method="post">
                    <label htmlFor="">
                        <input className="input-field" type="text" name="" id="" placeholder="Email" />
                    </label>
                    <br />
                    <br />
                    <label htmlFor="">
                        <input className="input-field" type="password" name="" id="" placeholder="******" />
                    </label>
                    <br /><br /><br />
                    
                    
                    <input className="input-field envia" type="submit" 
                    value="Sign in" />

                    <Link  className="input-field envia" to={"/Registro"}>Registro</Link>
                </form>
            </article>
           
           </section>
        </div>
    );

}

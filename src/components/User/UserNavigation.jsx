import imgLogin from "../img/login.png"
import { Link } from "react-router-dom";


export default function UserNavigation() {
    return (
        <div className="w-1/3 items-center ">
            <div className="flex flex-col place-content-start items-start">
                <div className="ml-10 w-64 flex flex-col items-center bg-slate-100 p-4 rounded-xl fixed bottom-1/5">
                    <p className="font-bold text-xl mt-4 mb-6">Nombre usuario</p>
                    <img src={imgLogin} alt="" className=" w-52 h-52 rounded-full" />
                    <p className="font-light text-zinc-500 mt-3">cargo</p>
                    <div className="mt-12 w-full text-center">
                        <ul className="w-full flex flex-col place-content-center">
                            <Link to={"IngresarEvento"} className="h-10 hover:bg-slate-200">Form </Link>
                            <Link to={"CrearConvocatoria"} className="h-10 hover:bg-slate-200">Crear Convocatoria</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
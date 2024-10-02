import React from "react";
import { useSelector } from "react-redux";
import img1 from "../img/ayuda-humanitaria.bmp"
import img2 from "../img/mascotas.bmp"
import img3 from "../img/comunidad.bmp"
import img4 from "../img/ConservaciónAmbiental.jpg"
import { Link } from "react-router-dom";

export default function Convocatoria() {


  const user = useSelector(state => { return state.user })

  return (
    <div className="convocatoria">
      <div className="text-center mb-8 flex flex-col items-center">
        <h1 className="text-5xl font-bold text-gray-900" style={{ textShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <i className="fas fa-handshake mr-2" style={{ fontSize: '24px', color: '#FFC107' }}></i>
          <span className="text-green-500">Únete</span> a nuestra misión
        </h1>
        <ul>
          <li>nombre: {user.nombre}</li>
          <li>email: {user.email}</li>
          <li>contraseña: {user.contraseña}</li>
          <li></li>
        </ul>
        <p className="text-lg font-normal text-gray-600 mt-4">Descubre oportunidades para hacer una diferencia en la vida de los demás</p>






        <form className="max-w-md mx-auto">
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative" style={{ width: '600px', marginLeft: '-75px' }}>

            <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tema de interes" required />
            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Buscar....</button>
          </div>
        </form>





      </div>

      <section className="pagina">
        <Link to="/verConvocatoria" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 card">
          <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={img1} alt="" />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Llamado Urgente: Apoya los Esfuerzos de Socorro a Refugiados</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Únete a nosotros para proporcionar ayuda crítica a refugiados necesitados. Tu donación ayudará a proporcionar refugio, alimentos y atención médica a aquellos afectados por situaciones de crisis.</p>
          </div>
        </Link>






        <Link to="/verConvocatoria" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 card">
          <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={img3} alt="" />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Empoderando Comunidades Locales: Únete al Movimiento</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Sé parte de crear un cambio positivo en comunidades locales. Tu apoyo ayudará a financiar iniciativas que promueven la educación, el crecimiento económico y el bienestar social.</p>
          </div>
        </Link>






        <Link to="/verConvocatoria" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 card">
          <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={img2} alt="" />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Protegiendo a Nuestros Amigos Fieles: Apoya los Esfuerzos de Rescate Animal</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Ayuda a hacer una diferencia en la vida de los animales necesitados. Tu donación apoyará esfuerzos de rescate, programas de rehabilitación y defensa del bienestar animal.</p>
          </div>
        </Link>







        <Link to="/verConvocatoria" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 card">
          <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={img4} alt="" />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Preservando Nuestro Planeta: Únete a la Lucha contra el Cambio Climático</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Toma acción contra el cambio climático y apoya iniciativas que protegen los recursos naturales de nuestro planeta. Tu contribución ayudará a financiar esfuerzos de conservación, investigación y programas educativos.</p>
          </div>
        </Link>
      </section>
    </div>
  );

}


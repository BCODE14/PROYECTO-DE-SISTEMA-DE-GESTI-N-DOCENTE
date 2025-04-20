


/**COMPOMENTES */


import { useNavigate } from "react-router-dom";

import modf from "./img/modfi.png"

export function Cartmaster({docente}) {

const navigate=useNavigate()

    return (
        <div className="flex rounded-lg bg-lin text-white p-3 hover:bg-zinc-700 hover:cursor-pointer mt-5flex flex-col justify-center mt-5">

        <div className="flex justify-between rounded-lg  text-blue p-3 hover:bg-bluelit hover:cursor-pointer" >
        <p>{docente.oficio}</p>
            <p>{docente.curso}</p>
            <p>{docente.cred}</p>
            <p>{docente.docente}</p>
            <p>{docente.fecha_i}</p>
            <p>{docente.fecha_f}</p>
            <p>{docente.clases}</p>
            <p>{docente.estado}</p>

            <div onClick={()=>{navigate('/masterpage/'+ docente.id)}}>
            <img src={modf} className="w-8 h-8" ></img>
            </div>
           

        </div>
        
       

      </div>
    );
  }
  
  export default Cartmaster;




import { useEffect, useState } from "react"
import {getAllDocente}from '../api/docente.api'
import {Cartdocente}from './carddocente'
import { Link } from "react-router-dom";


import{Menu} from "./menu.jsx";
export function Docentelist() {

  const [docentes,setDocente]=useState([]);

  useEffect(()=>{
    console.log("pagina cargada")
    async function loadocente(){
      const res= await getAllDocente()
      setDocente(res.data);
    }
    loadocente();
  },[]);

  return(

    <div className="flex justify-between py-2">

        <Menu/>
            <div className="flex flex-col ">
                <div className="flex justify-end">
                  <button className="bg-blue px-3 py-2 rounded-lg hover:bg-bluelit ">
                  <Link className="bg-blue px-3 py-2 rounded-lg text-white font-light hover:bg-bluelit " to="/docente-create"> + Crear Maestria</Link>
                  </button>
                </div>
              
                <div className="grid grid-cols-4 grap-20 gap-x-8 gap-y-4 hover:text-bluelit" >
                { docentes.map(docente => (
                  <Cartdocente key={docente.id} docente={docente}/>
                ))}
                </div>

            </div>

    </div>
            
  );
   
  }
  
  export default Docentelist
  
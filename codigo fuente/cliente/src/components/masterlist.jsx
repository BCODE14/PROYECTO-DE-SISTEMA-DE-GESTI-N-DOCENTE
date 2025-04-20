
import { useEffect, useState } from "react"
import {getAllmaster}from '../api/docente.api'
import {Cartmaster}from './masfromtab'
import { Link } from "react-router-dom";
import {Cartitulo,Cartitulo_semestre,Cartitulo_semestre_dos} from  "./cartitulo";
import{Menu} from "./menu.jsx";

export function Masterlist() {

  const [masters,setMaster]=useState([]);

  useEffect(()=>{
    console.log("pagina cargada")
    async function loadocente(){
      const res= await getAllmaster()
      setMaster(res.data);
    }
    loadocente();
  },[]);

  return (

    <div className="grid grid-cols-4 ">

        <Menu/>
        
          <div className="justify-between w-fit col-span-3">

                <div className=" flex justify-end py-2 bg-white px-3 py-2 rounded-lg text-white font-light  ">
                <div> <button className="bg-blue px-3 py-2 rounded-lg hover:bg-bluelit ml-3">
                    <Link className="bg-blue px-3 py-2 rounded-lg text-white font-light hover:bg-bluelit " to="/master-create"> + Agregar Curso </Link>
                    </button></div>
                <div> <button className="bg-blue px-3 py-2 rounded-lg hover:bg-bluelit ml-3">
                    <Link className="bg-blue px-3 py-2 rounded-lg text-white font-light hover:bg-bluelit " to="/master-create"> + Agregar Docente </Link>
                    </button></div>
                <div> <button className="bg-blue px-3 py-2 rounded-lg hover:bg-bluelit ml-3">
                    <Link className="bg-blue px-3 py-2 rounded-lg text-white font-light hover:bg-bluelit " to="/master-create"> + Agregar Oficio </Link>
                    </button></div>
                </div>

                <Cartitulo_semestre></Cartitulo_semestre>
                <br></br>
                    <Cartitulo/>
                   

                <div className="flex flex-col justify-center mt-5" >
                    { masters.map(docente => (
                    <Cartmaster key={docente.id} docente={docente}/>
                    ))}
                </div>

          </div>

    </div>


  );

  }
  
  export default Masterlist;
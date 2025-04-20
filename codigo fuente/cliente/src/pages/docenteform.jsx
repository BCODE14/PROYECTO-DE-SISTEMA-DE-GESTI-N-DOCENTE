

import{useForm} from "react-hook-form"
import { agregarDocente } from "../api/docente.api";
import { useNavigate , useParams} from "react-router-dom";
import { eliminarDocente, actualizarDocente ,getDocente} from "../api/docente.api";

import { useEffect } from "react";

import {toast} from "react-hot-toast";

export function Docentefrom() {

    const{ register, handleSubmit,setValue}= useForm();
    const naviga=useNavigate();
    const param=useParams();
    console.log(param);
    const onSubmit = handleSubmit(async (data) =>{
        console.log(data);

        if(param.id){

            console.log("actualizando")
           await actualizarDocente(param.id,data);
           toast.success("Maestria actualizada",{
            position:"bottom-right",
            style:{
                background:"#304955",
                color:"coral"
            }
        });

        }else{
            const res = await agregarDocente(data);
            console.log(res);
            toast.success("Maestria creada",{
                position:"bottom-right",
                style:{
                    background:"#304955",
                    color:"coral"
                }
            });
        }
        naviga('/docente');
    });

useEffect(()=>{
async function loadoce(){

    if(param.id){
        console.log("obteniendo datos");
       const res=await getDocente(param.id);
        setValue('nom_prog',res.data.nom_prog)
        setValue('anio',res.data.anio)
        setValue('cant_alun',res.data.cant_alun)
        setValue('seccion',res.data.seccion)
    }
}

loadoce();
   
},[])


/*#tene que registrar con el mismo nombre que esta en model*/



    return (
      <div className="max-w-xl mx-auto " >
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Nombre programa" {...register("nom_prog",{required:true})} className="bg-blueli border-blue p-3 rounded-lg block w-full mb-3"/>
            <input type="text" placeholder="Anio" {...register("anio",{required:true})}className="bg-blueli p-3 rounded-lg block w-full mb-3"/>
            <input type="text" placeholder="Cantidad de alummnos" {...register("cant_alun",{required:true})} className="bg-blueli p-3 rounded-lg block w-full mb-3"/>
            <input type="text" placeholder="Seccion" {...register("seccion",{required:true})} className="bg-blueli p-3 rounded-lg block w-full mb-3" />
            <button className="bg-blue text-white font-light hover:bg-bluelit p-3 rounded-lg block w-full mt-3">Guardar</button>
        </form>
   
        {
            param.id && (<button onClick={async()=>{

                const accepted=window.confirm("estas seguro de elimnar");
                if(accepted){
                    await eliminarDocente(param.id);

                    toast.success("Maestria eliminada",{
                        position:"bottom-right",
                        style:{
                            background:"#304955",
                            color:"coral"
                        }},);
                   
                    naviga('/docente');
                }

            }} className="bg-blue p-3  text-white font-light hover:bg-red rounded-lg block w-full mt-3">Eliminar</button>
        )}

      </div>
    )
  }
  
  export default Docentefrom
  
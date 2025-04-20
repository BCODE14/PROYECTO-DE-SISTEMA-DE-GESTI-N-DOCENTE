
import{useForm} from "react-hook-form"
import { useNavigate , useParams} from "react-router-dom";
import { agregarmaster,eliminarmaster, actualizarmaster ,getmaster} from "../api/docente.api";

import { useEffect } from "react";

import {toast} from "react-hot-toast";

export function Masterfrom() {

    const{ register, handleSubmit,setValue}= useForm();
    const naviga=useNavigate();
    const param=useParams();
    console.log(param);
    const onSubmit = handleSubmit(async (data) =>{
        console.log(data);

        if(param.id){

            console.log("actualizando")
           await actualizarmaster(param.id,data);
           toast.success("Curso actualizado",{
            position:"bottom-right",
            style:{
                background:"#304955",
                color:"coral"
            }
        });

        }else{
            const res = await agregarmaster(data);
            console.log(res);
            toast.success("Curso creada",{
                position:"bottom-right",
                style:{
                    background:"#304955",
                    color:"coral"
                }
            });
        }
        naviga('/masterpage');
    });

useEffect(()=>{
async function loadoce(){

    if(param.id){
        console.log("obteniendo datos");
       const res=await getmaster(param.id);
        setValue('oficio',res.data.oficio)
        setValue('curso',res.data.curso)
        setValue('cred',res.data.cred)
        setValue('docente',res.data.docente)
        setValue('fecha_i',res.data.fecha_i)
        setValue('fecha_f',res.data.fecha_f)
        setValue('clases',res.data.clases)
        setValue('estado',res.data.estado)
    }
}

loadoce();
   
},[])


/*#tene que registrar con el mismo nombre que esta en model*/



    return (
      <div className="max-w-xl mx-auto " >
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Oficio" {...register("oficio",{required:false})} className="bg-blueli border-blue p-3 rounded-lg block w-full mb-3"/>
            <input type="text" placeholder="Curso" {...register("curso",{required:false})}className="bg-blueli border-blue p-3 rounded-lg block w-full mb-3"/>
            <input type="text" placeholder="Creditos" {...register("cred",{required:false})} className="bg-blueli border-blue p-3 rounded-lg block w-full mb-3"/>
            <input type="text" placeholder="Docente" {...register("docente",{required:false})} className="bg-blueli border-blue p-3 rounded-lg block w-full mb-3" />
            <input type="text" placeholder="Fecha Inicio" {...register("fecha_i",{required:false})} className="bg-blueli border-blue p-3 rounded-lg block w-full mb-3" />
            <input type="text" placeholder="Fecha Fin" {...register("fecha_f",{required:false})} className="bg-blueli border-blue p-3 rounded-lg block w-full mb-3" />
            <input type="text" placeholder="Clases" {...register("clases",{required:false})} className="bg-blueli border-blue p-3 rounded-lg block w-full mb-3" />
            <input type="text" placeholder="Estado" {...register("estado",{required:false})} className="bg-blueli border-blue p-3 rounded-lg block w-full mb-3" />
            <button className="bg-blue text-white font-light hover:bg-bluelit p-3 rounded-lg block w-full mt-3">Guardar</button>
        </form>
   
        {
            param.id && (<button onClick={async()=>{

                const accepted=window.confirm("Estas seguro de eliminar");
                if(accepted){
                    await eliminarmaster(param.id);

                    toast.success("curso eliminada",{
                        position:"bottom-right",
                        style:{
                            background:"#304955",
                            color:"coral"
                        }},);
                   
                    naviga('/masterpage');
                }

            }} className="bg-blue p-3  text-white font-light hover:bg-red rounded-lg block w-full mt-3">Eliminar</button>
        )}

      </div>
    )
  }
  
  export default Masterfrom
  
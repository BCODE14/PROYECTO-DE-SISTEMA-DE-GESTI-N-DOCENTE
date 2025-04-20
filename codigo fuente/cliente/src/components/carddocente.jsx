


import { useNavigate } from "react-router-dom";



export function Cartdocente({docente}) {

const navigate=useNavigate()

    return (

      <div>
          <div className="bg-white text-blue p-3 hover:bg-zinc-700 hover:cursor-pointer text-center rounded-lg border-solid border-2 border-blue" onClick={()=>{navigate('/masterpage ')}}>
                        <h1>{docente.nom_prog}</h1>
                        <h2>{docente.anio}</h2>
                        <p>Grupo: {docente.seccion}</p>

                        <p>Cantidad Alumnos:{docente.cant_alun}</p>
                  </div>
      
          <div className="bg-blue text-white p-3 hover:bg-bluelit hover:cursor-pointer rounded-lg text-center mt-2" onClick={()=>{navigate('/docente/'+ docente.id)}}>Modificar</div>

      </div>
        
    );
  }
  
  export default Cartdocente;


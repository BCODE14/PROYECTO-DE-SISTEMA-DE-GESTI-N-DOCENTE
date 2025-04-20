
import { Link } from "react-router-dom";



export function Iniciarsesion() {
    
    return (
        <div className="flex justify-between rounded-lg bg-blue text-white p-3 hover:bg-zinc-700 hover:cursor-pointer">
            <form >
                <input type="text" placeholder="Usuario"  className="bg-blueli border-blue p-3 rounded-lg block w-full mb-3"/>
                <input type="text" placeholder="Contraseña" className="bg-blueli p-3 rounded-lg block w-full mb-3"/>
                <Link className="flex flex-col justify-center mr-5" to="/home ">iniciar</Link>
                
            </form>
      </div>
    );
  }
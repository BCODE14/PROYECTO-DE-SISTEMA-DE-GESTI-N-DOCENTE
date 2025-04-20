import { Link } from "react-router-dom";

import logo from "../img/logo.png";
import user from "../img/user.jpg";

export function Navi(){
    return(
        <div className="flex justify-between py-3">

            <div className="flex space-between py-2">
                    <Link className="flex flex-col justify-center mr-5" to="/home ">
                    <img src={logo}></img>
                    </Link>
                    {/*<Link className="font-bold text-3x1 mb-4" to="/docente"></Link>*/}
                    <div className="flex flex-col justify-center">
                        <h1 className="font-sans text-blue">Hello, Sybil Gutierres Flores</h1>
                        <h4 className="text-sm font-light text-blue">Sistema de Gestion Docente</h4>
                    </div>
            </div>
           
            {/*<button className="bg-indigo-500 px-3 py-2 rounded-lg">
            <Link to="/docente-create">Crear Maestria</Link>
    </button>*/}

            <div className="flex justify-end border-l-2 border-blue">
            <img src={user} className="rounded-full w-14 h-14 ml-5 "></img>
            <div className="flex flex-col justify-center ml-5">
                <h1 className="font-sans text-blue">Sybil Gutierres Flores</h1>
                <h4 className="text-sm font-light text-blue">Admin</h4>
            </div>
            </div>
        
        </div>

    )

}
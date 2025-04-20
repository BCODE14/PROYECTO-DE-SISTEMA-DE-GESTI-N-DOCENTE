import { Link } from "react-router-dom";

import home from "./img/home.png";
import gor from "./img/gorro.png";
import grp from "./img/ico.png";
import doc from "./img/user.png";
import dit from "./img/dir.png";
import ofic from "./img/of.png";


export function Menu(){
    return(
        <div className="flex flex-col justify-center mr-5 flex-initial w-72 ">
          
            {/*
              <Link className="font-bold text-3x1 mb-4" to="/home">logo</Link>
            <Link className="font-bold text-3x1 mb-4" to="/docente"></Link>*/}
            <div className="flex">
                <img src={home} className="w-8 h-8" ></img>
                <Link className="font-bold text-blue text-3x1 font-light my-2 ml-3 hover:text-bluelit" to="/home">INICIO</Link>
                
            </div>

            <div className="flex bg-blue">
            <img src={gor} className="w-8 h-8" ></img>  
            <Link className="font-bold text-white font-light text-3x1 my-2 ml-3 hover:text-bluelit" to="/docente">MAESTRIAS</Link>
                
            </div>

            <div className="flex">
                <img src={grp} className="w-8 h-8" ></img>  
                <Link className="font-bold text-blue text-3x1 font-light my-2 ml-3 hover:text-bluelit" to="/masterpage">MAGP</Link>
            </div>

            <div className="flex">
                <img src={grp} className="w-8 h-8" ></img> 
                <Link className="font-bold text-blue text-3x1 font-light my-2 ml-3 hover:text-bluelit" to="/masterpage"> MAGE</Link> 
               
            </div >

            <div className="flex">
                <img src={grp} className="w-8 h-8" ></img>  
                <Link className="font-bold text-blue text-3x1 font-light my-2 ml-3 hover:text-bluelit" to="/masterpage">   MADC</Link>
             
            </div>
            <div className="flex">
                <img src={grp} className="w-8 h-8" ></img>  
                <Link className="font-bold text-blue text-3x1 font-light my-2 ml-3 hover:text-bluelit" to="/masterpage">MADP</Link>
                
            </div>
            <div className="flex">
                <img src={grp} className="w-8 h-8" ></img>  
                <Link className="font-bold text-blue text-3x1 font-light my-2 ml-3 hover:text-bluelit" to="/masterpage"> MACA</Link>
               
            </div>
            <div className="flex bg-blue">
                <img src={gor} className="w-8 h-8" ></img>  
                <Link className="font-bold text-white font-light text-3x1 my-2 ml-3 hover:text-bluelit" to="/docente">DOCTORADOS</Link>
                    
            </div>

            <div className="flex">
                <img src={grp} className="w-8 h-8" ></img>  
                <Link className="font-bold text-blue text-3x1 font-light my-2 ml-3 hover:text-bluelit" to="/masterpage">DOAD</Link>
            </div>
            <div className="flex">
                <img src={grp} className="w-8 h-8" ></img>  
                <Link className="font-bold text-blue text-3x1 font-light my-2 ml-3 hover:text-bluelit" to="/masterpage">DOCCF</Link>
                
            </div>
            <div className="flex">
                <img src={doc} className="w-8 h-8" ></img>  
                <Link className="font-bold text-blue text-3x1 font-light my-2 ml-3 hover:text-bluelit" to="/masterpage"> DOCENTE</Link>
               
            </div>
            <div className="flex">
                <img src={dit} className="w-8 h-8" ></img>  
                <Link className="font-bold text-blue text-3x1 font-light my-2 ml-3 hover:text-bluelit" to="/masterpage">DIRECTORIO</Link>
                
            </div>
            <div className="flex">
                <img src={ofic} className="w-8 h-8" ></img>  
                <Link className="font-bold text-blue text-3x1 font-light my-2 ml-3 hover:text-bluelit" to="/masterpage"> OFICIOS</Link>
                
            </div>

        
        </div>

    )

}
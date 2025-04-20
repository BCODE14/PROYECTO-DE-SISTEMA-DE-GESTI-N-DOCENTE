






import { useNavigate } from "react-router-dom";
import fon1 from "./img/ge.png"
import fon2 from "./img/gp.png"
import fon3 from "./img/dc.png"
import fon4 from "./img/pe.png"
import fon5 from "./img/au.png"
import fon6 from "./img/da.png"
import fon7 from "./img/dcc.png"

export function Cartmaestria() {

    const navigate=useNavigate()
    
        return (
            <div className=" flex flex-col justify-between bg-blue text-white font-light hover:bg-bluelit p-0  hover:cursor-pointer text-center rounded-lg m-5" onClick={()=>{navigate('/docente/')}}>
                    <p className="m-3">MAGP</p> 
                    <img src={fon1} className="w-100 h-100  " ></img>
                    <h2 className="m-3" >MAESTRIA EN GERENCIA PUBLICA</h2>
            </div>
        );
      }

export function Cartmaestria_e() {

        const navigate=useNavigate()
        
            return (
                <div className=" flex flex-col justify-between bg-blue text-white font-light hover:bg-bluelit p-0  hover:cursor-pointer text-center rounded-lg m-5"  onClick={()=>{navigate('/docente/')}}>
                <p className="m-3">MAGE</p> 
                <img src={fon2} className="w-100 h-100  " ></img>
                <h2 className="m-3">MAESTRIA EN GESTION EMPRESARIAL</h2>
                </div>
            );
          }
export function Cartmaestria_dc() {

            const navigate=useNavigate()
            
                return (
                    <div className=" flex flex-col justify-between bg-blue text-white font-light hover:bg-bluelit p-0  hover:cursor-pointer text-center rounded-lg m-5"  onClick={()=>{navigate('/docente/')}}>
                    <p className="m-3">MADC</p> 
                    <img src={fon3} className="w-100 h-100  " ></img>
                    <h2 className="m-3">MAESTRIA EN DERECHO CIVIL Y COMERCIAL</h2>
                    </div>
                );
              }
export function Cartmaestria_dp() {

                const navigate=useNavigate()
                
                    return (
                        <div className=" flex flex-col justify-between bg-blue text-white font-light hover:bg-bluelit p-0  hover:cursor-pointer text-center rounded-lg m-5"  onClick={()=>{navigate('/docente/')}}>
                        <p className="m-3">MADP</p> 
                        <img src={fon4} className="w-100 h-100  " ></img>
                        <h2 className="m-3">MAESTRIA EN DERECHO PENAL Y PROCESAL PENAL</h2>
                        </div>
                    );
                  }
export function Cartmaestria_ca() {

                    const navigate=useNavigate()
                    
                        return (
                            <div className=" flex flex-col justify-between bg-blue text-white font-light hover:bg-bluelit p-0  hover:cursor-pointer text-center rounded-lg m-5"  onClick={()=>{navigate('/docente/')}}>
                            <p className="m-3">MACA</p> 
                            <img src={fon5} className="w-100 h-100  " ></img>
                            <h2 className="m-3">MAESTRIA EN CONTABILIDAD:AUDITORIA</h2>
                            </div>
                        );
                      }
export function Cartmaestria_da() {

                        const navigate=useNavigate()
                        
                            return (
                                <div className=" flex flex-col justify-between bg-blue text-white font-light hover:bg-bluelit p-0  hover:cursor-pointer text-center rounded-lg m-5"  onClick={()=>{navigate('/docente/')}}>
                                <p className="m-3">DOAD</p> 
                                <img src={fon6} className="w-100 h-100  " ></img>
                                <h2 className="m-3">DOCTORADO EN ADMINISTRACION</h2>
                                </div>
                            );
                          }
export function Cartmaestria_cf() {

                            const navigate=useNavigate()
                            
                                return (
                                    <div className=" flex flex-col justify-between bg-blue text-white font-light hover:bg-bluelit p-0  hover:cursor-pointer text-center rounded-lg m-5"  onClick={()=>{navigate('/docente/')}}>
                                    <p className="m-3">DOCCF</p> 
                                    <img src={fon7} className="w-100 h-100  " ></img>
                                    <h2 className="m-3">DOCTORADO EN CIENCIAS CONTABLES Y FINANCIERAS</h2>
                                    </div>
                                );
                              }
                                                                      
              

  
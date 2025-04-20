
export function Cartitulo() {
    
    return (
        <div className="flex justify-between rounded-lg bg-blue text-white p-3 hover:bg-zinc-700 hover:cursor-pointer">
            <div className="flex justify-between bg-blue font-light rounded-lg">
                <p className="ml-2 mr-2">OFICIO</p>
                <p className="ml-2 mr-2">CURSO</p>
                <p className="ml-2 mr-2">CRED</p>
                <p className="ml-2 mr-2">DOCENTE</p>
                <p className="ml-2 mr-2">FECHA INICIO</p>
                <p className="ml-2 mr-2">FECHA FINAL</p>
                <p className="ml-2 mr-2">CLASES</p>
                <p className="ml-2 mr-2">ESTADO</p>
                <p className="ml-2 mr-2">PROPIEDADES</p>
            </div>
      </div>
    );
  }
  
  export function Cartitulo_semestre() {
    
    return (
        <div className="flex justify-center bg-blue font-light rounded-lg text-white mt-5 text-xl">
        PRIMER SEMESTRE
      </div>
    );
  }

  export function Cartitulo_semestre_dos() {
    
    return (
        <div className="flex justify-center bg-blue font-light rounded-lg text-white mt-5 text-xl">
        SEGUNDO SEMESTRE
      </div>
    );
  }
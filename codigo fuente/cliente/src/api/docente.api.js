




import axios from 'axios';

const docenteapi=axios.create({

    baseURL:'http://127.0.0.1:8000/docente/api/v1/docente/',

});

export const getAllDocente=()=>docenteapi.get('/');

export const getDocente=(id)=>docenteapi.get('/'+id+'/');

export const agregarDocente =(doce)=>docenteapi.post('/', doce);

export const eliminarDocente =(id)=>docenteapi.delete('/'+id);

export const actualizarDocente =(id,docente)=>docenteapi.put('/'+id+'/',docente);


const masterapi=axios.create({

    baseURL:'http://127.0.0.1:8000/docente/api/v1/plan/',
   

});

export const getAllmaster=()=>masterapi.get('/');

export const getmaster=(id)=>masterapi.get('/'+id+'/');

export const agregarmaster =(doce)=>masterapi.post('/', doce);

export const eliminarmaster =(id)=>masterapi.delete('/'+id);

export const actualizarmaster =(id,docente)=>masterapi.put('/'+id+'/',docente);

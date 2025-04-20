
import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";
import {Docentepage}from "./pages/docentepage.jsx";
import{Docentefrom} from "./pages/docenteform.jsx";

import {Navi}from "./components/nav.jsx";

import {Toaster} from "react-hot-toast";
import { Home } from "./pages/home.jsx";


import{Masterpage}from "./pages/pagemaster.jsx";
import{Masterfrom}from "./pages/masterfrom.jsx";


function App() {
  return (
    <BrowserRouter>

        <div className="container mx-auto">
        
        <Navi/>
            <Routes>
            
            <Route path="/" element={<Navigate to="/inicio" />}/>
         
            <Route path="/home" element={<Home/>}/>
            <Route path="/docente" element={<Docentepage />}/>
            <Route path="/masterpage" element={<Masterpage />}/>
            <Route path="/docente-create" element={<Docentefrom />}/>
            <Route path="/docente/:id" element={<Docentefrom />}/>
            <Route path="/master-create" element={<Masterfrom />}/>
            <Route path="/masterpage/:id" element={<Masterfrom />}/>
          
            </Routes>
            <Toaster/>
        </div>

   
    
    </BrowserRouter>
  )
}

export default App
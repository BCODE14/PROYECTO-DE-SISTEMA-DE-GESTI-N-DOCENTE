











import {Cartmaestria, Cartmaestria_e,Cartmaestria_dc,Cartmaestria_dp,Cartmaestria_ca,Cartmaestria_da,Cartmaestria_cf} from '../components/cardmaestria'



export function Home() {
    return (
        <div className="grid grid-cols-4 grap-20 ">

            <Cartmaestria/>
            <Cartmaestria_e/>
            <Cartmaestria_ca/>
            <Cartmaestria_dc/>
            <Cartmaestria_dp/>
            <Cartmaestria_da/>
            <Cartmaestria_cf/>

        </div>
      
    )
  }
  
  export default Home
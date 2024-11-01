import React from 'react'
import Hero from '../components/Certificaciones/Hero'
import Quienes from '../components/Conocenos/Quienes'
import MisionVision from '../components/Conocenos/MisionVision'
import Valores from '../components/Conocenos/Valores'
import Permisos from '../components/Certificaciones/Permisos'
import Redes from '../components/Home/Redes' 

function Conocenos() {
  return (
    <div>
        <Hero/>
       <Permisos/>
       <Redes/>
    </div>
  )
}

export default Conocenos
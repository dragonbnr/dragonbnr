import React, { useState } from 'react'
import Hero from '../components/Contacto/Hero'
import Experiencia from '../components/Contacto/Experiencia'  
import Cotizar from '../components/Contacto/Cotizar';
import Bolsa from '../components/Contacto/Bolsa';

function Conocenos() {
  const [form, setForm] = useState("");
  return (
    <div>
        <Hero/>
       <Experiencia
        setForm={setForm}
        form={form}
       />
       {
          form === "cotizar" && <Cotizar />
        }
        {
          form === "bolsa" && <Bolsa />

       }
    </div>
  )
}

export default Conocenos
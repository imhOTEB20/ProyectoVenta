import { useState } from 'react'
import WhatsAppButton from 'react-whatsapp-button';

import Button from './Button'
import ImageCarousel from './ImageCarousel';
import Specifics from './Specifics';

import './styles/App.css'

import imgOff from './assets/Apagado.jpg';
import imgOn from './assets/Encendido.jpg';
import imgClosed from './assets/Cerrado.jpg';

function App() {
  const interactions = {
    "carousel":(<ImageCarousel images={[imgOff, imgOn, imgClosed]}/>),
    "specifics":(<Specifics/>)
  }

  const [interection, setInteraction] = useState("carousel");

  const handleCarouselButton = () => {
    setInteraction("carousel");
  }

  const handleSpecificsButton = () => {
    setInteraction("specifics");
  }

  return (
    <>
      <div className='titulo'>
        <p className='title is-1'>Netbook a la venta</p>
        <p className='subtitle is-3'>Modelo G3</p>
      </div>
      <div>
        <div className='grid'>
          <Button action={handleCarouselButton} title="Imagenes"></Button>
          <Button action={handleSpecificsButton} title="Caracteristicas"></Button>
        </div>
        {interactions[interection]}
      </div>
      <WhatsAppButton
        phoneNumber="3874699819"
        message="Hola! Quisiera saber el precio de la netbook G3 de la publicacion."
        buttonText="Enviar un mensaje"
        countryCode="AR"
      />
    </>
  )
}

export default App

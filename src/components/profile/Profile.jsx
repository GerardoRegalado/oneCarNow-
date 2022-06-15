import React from 'react'
import Header from './../Layout/Header'
export default function Profile() {
  return (
    <>
    <Header />
    <div className='titular'>
        <div className='profilePicture'></div>
        <div className='profileUser'> Bienvenido 'usuario'</div>
        <div className='profileCar'>Marca - Modelo - Año</div>
    </div>

   
    </>
  )
}

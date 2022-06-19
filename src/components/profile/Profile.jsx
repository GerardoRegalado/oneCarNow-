import React from 'react'
import Header from './../Layout/Header'
export default function Profile() {
  return (
    <>
    <Header />
      <div className='data'>
        <div>
          <img src="assets/wprofile.jpeg" alt="aqui va algo" />
          <h4>Bienvenido ...</h4> 
          <p>Nissan Sentra 2022</p>
        </div>
      </div>
      <section className='menu'>
        <div className='invoice_info'> 
            <p>T78-BCX</p>
            <span>No. 1050</span>
        </div>
        <div className='services'>
            <div className="service">
              <img src="assets/Herramientas.png" alt="" />
              <span>Servicios</span>
            </div>
            <div className="service">
              <img src="assets/seguro.png" alt="" />
              <span>Seguro</span>
            </div>
            <div className="service">
              <img src="assets/Contrato.png" alt="" />
              <span>Contrato</span>
            </div>
            <div className="service">
              <img src="assets/Factura.png" alt="" />
              <span>Factura</span>
            </div>
            <div className="service">
              <img src="assets/Tarjeta.png" alt="" />
              <span>Tarjeta</span>
            </div>
            <div className="service">
              <img src="assets/Kilometraje.png" alt="" />
              <span>Kilometraje</span>
            </div>
        </div>
        <div className="rectangle11">
  
            <img src="assets/Dinero.png" alt="" />
            <p>Pago del auto</p>
          <div className='options'>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className='total'>
            <span>$3,200.00</span>
            <div> Pagar ahora</div>
          </div>
          <div className="limit_date">
            <div> Fecha Limite </div>
            <span>10-jun-2022</span>
          </div>
        </div>
        <div className="incident">
          <span>Incidente</span>
        </div>
      </section>

   
    </>
  )
}

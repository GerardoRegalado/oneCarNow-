import React from 'react'

export default function navAdmin() {
  return (
    <>
    <div id="nav"> 
   <img src="assets/logo.svg" alt="" />
   <ul>
      <li><i class="bi bi-house-fill"></i><a href="#">Dashboard</a></li>

      <li><i class="bi bi-wallet-fill"></i><a href="#">Contratos</a></li>
      <li><i class="bi bi-tools"></i><a href="#">Talleres</a></li>
      <li><i class="bi bi-circle-fill"></i><a href="#">Flotilla</a></li>
      <li><i class="bi bi-shop"></i><a href="#">Pagos</a></li>
      <li><i class="bi bi-currency-exchange"></i><a href="#">Contabilidad</a></li>

   </ul>
</div>
    </>
  )
}

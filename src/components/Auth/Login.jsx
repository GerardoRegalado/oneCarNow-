// ./src/components/Auth/Login.js
import {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import UsersContext from '../../context/Users/UsersContext'


export default function Login() {

  const ctxUser = useContext(UsersContext)

  const {
    loginUser
  } = ctxUser


  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (event) => {

    setData({
      ...data,
      [event.target.name]: event.target.value
    })

  }

  const handleSubmit = (event) => {
    
    event.preventDefault()

    loginUser(data)

  }




  return (
	  <>
      <section className='fondo'>
        <figure className='OCNblanco'>
          <img src="assets/OCNblanco.png" alt="aqui va algo" />
        </figure>
        <figure className='NetaV'>
          <img src="assets/NetaV.png" alt="" />
        </figure>
        <div className="rectangulo">
          <div className='Bienvenido'>Bienvenido de nuevo!</div>
          <div className="iniciar">Inicia sesion a tu cuenta</div>
                <input className='input_email' name='email' value={data.email} onChange={(evt) => { handleChange(evt)}}  placeholder="Token"/>
                <input className='input_pass' name='password' type="password" value={data.password} onChange={(evt) => { handleChange(evt)}} placeholder="Contraseña"/>
          <div className="forgot">Olvido la contraseña? </div>
          <Link to='/profile'><button className='boton'>Iniciar sesion</button></Link> 
        </div>
      </section>
      
    </>
  )
}
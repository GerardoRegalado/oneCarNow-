import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UsersContext from '../../context/Users/UsersContext'


export default function Header() {

    const ctxUser = useContext(UsersContext)

    const { 
        logoutUser,
        currentUser,
        authStatus 
    
    } = ctxUser


	function Menu(){

		var navMenu = document.querySelector('.navMenu')
		navMenu.classList.toggle('active')

	   
   }

  return (
    <>
        <header className='header'>
            <figure>
               <Link to="/"><img src="assets/OCNblanco.png" alt="aqui va algo" /></Link>
            </figure>
			<div className='navMenu' onClick={()=>{Menu()}}>
            	<span></span>
                <span></span>   
				<span></span>
             </div>
		</header>

                {/* { <nav>   
                    <ul>

                        {
						authStatus ?
						(
							<>
								<li>
									<Link to="/"onClick={() => {logoutUser()}}> Cerrar sesión		</Link>
								</li>

								<li>{currentUser.name}</li>
							</>
						) :
						(
							<>
								<li>
									<Link
										to="/registro"
									>
									Crear cuenta
									</Link>
								</li>
								<li>
									<Link
										to="/login"
									>
									Iniciar sesión
									</Link>
								</li>
							</>
						)

					}
                    
                    </ul>
                </nav> } */}

       
    </>
  )
}

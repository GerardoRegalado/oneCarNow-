// ./src/components/Home/Home.js

// ./src/components/Home/Home.js

import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import PetsContext from './../../context/Pets/PetsContext'

import UsersContext from './../../context/Users/UsersContext'


export default function Home() {

	const ctxPets = useContext(PetsContext)

	const {
		pets,
		getPets,
		createPet
	} = ctxPets

	const ctxUsers = useContext(UsersContext)

	const {
		currentUser,
		verifyingToken
	} = ctxUsers


	console.log(ctxUsers)

	const [newPet, setNewPet] = useState({
		name: "",
		description: ""
	})

	const handleChange = (event) => {

		setNewPet({
			...newPet,
			[event.target.name]: event.target.value
		})

	}


	const handleSubmit = (event) => {	
		event.preventDefault()

		createPet(newPet)

	}


  return (
	<>
		<section className='container'>
			<div className='inicio'>
				<div className="titular">
					
						<img src="logo.svg" alt="aqui deberia ir algo" />
					
				</div>
				<div className='login'>
					<Link to='/login'>
						<div className='boton-uno'> Iniciar sesion</div>
					</Link>
				</div>
					<p> 
						Plataforma unica para actuales conductores
					</p>
					<Link to= '/comenzar'>
						<div className='comenzar'>
						comenzar proceso
						</div>
					</Link>
				
			</div>	
		</section>
		
	</>
  )
}
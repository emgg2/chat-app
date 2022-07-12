import React, { useContext, useState } from 'react'
//import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import '../css/login-register.css'
import { AuthContext } from '../auth/AuthContext'
import Swal from 'sweetalert2'

export const RegisterPage = () => {

	const { register } = useContext( AuthContext );
	const [ form, setForm ] = useState({
		email: '',
		password: '',
		name:''
	});

	const onChange = ({target}) => {
		const { name, value } = target;
		setForm({
			...form,
			[name]: value
		})
	}

	const onSubmit = async (ev) => {
		ev.preventDefault();
		const { email, password, name } = form;
		const ok = await register (name, email, password);
		if ( !ok ) {
			Swal.fire('Error', 'Error registering user');
		}
	}
	
	const allOK =  () => {
		return ( form.email.length > 0 && form.password.length > 0 && form.name.length >0 ) ? true : false;
	} 
  return (
    <div className="limiter">
		  <div className="container-login100">
			  <div className="wrap-login100 p-t-50 p-b-90">
        <form 
			className="login100-form validate-form flex-sb flex-w"
			onSubmit={ onSubmit }
		>
					<span className="login100-form-title mb-3">
						Chat - Registro
					</span>

					<div className="wrap-input100 validate-input mb-3">
						<input
							 className="input100"
							 type="text"
							 name="name"
							 placeholder="Nombre" 
							 value={ form.name }
							 onChange={ onChange }
						/>
						<span className="focus-input100"></span>
					</div>

					
					<div className="wrap-input100 validate-input mb-3">
						<input 
							className="input100"
							type="email"
							name="email"
							placeholder="Email" 
							value={ form.email }
							onChange={ onChange }
						/>
						<span className="focus-input100"></span>
					</div>
					
					
					<div className="wrap-input100 validate-input mb-3">
						<input 
							className="input100" 
							type="password" 
							name="password" 
							placeholder="Password" 
							value={ form.password }
							onChange={ onChange }
						/>
						<span className="focus-input100"></span>
					</div>
					
					<div className="row mb-3">
						<div className="col text-right">
							<Link to='/auth/login' class="txt1">
								Ya tienes cuenta?
							</Link>
						</div>
					</div>

					<div class="container-login100-form-btn m-t-17">
						<button 
							type='submit'
							className="login100-form-btn"
							disabled={ !allOK() }
						>
							Crear cuenta
						</button>
						
					</div>

				</form>
        </div>
      </div>
     </div>
  )
}

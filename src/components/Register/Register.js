import React from 'react';


class Register extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			onNameRegister: '',
			onEmailRegister: '',
			onPasswordRegister: ''
		}
	}

	onNameInput = (event) => {
		this.setState({onNameRegister: event.target.value})
	}

	onEmailInput = (event) => {
		this.setState({onEmailRegister: event.target.value})
	}

	onPasswordInput = (event) => {
		this.setState({onPasswordRegister: event.target.value})
	}

	onRegistrationSubmit = () =>{
		fetch('http://localhost:3000/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: this.state.onNameRegister,
				email: this.state.onEmailRegister,
				password: this.state.onPasswordRegister
			})
		})
		.then(response => response.json())
	 	.then(user => {
	 		if(user.id){
	 			this.props.loadUsers(user)
	 			this.props.onSignedIn('home');
	 		}
	 	})
	}


	render(){
		return (
	 		<div className="br3 shadow-5 mv4 w-100 w-50-m v-25-1 mw5 center">
	 			<main className="pa4 black-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f2 fw6 ph0 mh0 center">Register</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
				        <input onChange={this.onNameInput} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" required/>
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input onChange={this.onEmailInput} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" required/>
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input onChange={this.onPasswordInput} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" required/>
				      </div>
				    </fieldset>
				    <div className="center">
				      <input onClick={this.onRegistrationSubmit} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
				    </div>
				    
				  </div>
				</main>
		 	</div>
	 	); 	
	}
 	

}


export default Register;
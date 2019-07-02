import React from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import ImageInput from './components/ImageInput/ImageInput';
import FaceRecongnition from './components/FaceRecongnition/FaceRecongnition';
import SignIn from './components/Registration/signIn';
import Register from './components/Register/Register';
import './app.css';


const ParticlesOptions = {
	particles: {
		number: {
			value: 30,
			density: {
				enable: true,
				value_area: 100
			}
				
		}
	}, 
	interactivity: {
		onhover: {
			enable: true,
			mode: "repulse"
		}
	}  
}

const initialState = {
	input: '',
	imageUrl: '',
	box: {},
	route: 'signIn',
	isSignedIn: false,
	user: {
		id: '4',
		name: '',
		email: '',
		entries: 0,
		joined: ''		
	}			
}

class App extends React.Component{
	constructor(){
		super()
		this.state = initialState

	}

	loadUsers = (data) => {
		this.setState({user: 
			{
				id: data.id,
				name: data.name,
				email: data.email,
				entries: data.entries,
				joined: data.joined
			}
		})
	}

	componentDidMount(){
		fetch('http://localhost:3000').then(response => response.json()).catch(console.log);
	} 

	calculateFaceBox = (data) => {
		const calculateBox = data.outputs[0].data.regions[0].region_info.bounding_box;
		const image = document.getElementById('image');
		const width = Number(image.width);
		const height = Number(image.height);
		return{
			leftCol: calculateBox.left_col * width,
			topRow: calculateBox.top_row * height,
			rightCol: width - (calculateBox.right_col * width),
			bottomRow: height - (calculateBox.bottom_row * height )
		}
	}

	displayFaceBox = (box) => {
		console.log(box);
		this.setState({box: box});
	}
	onInputChange = (event) => {

		this.setState({input: event.target.value});
	}

	onButtonClick = () => {
		this.setState({imageUrl: this.state.input})
		fetch('http://localhost:3000/imageUrl', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				input: this.state.input
			})
		})
		.then(response => response.json())
		.then(response => {
			if(response){
				fetch('http://localhost:3000/image', {
					method: 'put',
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify({
						id: this.state.user.id
					})
				}).then(response => response.json())
				.then(count => {
						this.setState(Object.assign(this.state.user, {entries: count}))
				}).catch(console.log)
			}
			this.displayFaceBox(this.calculateFaceBox(response))
		})
		.catch(err => console.log(err))
	}

	onSignedIn = (route) =>{  
		if(route === 'signIn'){
			this.setState(initialState)
		}else if(route === 'home'){
			this.setState({isSignedIn: true})		
		}
		this.setState({route: route});
	}
 
 render(){
 	return (
 		<div className="App">
	 		<Navigation isSignedIn={this.state.isSignedIn} onSignedIn={this.onSignedIn} />
	 		{ this.state.route === 'home' 
	 			?<div> 
					<Particles className="particles" params={ParticlesOptions}/>
			 		<Rank name={this.state.user.name} entries={this.state.user.entries}/>
			 		<ImageInput  onInputChange={this.onInputChange} onButtonClick={this.onButtonClick}/>
			 		<FaceRecongnition box={this.state.box} imageUrl={this.state.imageUrl}/> 			
		 		</div>
		 		:(
			 		this.state.route === 'signIn' 
			 			? <SignIn  loadUsers={this.loadUsers} onSignedIn={this.onSignedIn}/> 
			 			: <Register loadUsers={this.loadUsers} onSignedIn={this.onSignedIn}/>
			 		
		 		)
 			}
 		</div>	
 		);
 	}
}


export default App;
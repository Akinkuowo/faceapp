import React from 'react';
import Logo from './Logo.png';


const Navigation = ({ onSignedIn, isSignedIn }) => {
 	if(isSignedIn){
 		return (
 			<div>
	 			<div className="center">
		 			<div className="ma4 mt0 w-10 dib">
				 		<p className="">
				 			<img alt="Logo" src={Logo} /> 
				 		</p>
			 		</div>	
			 		<nav className="Navigation tr w-90 dib">
				 		<p onClick={() => onSignedIn('signIn')} className="f5 link dim black pa3 pointer underline">Sign Out </p>
			 		</nav>
		 		</div>	
		 	</div>
 		);
 	}else {
 		return (
 			<div>
	 			<div className="center">
		 			<div className="ma4 mt0 w-50 dib">
				 		<p className="">
				 			<img alt="Logo" src={Logo} /> 
				 		</p>
			 		</div>	
			 		<nav className="Navigation tr w-50 dib">
				 		<p onClick={() => onSignedIn('signIn')} className="f5 link dim black pa3 pointer underline dib">Sign In </p>
				 		<p onClick={() => onSignedIn('Register')} className="f5 link dim black pa3 pointer underline dib">Register </p>
			 		</nav>
		 		</div>	
		 	</div>
 		);
 	}
 			
}


export default Navigation;
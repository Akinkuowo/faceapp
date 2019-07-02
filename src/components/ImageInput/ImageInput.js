import React from 'react';

const ImageInput = ({ onInputChange, onButtonClick }) => {

 	return (
 		<div>
 			<p className="f4 center">
 				{'This App will detect faces in your pictures. Give it a try.'}
 			</p>
 			<div className="center">
	 			<div className="center pa3 br3 shadow-5 ImageInputClass">
			 		<input className="f5 pa2 w-70 center" type="text" onChange={onInputChange} />
			 		<button className="f6 grow link ph3 pv2 dib white bg-light-purple w-30 center" onClick={onButtonClick}>Detect</button>
		 		</div>	
	 		</div>	
	 	</div>
 		); 

}


export default ImageInput;
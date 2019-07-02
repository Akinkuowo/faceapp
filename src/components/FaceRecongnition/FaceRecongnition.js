import React from 'react';
import './FaceRecongnition.css';

const FaceRecongnition = ({ imageUrl, box }) => {

 	return (
 		<div className="center ma">
 			<div className="absolute mt2">
 				<img id="image" alt="" src={imageUrl} width="400px" height="auto"/>
 				<div className="bounding-box" style={{top: box.topRow, right: box.rightCol,
 				 left: box.leftCol, bottom: box.bottomRow }}></div>
 			</div>
	 	</div>
 	); 

}


export default FaceRecongnition;
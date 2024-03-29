import React from 'react';


const Rank = ({ name, entries }) => {

 	return (
 		<div className="center">
 			<div className="f4 white">
 				{`${name}, your current entry count is..`}
	 		</div>
	 		<div className="f3 white">
 				{entries}
	 		</div>
	 	</div>
 	); 
}


export default Rank;
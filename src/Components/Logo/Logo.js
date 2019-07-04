import React from 'react';
import Tilt from 'react-tilt'
import brain from './brain.png'
import './Logo.css'

const Logo = () => {
	return (
	<div className='ma3 mt0'>	
		<Tilt className="Tilt shadow-5" options={{ max : 45 }} style={{ height: 100, width: 100 }} >
 			<div className="Tilt-inner"><img alt='brain' src={brain}/></div>
		</Tilt>
	</div>
	);
}

export default Logo;
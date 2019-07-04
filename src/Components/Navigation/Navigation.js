import React from 'react';



const Navigation = ({onPlaceChange, signedIN}) => {
	
		if(signedIN){
			return (
		<nav style={{display: 'flex', justifyContent : 'flex-end' }}>

		<p onClick={() => onPlaceChange('signout')} className='f3 link dim underline pa3 pointer'> Sign Out </p>

		</nav>
			);
		}
		else{
			return (
		<nav style={{display: 'flex', justifyContent : 'flex-end' }}>

		<p onClick={() => onPlaceChange('signin')} className='f3 link dim underline pa3 pointer'> Sign In </p>

		</nav>
			);
		}
		
}

export default Navigation;
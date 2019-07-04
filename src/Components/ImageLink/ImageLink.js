import React from 'react';
import './ImageLink.css'
const ImageLink = ({onInputChange, onButtonSubmit}) => {
	return (
		<div>
			<p className='f4 b center black'>
			{'Website which detect faces in your picture'}
			</p>
				<div className='center'>
					<div className='form center'>
						<input className='f3 w-70 center'type='text' onChange={onInputChange}/>
						<button className='f3 w-30 grow link white' onClick={onButtonSubmit}>Detect</button>
					</div>	
				</div>
		</div>
	);
}

export default ImageLink;
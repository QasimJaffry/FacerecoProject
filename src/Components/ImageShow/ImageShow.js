import React from 'react';
import './ImageShow.css';

const ImageShow = ({ imageUrl, box }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftSide}}></div>
      </div>
    </div>
  );
}

export default ImageShow;
import React from 'react';
import LoaderGif from '../assets/FYB Loader GIF.gif';

const Loader2: React.FC = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
       <img className='w-96 h-96' src={LoaderGif} alt="Loader"/>
    </div>
  );
}

export default Loader2;


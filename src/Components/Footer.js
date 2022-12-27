import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='fixed bottom-0 w-full h-11 flex justify-center items-center bg-yellow-500 '>
           <div className=''>
           <p className='text-center text-white text-xl'>All rights reserved by Parthive &copy;  {year}</p>
           </div>
        </div>
    );
};

export default Footer;
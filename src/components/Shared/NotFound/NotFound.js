import React from 'react';
import img from './not-found.jpg';

const NotFound = () => {
    return (
        <div>
            <img className='w-25' src={img} alt="" />
            <h3 className='text-center'>Page Not Found</h3>
        </div>
    );
};

export default NotFound;
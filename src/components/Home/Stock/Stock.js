import React from 'react';
import './Stock.css'

const Stock = ({ stock }) => {
    const { name, img, description, price, supplier, quantity } = stock;
    return (
        <div className='shadow rounded'>
            <div className='stock'>
                <img src={img} alt="" />
                <h2>{name}</h2>
                <p>{description}</p>
                <h4>Price: {price}</h4>
                <h4>quantity: {quantity}</h4>
                <h2>supplier: {supplier}</h2>
                <button>Update</button>
            </div>
        </div>

    );
};

export default Stock;
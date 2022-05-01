import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Stock.css'

const Stock = ({ stock }) => {
    const { id, name, img, description, price, supplier, quantity } = stock;
    const navigate = useNavigate();
    const navigateAllStocks = id =>{
        navigate(`/AllStocks/${id}`)
    }

    return (
        <div className='shadow rounded'>
            <div className='stock'>
                <img src={img} alt="" />
                <h2>{name}</h2>
                <p>{description}</p>
                <h4>Price: {price}</h4>
                <h4>quantity: {quantity}</h4>
                <h2>supplier: {supplier}</h2>
                <button onClick={()=>navigateAllStocks(id)} className='btn btn-dark text-white fw-bold'>Update</button>
            </div>
        </div>

    );
};

export default Stock;
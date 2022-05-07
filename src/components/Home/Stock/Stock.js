import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Stock.css'

const Stock = ({ stock }) => {
    const { _id, name, img, description, price, supplier, quantity } = stock;
    const navigate = useNavigate();
    const navigateAllStocks = id =>{
        navigate(`/AllStocks/${id}`)
    }

    return (
        <div className='shadow rounded bg-dark'>
            <div className='stock'>
                <div style={{height:'450px'}} className='text-white'>
                <img style={{height:'230px'}} src={img} alt="" />
                <h2 className='pe-3 ps-3 pt-2'>{name}</h2>
                <p className='pe-3 ps-3'>{description}</p>
                <h6 className='pe-3 ps-3'>Price: {price}</h6>
                <h6 className='pe-3 ps-3'>Quantity: {quantity}</h6>
                <h5 className='pe-3 ps-3'>Supplier: {supplier}</h5>
                </div>
                <button onClick={()=>navigateAllStocks(_id)} className='btn btn-light text-dark fw-bold'>Update</button>
            </div>
        </div>

    );
};

export default Stock;
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const AllStocks = () => {
    const { AllStocksId } = useParams();
    const [products, setProducts] = useState({});
    useEffect(() => {
        const url = `https://frozen-ravine-68631.herokuapp.com/products/${AllStocksId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div>
            <div className='shadow rounded bg-dark w-50 m-3 mx-auto'>
                <div className='stock'>
                    <div style={{ height: '450px' }} className='text-white'>
                        <img style={{ height: '230px' }} src={products.img} alt="" />
                        <h2 className='pe-3 ps-3 pt-2'>{products.name}</h2>
                        <p className='pe-3 ps-3'>{products.description}</p>
                        <h6 className='pe-3 ps-3'>Price: {products.price}</h6>
                        <h6 className='pe-3 ps-3'>Quantity: {products.quantity}</h6>
                        <h5 className='pe-3 ps-3'>Supplier: {products.supplier}</h5>
                    </div>
                    <form>
                        <input className='ms-3 mb-3' placeholder='Restock' type="text" />
                    </form>
                    <button className='btn btn-light text-danger fw-bold  m-3'>Delivered</button>
                    <button className='btn btn-light text-success fw-bold  m-3'>Restock</button>
                </div>
            </div>
            <div className='text-center'>
                <Link to='/checkout'>
                    <button className='btn btn-dark'>CheckOut</button>
                </Link>
            </div>
        </div>
    );
};

export default AllStocks;
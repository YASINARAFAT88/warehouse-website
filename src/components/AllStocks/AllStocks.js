import React from 'react';
import { Link, useParams } from 'react-router-dom';

const AllStocks = () => {
    const {AllStocksId} = useParams();
    return (
        <div>
            <h2>AllStocks ${AllStocksId}</h2>
            <h2>AllStocks {AllStocksId}</h2>
            <div className='text-center'>
            <Link to='/checkout'>
                <button className='btn btn-dark'>CheckOut</button>
            </Link>
            </div>
        </div>
    );
};

export default AllStocks;
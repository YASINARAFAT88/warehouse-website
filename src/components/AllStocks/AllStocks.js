import React from 'react';
import { useParams } from 'react-router-dom';

const AllStocks = () => {
    const {AllStocksId} = useParams();
    return (
        <div>
            <h2>AllStocks ${AllStocksId}</h2>
            <h2>AllStocks {AllStocksId}</h2>
            <h2>AllStocks</h2>
            <h2>AllStocks</h2>
            <h2>AllStocks</h2>
        </div>
    );
};

export default AllStocks;
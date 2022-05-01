import React, { useEffect, useState } from 'react';
import Stock from '../Stock/Stock';
import './Stoks.css'

const Stoks = () => {
    const [stocks, setStocks] = useState([]);

    useEffect(()=>{
        fetch('stocks.json')
        .then(res => res.json())
        .then(data => setStocks(data))
    },[])
    return (
        <div id='stocks'>
            <h1 className='stocks-title'>Warehouse available stoks {stocks.length}</h1>
            <div className="stocks-container">
            {
                stocks.map(stock => <Stock
                key={stock.id}
                stock={stock}
                ></Stock>)
            }
            </div>
        </div>
    );
};

export default Stoks;
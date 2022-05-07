import React, { useContext } from 'react';
import { HooksContext } from '../../../App';
import { useNavigate } from 'react-router-dom';
import Stock from '../Stock/Stock';
import './Stoks.css'

const Stoks = () => {
    const naviGate = useNavigate()
    const stocks = useContext(HooksContext)

    return (
        <div id='stocks'>
            <h1 className='stocks-title text-center'>Warehouse available stoks</h1>
            <div className="stocks-container">
                {
                    stocks.slice(0, 6).map(stock => <Stock
                        key={stock._id}
                        stock={stock}
                    ></Stock>)
                }
            </div>
            <div className='btn-div'>
                    <button onClick={() => naviGate('/manageinventory')} className='review-btn text-center fw-bold bg-dark'>See All Items</button>
                </div>
        </div>
    );
};
export default Stoks;
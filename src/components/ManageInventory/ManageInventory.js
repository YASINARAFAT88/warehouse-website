import React from 'react';
import useInventory from '../../hooks/useInventory/useInventory';

const ManageInventory = () => {
    const [stocks] = useInventory();
    return (
        <div>
            <h2 className='text-center fw-bold m-3'>Manage-Inventory</h2>
            {
                stocks.map(item => <div
                    key={item._id}>
                    <div className='shadow rounded bg-dark w-50 mb-5 mx-auto'>
            <div className='stock'>
                <div style={{height:'450px'}} className='text-white'>
                <img style={{height:'230px'}} src={item.img} alt="" />
                <h2 className='pe-3 ps-3 pt-2'>{item.name}</h2>
                <p className='pe-3 ps-3'>{item.description}</p>
                <h6 className='pe-3 ps-3'>Price: {item.price}</h6>
                <h6 className='pe-3 ps-3'>Quantity: {item.quantity}</h6>
                <h5 className='pe-3 ps-3'>Supplier: {item.supplier}</h5>
                </div>
                <button className='btn btn-light text-danger fw-bold m-3'>Delete</button>
                <button className='btn btn-light text-dark fw-bold m-3'>Update</button>
            </div>
        </div>
                </div> )}
        </div>
    );
};

export default ManageInventory;
import React from 'react';
import useInventory from '../../hooks/useInventory/useInventory';

const ManageInventory = () => {
    const [stocks, setStocks] = useInventory();
    const handleDelete = id => {
        const proceed = window.confirm('Sure?');
        if (proceed) {
            const url = `https://frozen-ravine-68631.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log(data))
            const remaining = stocks.filter(stock => stock._id !== id)
            setStocks(remaining);
        }
    }
    return (
        <div>
            <h2 className='text-center fw-bold m-3'>Manage-Inventory</h2>
            {
                stocks.map(item => <div
                    key={item._id}>
                    <div className='shadow rounded bg-dark w-50 mb-5 mx-auto'>
                        <div className='stock'>
                            <div style={{ height: '190px' }} className='text-white'>
                                <h2 className='pe-3 ps-3 pt-2'>{item.name}</h2>
                                <p className='pe-3 ps-3'>{item.description}</p>
                                <h6 className='pe-3 ps-3'>Price: {item.price}</h6>
                                <h6 className='pe-3 ps-3'>Quantity: {item.quantity}</h6>
                                <h5 className='pe-3 ps-3'>Supplier: {item.supplier}</h5>
                            </div>
                            <button onClick={() => handleDelete(item._id)} className='btn btn-light text-danger fw-bold m-3'>Delete</button>
                            <button className='btn btn-light text-dark fw-bold m-3'>Update</button>
                        </div>
                    </div>
                </div>)}
        </div>
    );
};

export default ManageInventory;
import React from 'react';
import { useForm } from "react-hook-form";

const AddStock = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `https://frozen-ravine-68631.herokuapp.com/products`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))
    };
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center fw-bold m-4'>Add Stock</h2>
            <form className='d-flex flex-column mb-2' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name")} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Supplier name'  {...register("supplier")} />
                <textarea className='mb-2' placeholder='Image Url' {...register("img")} />
                <input className='mb-5 bg-dark text-light p-2 fw-bold' value='Add Stock' type="submit" />
            </form>
        </div>
    );
};

export default AddStock;
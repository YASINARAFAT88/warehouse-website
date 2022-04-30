import React from 'react';
import bottle from './bottol.jpg'
import coffe from './coffe.webp'
import stol from './stool.jpg'
import lamp from './lamp_.jpg'
import watch from './watch.webp'
import honye from './honye.jpg'
import cactus from './cactus.jpg'
import sunglass from './sunglass.jpeg'
import lens from './lens.jpg'

const Imgs = () => {
    return (
        <div className='container mt-5'>
             <h1 className='text-center col-12 mx-auto'>Warehouse Some img</h1>
            <div className="row">
                <div className="col-md-4 col-12 mx-auto">
                    <img className='img-fluid' width={'400px'} src={bottle} alt="" />
                    <img width={'400px'} src={stol} alt="" />
                </div>

                <div className="col-md-4 col-12 mx-auto">
                <img className='img-fluid mb-3' width={'500px'} src={coffe} alt="" />
                <img className='img-fluid mb-3' width={'500px'}  src={lamp} alt="" />
                <img className='img-fluid mb-3' width={'500px'}  src={watch} alt="" />
                <img className='img-fluid mb-3' width={'500px'}  src={honye} alt="" />

                </div>
                <div className="col-md-4 col-12 mx-auto">
                <img className='img-fluid' width={'400px'} src={cactus} alt="" />
                <img className='img-fluid' width={'400px'} src={sunglass} alt="" />
                <img className='img-fluid h-25' width={'400px'} src={lens} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Imgs;
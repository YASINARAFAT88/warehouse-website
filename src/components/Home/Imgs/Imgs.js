import React from 'react';
import bottle from './ware.jpeg'
import coffe from './self.jpg'
import stol from './mirror.jpg'
import lamp from './self2.jpg'
import watch from './self3.jpg'
import honye from './self4.jpg'
import cactus from './first.jpg'
import sunglass from './canvas-frame.jpg'
import lens from './shelf0.jpg'

const Imgs = () => {
    return (
        <div id='Images' className='container mt-5 '>
             <h1 className='text-center col-12 mx-auto mb-5'>Our Warehouse Some img</h1>
            <div className="row border border-3 p-3 shadow">
                <div className="col-md-4 col-12 mx-auto">
                    <img className='img-fluid mb-3' width={'400px'} src={bottle} alt="" />
                    <img className='img-fluid' width={'400px'} src={stol} alt="" />
                </div>

                <div className="col-md-4 col-12 mx-auto">
                <img className='img-fluid mb-3' width={'500px'} src={coffe} alt="" />
                <img className='img-fluid mb-3' width={'500px'}  src={lamp} alt="" />
                <img className='img-fluid mb-3' width={'500px'}  src={watch} alt="" />
                <img className='img-fluid mb-3' width={'500px'}  src={honye} alt="" />

                </div>
                <div className="col-md-4 col-12 mx-auto">
                <img className='img-fluid mb-3' width={'400px'} src={cactus} alt="" />
                <img className='img-fluid mb-5' width={'400px'} src={sunglass} alt="" />
                <img className='img-fluid h-25' width={'400px'} src={lens} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Imgs;
import React from 'react';
import './Categories.css'
import shows from './categories/canvas.png'
import watch from './categories/self.png'
import bag from './categories/download.png'

const catagories = () => {
    return (
        <div id='categories'>
            <h1 className='text-center text-dark mt-5'>Stocks Categories</h1>
            <section className="container categories my-5">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="p-3 border rounded bg-dark text-white d-flex align-items-center justify-content-between"><h1>Self</h1>
              <img height={"100px"} src={watch} alt="" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="p-3 border rounded bg-dark text-white d-flex align-items-center justify-content-between"><h1>Canvas</h1>
             <img height={"100px"} src={shows} alt="" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="p-3 border rounded bg-dark text-white d-flex align-items-center justify-content-between"><h1>Mirror</h1>
              <img height={"100px"} src={bag} alt="" />
            </div>
          </div>
        </div>
    </section>
        </div>
    );
};

export default catagories;
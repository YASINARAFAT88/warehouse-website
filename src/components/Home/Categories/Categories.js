import React from 'react';
import './Categories.css'
import shows from './categories/shoes.png'
import watch from './categories/watch.png'
import bag from './categories/bag.png'

const catagories = () => {
    return (
        <div>
            <h1 className='text-center text-dark mt-5'>Stocks CataGories</h1>
            <section className="container categories my-5">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="p-3 border rounded bg-warning text-white d-flex align-items-center justify-content-between"><h1>Watch</h1>
              <img src={watch} alt="" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="p-3 border rounded bg-success text-white d-flex align-items-center justify-content-between"><h1>Shows</h1>
             <img src={shows} alt="" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="p-3 border rounded bg-primary text-white d-flex align-items-center justify-content-between"><h1>Bag</h1>
              <img src={bag} alt="" />
            </div>
          </div>
        </div>
    </section>
        </div>
    );
};

export default catagories;
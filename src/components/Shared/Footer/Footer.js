import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <footer className='text-center my-2'>
            <div className='col-12 col-lg-6 footer'>
            <div>
                <h2>OUR ADDRESS</h2>
                <p>E- Block, Road- 5, House 42 Banasree, +8809639113355 support@shajao.com, Rampura,  Dhaka</p>
                
                <h4>Contact Us</h4>
            </div>
            <div>
                <h3>WareHouse</h3>
                <p><small> Md Rezoun Shafiullah is a MPH (Medicine) Post Graduate Fellowship on Migrant Refugee Health (PGFMRH-UK), He is available through (Online/Offline) chamber time 10:00 Pm to 6:00 Pm.</small></p>
                <p>Copyright © {year}</p>
            </div>
            </div>
        </footer>
    );
};

export default Footer;
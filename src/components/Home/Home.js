import React from 'react';
import './Home.css'
import Stoks from './Stoks/Stoks';
import Categories from './Categories/Categories'
import Imgs from './Imgs/Imgs';
import Section from './Section/Section';

const Home = () => {
    return (
        <div>
            <div>
                <section className="personal">
                    <div className=''>
                        <div className="info shadow"><h2 className='fw-bold'>WareHouse managment system</h2>

                            <p className='fw-bold'>
                                I'm a citizen of Bangladesh ,i was born in dhaka
                                and grew up in dhaka, My dream for many years has
                                been to be a heigh quality Fullstack developer
                            </p>
                            <a href="linkedin.com">Click me</a>
                        </div>
                    </div>
                </section>
            </div>
            <Section></Section>
            <Categories></Categories>
            <Stoks></Stoks>
            <Imgs></Imgs>
        </div>
    );
};

export default Home;
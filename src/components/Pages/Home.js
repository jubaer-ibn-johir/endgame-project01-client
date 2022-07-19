import React from 'react';
import { FiChevronRight } from 'react-icons/fi'

const Home = () => {
    return (
        <div className='bg-accent h-screen'>
            <h1 className='text-primary text-center text-5xl lg:text-7xl font-bold mt-28 lg:mt-36'>React</h1>
            <h2 className='text-2xl lg:text-4xl leading-9 text-center mt-12 text-white'>A JavaScript library for building user interfaces</h2>
            <div className='flex justify-center items-center mt-20 mb-12 lg:mb-24'>
                <button className='btn btn-primary hover:bg-white pt-6 py-12  lg:px-12 text-lg lg:text-xl  rounded'>Get Started</button>
                <p className='text-primary text-2xl hover:text-white pl-5 lg:pl-10 leading-10 flex justify-center items-center'>Take the Tutorial <FiChevronRight className='mt-2'></FiChevronRight></p>

            </div>
        </div>
    );
};

export default Home;
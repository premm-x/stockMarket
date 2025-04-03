import React from 'react';
import Navbar from './Navbar';
import LineChartComponent from './LineChartComponent';

export const Sensex = () => {
    return (
        <div className='w-full'>
            <Navbar />
                <div className="w-full">
                    <LineChartComponent />
                </div>
        </div>
    );
};


export const Nifty = () => {
    return (
        <div className='w-full'>
            <Navbar />
                <div className="w-full ">
                    <LineChartComponent />
                </div>
        </div>
    );
};
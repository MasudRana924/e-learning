import React from 'react';
import reactImg from '../../assets/react.jpg'

const Framework = () => {
    return (
        <div className="lg:flex justify-between gap-4 py-24 sm:py-32 lg:mt-24">
            <div className="w-full p-4 coding-image">
                <img src={reactImg} alt="" className=' border border-black rounded-lg '/>
            </div>
            <div className="w-full p-8">
                <p className="text-gray-400 font-mono text-xl text-start mt-4">Efficient component-based architecture</p>
                <p className="text-gray-400 font-mono text-xl mt-4 text-start">Fostering reusable and maintainable code</p>
                <p className="text-gray-400 font-mono text-xl  mt-4 text-start">Ensuring its continued relevance in the future of web development</p>
            </div>
        </div>
    );
};

export default Framework;
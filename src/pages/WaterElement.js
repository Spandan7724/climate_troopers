import React from 'react';
import coreWaterBg from '../assets/images/core-water-bg.jpg';

const WaterElement = () => {
    return (
        <div
            className="w-full h-full py-12 min-h-screen bg-cover bg-center bg-no-repeat relative"
            style={{
                backgroundImage: `url(${coreWaterBg})`,
                backgroundAttachment: 'fixed', // Makes the background image still
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="container relative z-10 mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-white">Water Element</h1>
                <p className="text-white">
                    This is the test page for the Water Element.
                </p>
                <p className="text-white">
                Here, you can add content about the water-related information in the future.
           
                </p>
            </div>
        </div>
    );
};

export default WaterElement;

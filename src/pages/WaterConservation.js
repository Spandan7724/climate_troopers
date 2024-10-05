import React from 'react';
import waterconservation from '../assets/images/waterconservation.jpg'; 

const WaterConservation = () => {
    return (
        <div
            className="w-full h-full py-12 min-h-screen bg-cover bg-center bg-no-repeat relative"
            style={{
                backgroundImage: `url(${waterconservation})`,
                backgroundAttachment: 'fixed', // Makes the background image still
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="container relative z-10 mx-auto text-white">
                <h1 className="text-4xl font-bold mb-6">Water Conservation</h1>
                <p className="text-lg mb-4">
                    Water conservation is a key element in ensuring that we have a sustainable future.
                    Our efforts focus on promoting rainwater harvesting, reducing water waste, and educating the community about effective water management practices.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Our Initiatives</h2>
                <ul className="list-disc list-inside text-lg">
                    <li>Rainwater harvesting programs</li>
                    <li>Community workshops on reducing water waste</li>
                    <li>Installation of water-saving devices in local communities</li>
                </ul>
                <button className="mt-6 px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default WaterConservation;

import React from 'react';

const WaterConservation = () => {
    return (
        <div className="container mx-auto py-12">
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
        </div>
    );
};

export default WaterConservation;

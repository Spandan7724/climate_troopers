import React from 'react';
import waterImage from '../assets/images/ice-image.jpg'; // Import the background image

const WCsolution = () => {
    return (
        <div
            className="w-full h-full py-12 min-h-screen bg-cover bg-center bg-no-repeat relative"
            style={{
                backgroundImage: `url(${waterImage})`,
                backgroundAttachment: 'fixed', // Makes the background image still
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="container relative z-10 mx-auto text-white">
                <h1 className="text-4xl font-bold mb-6">Water Conservation Solutions</h1>
                <p className="text-lg mb-4">
                    This is the test page for the Water Conservation Solutions.
                </p>
                <p className="text-lg mb-4">
                    Here, you can add content about the waste-related information in the future.
                </p>
            </div>
        </div>
    );
};

export default WCsolution;

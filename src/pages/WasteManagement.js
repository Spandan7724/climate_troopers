// src/pages/WasteManagement.js
import React from "react";

const WasteManagement = () => {
    return (
        <div className="container mx-auto py-12">
            <h1 className="text-3xl font-bold">Waste Management</h1>
            <p className="mt-6 text-lg">
                Our waste management projects focus on recycling, composting, and reducing the environmental impact of waste. We work with communities to create sustainable waste reduction practices.
           
            </p>
            <h2 className="text-2xl font-semibold mb-4">Our Initiatives</h2>
            <ul className="list-disc list-inside text-lg">
                <li>Promoting Tree Plantation Drives</li>
                <li>Organizing Clean-up Campaigns </li>
                <li>Raising Awareness About Waste Segregation</li>

            </ul>
            <button className="mt-6 px-6 py-2 bg-green-500 text-white font-semibold rounded-lg">Learn More</button>
        </div>
    );
};

export default WasteManagement;

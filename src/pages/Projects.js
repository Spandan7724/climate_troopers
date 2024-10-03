// src/pages/Projects.js
import React from "react";
import { Link } from "react-router-dom";

// Import images
import waterImage from '../assets/images/ice-image.jpg';
import wasteImage from '../assets/images/forest-image.jpg';
import biodiversityImage from '../assets/images/green-mobility.png';

const projects = [
    { title: "Water Conservation", path: "/projects/water-conservation", imgSrc: waterImage },
    { title: "Waste Management", path: "/projects/waste-management", imgSrc: wasteImage },
    { title: "Biodiversity Conservation", path: "/projects/biodiversity-conservation", imgSrc: biodiversityImage }
];

const Projects = () => {
    return (
        <div className="container mx-auto py-12">
            <h1 className="text-3xl font-bold text-center mb-8">Innovative Environmental Solutions</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <Link to={project.path} key={index}>
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img src={project.imgSrc} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h2 className="text-xl font-semibold">{project.title}</h2>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Projects;

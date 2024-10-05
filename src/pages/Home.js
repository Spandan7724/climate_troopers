import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import waterImage from '../assets/images/ice-image.jpg';
import wasteImage from '../assets/images/forest-image.jpg';
import biodiversityImage from '../assets/images/green-mobility.png';
import midSectionImage from '../assets/images/Screenshot 2024-10-03 235410.png'; // Midsection image
import parallaxImage from '../assets/images/geranimo-qzgN45hseN0-unsplash.jpg'; // Parallax background image
import coreWaterBg from '../assets/images/core-water-bg.jpg'; // Core Elements hover image
import coreWasteBg from '../assets/images/core-waste-bg.jpg'; // Core Elements hover image
import coreEnergyBg from '../assets/images/core-energy-bg.jpg'; // Core Elements hover image
import coreBiodiversityBg from '../assets/images/core-biodiversity-bg.jpg'; // Core Elements hover image
import waterconservation from '../assets/images/waterconservation.jpg'; 

const Home = () => {
    useEffect(() => {
        const handleScroll = () => {
            const parallax = document.getElementById('home');
            if (parallax) {
                const scrolled = window.pageYOffset;
                parallax.style.backgroundPositionY = `${scrolled * 0.5}px`;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* Home Section with Parallax Background */}
            <section
                id="home"
                className="relative h-screen flex justify-center items-center text-white"
                style={{
                    backgroundImage: `url(${parallaxImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                }}
            >
                <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center">
                    <h1 className="text-6xl font-bold">Climate Troopers Foundation</h1>
                    <p className="mt-4 text-xl">Join us in building a greener tomorrow through sustainable solutions.</p>
                    <button className="mt-6 px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600">
                        View Services
                    </button>
                </div>
            </section>

            {/* Midsection: About Us */}
            <section id="midsection" className="container mx-auto py-12 bg-gray-100">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 p-6">
                        <h2 className="text-3xl font-bold">Together for a Sustainable Future</h2>
                        <p className="mt-4 text-lg text-gray-700">
                            Climate Troopers empowers communities in Pune to tackle environmental challenges.
                            We focus on sustainable solutions in water conservation, waste management, and biodiversity protection.
                        </p>
                        <Link to="/about" className="mt-4 inline-block text-green-600 hover:underline">Learn More</Link>
                    </div>
                    <div className="md:w-1/2">
                        <img src={midSectionImage} alt="Community" className="rounded-lg shadow-lg" loading="lazy" />
                    </div>
                </div>
            </section>

            {/* Thin Border Section with Parallax Scrolling */}
            <section
                id="parallax-border"
                className="h-16"
                style={{
                    backgroundImage: `url(${parallaxImage})`,
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                }}
            ></section>


            {/* Core Elements Section with Hover Effect */}
            <section id="core-elements" className="py-12 bg-gray-200">
                <div className="container mx-auto text-center">
                    <h1 className="text-3xl font-bold mb-8">Core Elements</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {/* Water Element */}
                        <Link to="/water-element" className="bg-white shadow-lg p-6 rounded-lg hover:bg-cover" style={{
                            backgroundImage: 'coreWaterBg',
                            transition: 'background-image 0.5s ease-in-out'
                        }}
                            onMouseEnter={e => e.currentTarget.style.backgroundImage = `url(${coreWaterBg})`}
                            onMouseLeave={e => e.currentTarget.style.backgroundImage = 'none'}>
                            <h2 className="text-xl font-semibold text-green-600">Water</h2>
                            <p className="mt-2 text-gray-600">Ensure  access to clean water and promote conservation.</p>
                        </Link>

                        {/* Waste Element */}
                        <Link to="/waste-element" className="bg-white shadow-lg p-6 rounded-lg hover:bg-cover" style={{
                            backgroundImage: 'none',
                            transition: 'background-image 0.5s ease-in-out'
                        }}
                            onMouseEnter={e => e.currentTarget.style.backgroundImage = `url(${coreWasteBg})`}
                            onMouseLeave={e => e.currentTarget.style.backgroundImage = 'none'}>
                            <h2 className="text-xl font-semibold text-green-600">Waste</h2>
                            <p className="mt-2 text-gray-600">Minimize environmental impact through effective waste management.</p>
                        </Link>

                        {/* Energy Element */}
                        <Link to="/energy-element" className="bg-white shadow-lg p-6 rounded-lg hover:bg-cover" style={{
                            backgroundImage: 'none',
                            transition: 'background-image 0.5s ease-in-out'
                        }}
                            onMouseEnter={e => e.currentTarget.style.backgroundImage = `url(${coreEnergyBg})`}
                            onMouseLeave={e => e.currentTarget.style.backgroundImage = 'none'}>
                            <h2 className="text-xl font-semibold text-green-600">Energy</h2>
                            <p className="mt-2 text-gray-600">Champion renewable energy and sustainable practices.</p>
                        </Link>

                        {/* Biodiversity Element */}
                        <Link to="/biodiversity-element" className="bg-white shadow-lg p-6 rounded-lg hover:bg-cover" style={{
                            backgroundImage: 'none',
                            transition: 'background-image 0.5s ease-in-out'
                        }}
                            onMouseEnter={e => e.currentTarget.style.backgroundImage = `url(${coreBiodiversityBg})`}
                            onMouseLeave={e => e.currentTarget.style.backgroundImage = 'none'}>
                            <h2 className="text-xl font-semibold text-green-600">Biodiversity</h2>
                            <p className="mt-2 text-gray-600">Protect and conserve biodiversity and natural habitats.</p>
                        </Link>
                    </div>
                </div>
            </section>
            {/* Thin Border Section with Parallax Scrolling */}
            <section
                id="parallax-border"
                className="h-16"
                style={{
                    backgroundImage: `url(${parallaxImage})`,
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                }}
            ></section>



            {/* Our Projects Section with Hover Effect */}
            <section id="our-projects" className="py-12 bg-gray-100">
                <div className="container mx-auto text-center">
                    <h1 className="text-3xl font-bold mb-8">Our Projects</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {/* Project 1 */}
                        <Link
                            to="/water-conservation-campaigns"
                            className="bg-white shadow-lg p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <img src={waterconservation} alt="Water Conservation Campaigns" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h2 className="text-xl font-semibold text-green-600">Water Conservation Campaigns</h2>
                            <p className="mt-2 text-gray-600">Implement rainwater harvesting and educate communities on sustainable water use.</p>
                        </Link>

                        {/* Project 2 */}
                        <Link
                            to="/waste-management-programs"
                            className="bg-white shadow-lg p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <img src={wasteImage} alt="Waste Management Programs" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h2 className="text-xl font-semibold text-green-600">Waste Management Programs</h2>
                            <p className="mt-2 text-gray-600">Promote recycling, composting, and waste reduction through community-driven initiatives.</p>
                        </Link>

                        {/* Project 3 */}
                        <Link
                            to="/renewable-energy-projects"
                            className="bg-white shadow-lg p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <img src={biodiversityImage} alt="Renewable Energy Projects" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h2 className="text-xl font-semibold text-green-600">Renewable Energy Projects</h2>
                            <p className="mt-2 text-gray-600">Install solar panels and conduct workshops to promote the benefits of renewable energy.</p>
                        </Link>

                        {/* Project 4 */}
                        <Link
                            to="/biodiversity-conservation-projects"
                            className="bg-white shadow-lg p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <img src={biodiversityImage} alt="Biodiversity Conservation" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h2 className="text-xl font-semibold text-green-600">Biodiversity Conservation</h2>
                            <p className="mt-2 text-gray-600">Engage in reforestation, wildlife protection, and habitat restoration projects.</p>
                        </Link>

                        {/* Project 5 */}
                        <Link
                            to="/air-quality-improvement-projects"
                            className="bg-white shadow-lg p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <img src={biodiversityImage} alt="Air Quality Improvement" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h2 className="text-xl font-semibold text-green-600">Air Quality Improvement</h2>
                            <p className="mt-2 text-gray-600">Develop urban green spaces, promote clean transportation, and monitor air quality.</p>
                        </Link>
                    </div>
                </div>
            </section>
            {/* Thin Border Section with Parallax Scrolling */}
            <section
                id="parallax-border"
                className="h-16"
                style={{
                    backgroundImage: `url(${parallaxImage})`,
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                }}
            ></section>

            {/* Innovative Environmental Solutions Section */}
            <section id="innovative-solutions" className="py-12 bg-gray-100">
                <div className="container mx-auto text-center">
                    <h1 className="text-3xl font-bold mb-8">Innovative Environmental Solutions</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Link to="/water-conservation" className="bg-white shadow-lg rounded-lg overflow-hidden" style={{ transition: 'transform 0.3s ease-in-out' }}>
                            <img src={waterImage} alt="Water Conservation" className="w-full h-48 object-cover" loading="lazy" />
                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-green-600">Water Conservation</h2>
                                <p className="text-gray-600">Efficient strategies for preserving our precious water resources.</p>
                            </div>
                        </Link>

                        <Link to="/waste-management" className="bg-white shadow-lg rounded-lg overflow-hidden" style={{ transition: 'transform 0.3s ease-in-out' }}>
                            <img src={wasteImage} alt="Waste Management" className="w-full h-48 object-cover" loading="lazy" />
                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-green-600">Waste Management</h2>
                                <p className="text-gray-600">Transforming waste into valuable resources for communities.</p>
                            </div>
                        </Link>

                        <Link to="/biodiversity-conservation" className="bg-white shadow-lg rounded-lg overflow-hidden" style={{ transition: 'transform 0.3s ease-in-out' }}>
                            <img src={biodiversityImage} alt="Biodiversity Conservation" className="w-full h-48 object-cover" loading="lazy" />
                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-green-600">Biodiversity Conservation</h2>
                                <p className="text-gray-600">Protecting ecosystems and promoting wildlife preservation.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Contact Section with Parallax Background */}
            <section id="contact" className="relative py-12" style={{
                backgroundImage: `url(${parallaxImage})`,
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <div className="container mx-auto flex flex-col space-y-8">

                    {/* Contact Form */}
                    <div className="bg-gray-300 bg-opacity-90 p-6 rounded-lg shadow-lg text-gray-900 max-w-md mx-auto">
                        <h3 className="text-3xl font-semibold mb-4 text-center">Contact Us</h3>
                        <form className="space-y-4">
                            <div className="space-y-1">
                                <label className="block text-lg font-medium">Name</label>
                                <input
                                    type="text"
                                    placeholder="Jane Smith"
                                    className="w-full px-3 py-2 border border-gray-400 rounded-lg text-gray-700 bg-gray-100 focus:ring-2 focus:ring-green-400 focus:outline-none"
                                    required
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="block text-lg font-medium">Email address <span className="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    placeholder="email@website.com"
                                    className="w-full px-3 py-2 border border-gray-400 rounded-lg text-gray-700 bg-gray-100 focus:ring-2 focus:ring-green-400 focus:outline-none"
                                    required
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="block text-lg font-medium">Phone number <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    placeholder="555-555-5555"
                                    className="w-full px-3 py-2 border border-gray-400 rounded-lg text-gray-700 bg-gray-100 focus:ring-2 focus:ring-green-400 focus:outline-none"
                                    required
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="block text-lg font-medium">Message</label>
                                <textarea
                                    placeholder="Your message"
                                    className="w-full px-3 py-2 border border-gray-400 rounded-lg text-gray-700 bg-gray-100 focus:ring-2 focus:ring-green-400 focus:outline-none"
                                    required
                                    rows="3"
                                ></textarea>
                            </div>

                            <div className="flex items-center space-x-2">
                                <input type="checkbox" className="rounded border-gray-300 text-green-500 focus:ring-green-400" />
                                <span className="text-sm text-gray-600">I allow this website to store my submission so they can respond to my inquiry. <span className="text-red-500">*</span></span>
                            </div>

                            <button
                                className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300 ease-in-out">
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* Get in Touch Section */}
                    <div className="bg-gray-300 bg-opacity-90 p-6 rounded-lg shadow-lg text-gray-900 max-w-md mx-auto">
                        <h3 className="text-3xl font-semibold mb-4 text-center">Get in Touch</h3>
                        <div className="space-y-4 text-center">
                            <p>
                                <span className="font-bold">Email:</span>
                                <a href="mailto:climatetroopers.india@gmail.com" className="text-blue-600 underline ml-1">climatetroopers.india@gmail.com</a>
                            </p>
                            <p>
                                <span className="font-bold">Location:</span>
                                <a
                                    href="https://www.google.com/maps/dir//Silver+Nest+Building+Viman+Nagar+Rd+Sainik+Nagar,+Clover+Park,+Viman+Nagar+Pune,+Maharashtra+411014/@18.5658159,73.9180478,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bc2c1469c02be73:0xb88130aa301b6c8e!2m2!1d73.9180478!2d18.5658159?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 underline ml-1"
                                >Pune, MH IN</a>
                            </p>
                            <div>
                                <h4 className="text-lg font-semibold">Hours</h4>
                                <ul className="mt-2 text-gray-600">
                                    <li>Monday - Friday: 9:00am – 10:00pm</li>
                                    <li>Saturday: 9:00am – 6:00pm</li>
                                    <li>Sunday: 9:00am – 12:00pm</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;

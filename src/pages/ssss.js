{/* Contact Section with Parallax Background */ }
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
                        href="https://www.google.com/maps/place/Pune,+MH,+IN"
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
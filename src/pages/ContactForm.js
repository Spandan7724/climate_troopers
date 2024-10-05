// src/pages/ContactForm.js
import React, { useState } from 'react';
import { db } from '../firebase';
import { ref, push } from 'firebase/database';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Push data to Realtime Database
      await push(ref(db, 'contacts/'), {
        name,
        email,
        phone,
        message,
      });
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message');
    }
  };

  return (
    <div style={{ width: '600px' }} className="bg-gray-300 bg-opacity-90 p-6 rounded-lg shadow-lg text-gray-900 max-w-full mx-auto">
      <h3 className="text-3xl font-semibold mb-4 text-center">Contact Us</h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-1">
          <label className="block text-lg font-medium">Name</label>
          <input
            type="text"
            placeholder="Jane Smith"
            className="w-full px-3 py-2 border border-gray-400 rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="space-y-1">
          <label className="block text-lg font-medium">Email address</label>
          <input
            type="email"
            placeholder="email@website.com"
            className="w-full px-3 py-2 border border-gray-400 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="space-y-1">
          <label className="block text-lg font-medium">Phone number</label>
          <input
            type="text"
            placeholder="555-555-5555"
            className="w-full px-3 py-2 border border-gray-400 rounded-lg"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="space-y-1">
          <label className="block text-lg font-medium">Message</label>
          <textarea
            placeholder="Your message"
            className="w-full px-3 py-2 border border-gray-400 rounded-lg"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows="3"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;

'use client'
import { PlaneIcon, Send } from "lucide-react";
import React, { useState } from 'react';

function ContactForm() {
    const [selectedInterest, setSelectedInterest] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInterestClick = (interest: string) => {
        setSelectedInterest(interest);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here, you can handle form submission, e.g., sending data to a server.
        console.log('Form submitted:', { selectedInterest, name, email, message });
    };

    return (
        <div className="w-full h-fit mx-auto p-6 bg-neutral-300 rounded-lg shadow-lg">
            <form className="h-full w-full p-6" onSubmit={handleSubmit}>
                <div className="mb-4 h-2/6">
                    <p className="mb-2 font-bold h-1/6">I am interested in ...</p>
                    <div className="flex justify-start flex-wrap gap-5 h-5/6">
                        {['Auto Detailing', 'Mobile Charging', 'Becoming a Partner', 'Investing', 'Other'].map((interest, index) => (
                            <button
                                key={index}
                                onClick={() => handleInterestClick(interest)}
                                className={`rounded-lg px-4 py-2 border-2 border-opacity-30 border-purple-800 focus:outline-none ${selectedInterest === interest
                                        ? 'bg-darkblue text-white'
                                        : 'bg-transparent hover:bg-blue-200  text-opacity-30 text-purple-800'
                                    }`}
                            >
                                {interest}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="mb-4 h-1/6">
                    <label
                        htmlFor="name"
                        className="transition-all duration-300 ease-in-out text-gray-500 text-sm"
                    >
                       Name : 
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="border-0 border-b-2  focus:border-darkblue p-2 focus:border-transparent focus:outline-none ring-0  bg-transparent w-full outline-none autofill-neutral"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="mb-2 block">Your Email:</label>
                    <input
                        type="email"
                        id="email"
                        className="border-0 border-b-2  focus:border-darkblue p-2 focus:border-transparent focus:outline-none ring-0  bg-transparent w-full autofill-neutral"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="mb-2 block">Message:</label>
                    <textarea
                        id="message"
                        rows={4}
                        className="border-0 border-b-2  focus:border-darkblue focus:border-none focus:border-b-2 foucs:ring-0 p-2 focus:outline-none bg-transparent w-full autofill-neutral"
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-darkblue text-white rounded-lg py-4 px-8 hover:bg-blue-900 flex items-center justify-center"
                >
                    <Send color="white" className="mx-2" />
                    <span className="mx-2">Send Message</span>
                </button>
            </form>
        </div>
    );
}

export default ContactForm;

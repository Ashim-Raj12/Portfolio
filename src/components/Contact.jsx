import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-5xl font-extrabold text-center text-white mb-16 relative">
          Contact Me
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. Feel free to reach out!
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-blue-900/50 p-3 rounded-full mr-4 border border-blue-500/30">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-gray-300">programwithashim@gmail.com</span>
              </div>
              <div className="flex items-center">
                <div className="bg-gray-900/50 p-3 rounded-full mr-4 border border-gray-500/30">
                  <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <a href="https://github.com/Ashim-Raj12" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition duration-300">GitHub</a>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-900/50 p-3 rounded-full mr-4 border border-blue-500/30">
                  <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <a href="https://www.linkedin.com/in/ashim-raj-26074334b/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition duration-300">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
            {submitted && (
              <div className="mb-6 p-4 bg-green-900/50 text-green-300 rounded-xl border border-green-500/30">
                Thank you for your message! I will get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 font-semibold text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`w-full p-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 bg-gray-700 text-white placeholder-gray-400 ${errors.name ? 'border-red-500' : 'border-gray-600'}`}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                />
                {errors.name && <p className="text-red-400 mt-2">{errors.name}</p>}
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 font-semibold text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full p-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 bg-gray-700 text-white placeholder-gray-400 ${errors.email ? 'border-red-500' : 'border-gray-600'}`}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-400 mt-2">{errors.email}</p>}
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-semibold text-gray-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className={`w-full p-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 bg-gray-700 text-white placeholder-gray-400 ${errors.message ? 'border-red-500' : 'border-gray-600'}`}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                ></textarea>
                {errors.message && <p className="text-red-400 mt-2">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="cursor-pointer w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

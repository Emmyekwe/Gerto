import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function ContactUs() {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-[#00008B] text-center mb-6">Contact Us</h2>

        <p className="text-lg text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          We’d love to hear from you! Whether you have a question, need a consultation, or want to explore our solutions, our team is here to help.
        </p>

        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Contact Details */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-4">
              <strong>Gerto Technology Services Ltd.</strong> <br />
              RC1965215 | Founded in 2022
            </p>
            <p className="text-gray-700"><strong>📍 Address:</strong> Lanre Olumide Street, Lekki, Lagos</p>
            <p className="text-gray-700"><strong>📞 Phone:</strong> +2349021011417</p>
            <p className="text-gray-700"><strong>📧 Email:</strong> <a href="mailto:Info@gertotsl.com" className="text-green-600 hover:underline">Info@gertotsl.com</a></p>
            <p className="text-gray-700"><strong>🌐 Website:</strong> <a href="https://www.gertotechservices.com" className="text-green-600 hover:underline">www.gertotechservices.com</a></p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6">Business Hours</h3>
            <p className="text-gray-700">Monday – Friday: 8:00 AM – 5:00 PM</p>
            <p className="text-gray-700">Saturday – Sunday: Closed</p>

            {/* Social Media Links */}
            <div className="mt-6 flex space-x-4">
              <a href="https://www.instagram.com/GERTOTSL" target="_blank" rel="noopener noreferrer" className="text-pink-600 text-2xl hover:text-pink-700">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/gerto-technology-services-limited/" target="_blank" rel="noopener noreferrer" className="text-blue-700 text-2xl hover:text-blue-800">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">Full Name</label>
                <input type="text" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Email</label>
                <input type="email" placeholder="Your Email" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Subject</label>
                <input type="text" placeholder="Subject" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Message</label>
                <textarea rows="4" placeholder="Your Message" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

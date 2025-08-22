"use client"; 

const ContactPage = () => {
  return (
    <div className="w-11/12 mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Side - Contact Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600">
            Have any questions or suggestions? We’d love to hear from you. 
            Use the form or reach us through the contact details below.
          </p>
          <div className="space-y-2 text-gray-700">
            <p>📍 Address: Dhaka, Bangladesh</p>
            <p>📞 Phone: +880 1883717078</p>
            <p>📧 Email: shawon505214@gamil.com</p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
          <form className="space-y-4">
            <div>
              <label className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                // rows="4"
                placeholder="Write your message..."
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;




 import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Contact() {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedCity, setSelectedCity] = useState("Hyderabad");

const cities = [
  {
    name: "Hyderabad",
    address: "Domino’s Pizza, Jubilee Hills, Hyderabad, Telangana, India",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.998949268207!2d78.40100121501372!3d17.4128474880208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93b3e45b4c1f%3A0xe4d1b1dc0a2b7f23!2sDomino's%20Pizza%20Jubilee%20Hills!5e0!3m2!1sen!2sin!4v1696900000000"
  },
  {
    name: "Vizag",
    address: "Domino’s Pizza, Dwaraka Nagar, Visakhapatnam, Andhra Pradesh, India",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.123456789!2d83.218483!3d17.686815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a394e2ab5c12345%3A0x123456789abcdef!2sDomino's%20Pizza%20Vizag!5e0!3m2!1sen!2sin!4v1696900000000"
  },
  {
    name: "Bangalore",
    address: "Domino’s Pizza, MG Road, Bangalore, Karnataka, India",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.123456789!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670f1234567%3A0xabcdef123456789!2sDomino's%20Pizza%20MG%20Road!5e0!3m2!1sen!2sin!4v1696900000000"
  },
  {
    name: "Delhi",
    address: "Domino’s Pizza, Connaught Place, New Delhi, India",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17540.123456789!2d77.2190!3d28.6304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1abc1234567%3A0xabcdef123456789!2sDomino's%20Pizza%20Connaught%20Place!5e0!3m2!1sen!2sin!4v1696900000000"
  },
  {
    name: "Mumbai",
    address: "Domino’s Pizza, Bandra West, Mumbai, Maharashtra, India",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.123456789!2d72.8359!3d19.0623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c63b8f123456%3A0xabcdef123456789!2sDomino's%20Pizza%20Bandra!5e0!3m2!1sen!2sin!4v1696900000000"
  },
  {
    name: "Chennai",
    address: "Domino’s Pizza, T Nagar, Chennai, Tamil Nadu, India",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3100.123456789!2d80.2345!3d13.0845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526123456789ab%3A0xabcdef123456789!2sDomino's%20Pizza%20T%20Nagar!5e0!3m2!1sen!2sin!4v1696900000000"
  },
  {
    name: "Kolkata",
    address: "Domino’s Pizza, Park Street, Kolkata, West Bengal, India",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.123456789!2d88.3630!3d22.5726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89abc1234567%3A0xabcdef123456789!2sDomino's%20Pizza%20Park%20Street!5e0!3m2!1sen!2sin!4v1696900000000"
  },
  {
    name: "Pune",
    address: "Domino’s Pizza, Koregaon Park, Pune, Maharashtra, India",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.123456789!2d73.9125!3d18.5333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c123456789ab%3A0xabcdef123456789!2sDomino's%20Pizza%20Koregaon%20Park!5e0!3m2!1sen!2sin!4v1696900000000"
  }
];


  const faqs = [
    { question: "How do I contact Domino’s?", answer: "You can contact Domino’s India by calling 1800-208-1234 or writing to guestcaredominos@jublfood.com." },
    { question: "Is Domino’s number toll-free?", answer: "Yes, 1800-208-1234 is toll-free across India." },
    { question: "How do I contact Domino’s Customer Service?", answer: "Use the website, app, or toll-free number for orders, feedback, or complaints." },
    { question: "How do I talk to Domino’s customer care?", answer: "Call 1800-208-1234 to talk directly with customer care representatives." },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Main Contact Section */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-10 p-8 relative">
        {/* Left Side */}
        <div className="border border-gray-300 rounded-lg p-6 shadow-sm flex-1 relative">
          <h2 className="text-lg text-gray-800 mb-3 font-medium">
            Have any feedback or queries? We'd love to hear from you.
          </h2>
          <p className="text-gray-600 mb-3">
            Write to us at <span className="font-semibold text-black">guestcaredominos@jublfood.com</span>
          </p>

          {/* Cities Side by Side */}
          <div className="flex flex-wrap gap-2 mb-4">
            {cities.map((city, i) => (
              <button
                key={i}
                onClick={() => setSelectedCity(city.name)}
                className={`px-4 py-2 rounded ${selectedCity === city.name ? 'bg-blue-700 text-white' : 'bg-gray-100 text-gray-800 hover:bg-blue-100'}`}
              >
                {city.name}
              </button>
            ))}
          </div>

          <p className="text-gray-600 mt-6">
            Try our delicious treats and rescue hunger with Domino’s Pizza.{" "}
            <span className="font-semibold">Locate Nearby Pizza Restaurants</span> nearest to you.
          </p>
        </div>

        {/* Right Side - Dynamic Address + Map */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Domino's {selectedCity} Outlet</h2>
          <p className="text-gray-700 mb-4">{cities.find((c) => c.name === selectedCity)?.address}</p>

          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              title={`${selectedCity} Domino's Location`}
              src={cities.find((c) => c.name === selectedCity)?.map}
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Social Media & FAQ */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Connect with Domino’s India</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Facebook", img: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg", desc: "Visit our page on Facebook", link: "https://www.facebook.com/DominosIndia" },
              { name: "Instagram", img: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png", desc: "Visit our page on Instagram", link: "https://www.instagram.com/dominos_india/" },
              { name: "Twitter", img: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg", desc: "Follow us on Twitter for updates", link: "https://twitter.com/Dominos_India" },
            ].map((social, i) => (
              <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-center p-6 text-center">
                <img src={social.img} alt={social.name} className="w-16 h-16 object-contain mb-3" />
                <h3 className="text-xl font-semibold text-red-600 mb-2">{social.name}</h3>
                <p className="text-gray-700">{social.desc}</p>
              </a>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">FAQ - People Also Ask</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow cursor-pointer" onClick={() => toggleFAQ(index)}>
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-800 text-left">{faq.question}</h3>
                    {openIndex === index ? <ChevronUp className="text-gray-700" /> : <ChevronDown className="text-gray-600" />}
                  </div>
                  {openIndex === index && (
                    <p className="mt-3 text-gray-700 leading-relaxed text-left border-t pt-3">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
             

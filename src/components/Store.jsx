
import React, { useState } from "react";

const popularCities = [
  { name: "New Delhi", count: 2 },
  { name: "Pune", count: 2 },
  { name: "Mumbai", count: 2 },
  { name: "Bangalore", count: 2 },
  { name: "Hyderabad", count: 2 },
  { name: "Chennai", count: 2 },
  { name: "Noida", count: 2 },
  { name: "Gurgaon", count: 2 },
  { name: "Kolkata", count: 2 },
  { name: "Lucknow", count: 2 },
];

const restaurants = [

  { city: "New Delhi", name: "Domino's Pizza - Connaught Place", address: "CP Complex, Connaught Place, New Delhi - 110001", phone: "011-23456789", deliveryTime: "30 mins", cost: "₹400 for 2 people approx", hours: "11 AM to 11 PM", goodFor: "Lunch, Dinner, Desserts, Late Night Delivery" },
  { city: "New Delhi", name: "Domino's Pizza - Saket", address: "Saket Mall, New Delhi - 110017", phone: "011-98765432", deliveryTime: "30 mins", cost: "₹400 for 2 people approx", hours: "11 AM to 11 PM", goodFor: "Lunch, Dinner, Desserts, Late Night Delivery" },
 
  { city: "Pune", name: "Domino's Pizza - Koregaon Park", address: "123, Koregaon Park, Pune - 411001", phone: "020-12345678", deliveryTime: "30 mins", cost: "₹400 for 2 people approx", hours: "11 AM to 11 PM", goodFor: "Lunch, Dinner, Desserts, Late Night Delivery" },
  { city: "Pune", name: "Domino's Pizza - Hinjewadi", address: "456, Hinjewadi, Pune - 411057", phone: "020-87654321", deliveryTime: "30 mins", cost: "₹400 for 2 people approx", hours: "11 AM to 11 PM", goodFor: "Lunch, Dinner, Desserts, Late Night Delivery" },
  
  { city: "Mumbai", name: "Domino's Pizza - Bandra", address: "14th Road, Khar, Mumbai - 400052", phone: "022-26004999", deliveryTime: "30 mins", cost: "₹400 for 2 people approx", hours: "11 AM to 11 PM", goodFor: "Lunch, Dinner, Desserts, Late Night Delivery" },
  { city: "Mumbai", name: "Domino's Pizza - Andheri", address: "Kapadia Industrial Estate, Andheri, Mumbai - 400072", phone: "022-26326699", deliveryTime: "30 mins", cost: "₹400 for 2 people approx", hours: "11 AM to 11 PM", goodFor: "Lunch, Dinner, Desserts, Late Night Delivery" },

  { city: "Bangalore", name: "Domino's Pizza - Koramangala", address: "Koramangala, Bangalore - 560034", phone: "080-12345678", deliveryTime: "30 mins", cost: "₹400 for 2 people approx", hours: "11 AM to 11 PM", goodFor: "Lunch, Dinner, Desserts, Late Night Delivery" },
  { city: "Bangalore", name: "Domino's Pizza - Whitefield", address: "Whitefield, Bangalore - 560066", phone: "080-87654321", deliveryTime: "30 mins", cost: "₹400 for 2 people approx", hours: "11 AM to 11 PM", goodFor: "Lunch, Dinner, Desserts, Late Night Delivery" },
  
  { city: "Hyderabad", name: "Domino's Pizza - Banjara Hills", address: "Banjara Hills, Hyderabad - 500034", phone: "040-12345678", deliveryTime: "30 mins", cost: "₹400 for 2 people approx", hours: "11 AM to 11 PM", goodFor: "Lunch, Dinner, Desserts, Late Night Delivery" },
  { city: "Hyderabad", name: "Domino's Pizza - Hitech City", address: "Hitech City, Hyderabad - 500081", phone: "040-87654321", deliveryTime: "30 mins", cost: "₹400 for 2 people approx", hours: "11 AM to 11 PM", goodFor: "Lunch, Dinner, Desserts, Late Night Delivery" },

  { city: "Chennai", name: "Domino's Pizza - T Nagar", address: "T Nagar, Chennai - 600017", phone: "044-12345678", deliveryTime: "30 mins", cost: "₹400 for 2 people approx", hours: "11 AM to 11 PM", goodFor: "Lunch, Dinner, Desserts, Late Night Delivery" },
  { city: "Chennai", name: "Domino's Pizza - Velachery", address: "Velachery, Chennai - 600042", phone: "044-87654321", deliveryTime: "30 mins", cost: "₹400 for 2 people approx", hours: "11 AM to 11 PM", goodFor: "Lunch, Dinner, Desserts, Late Night Delivery" },
  
  { city: "Noida", name: "Domino's Pizza - Sector 18", address: "Sector 18, Noida - 201301", phone: "0120-1234567", deliveryTime: "30 mins", cost: "₹400 for 2 people approx", hours: "11 AM to 11 PM", goodFor: "Lunch, Dinner, Desserts, Late Night Delivery" },
  { city: "Noida", name: "Domino's Pizza - Sector 62", address: "Sector 62, Noida - 201309", phone: "0120-7654321", deliveryTime: "30 mins", cost: "₹400 for 2 people approx", hours: "11 AM to 11 PM", goodFor: "Lunch, Dinner, Desserts, Late Night Delivery" },
  
  { city: "Gurgaon", name: "Domino's Pizza - MG Road", address: "MG Road, Gurgaon - 122001", phone: "0124-1234567", deliveryTime: "30 mins", cost: "₹400 for 2 people approx", hours: "11 AM to 11 PM", goodFor: "Lunch, Dinner, Desserts, Late Night Delivery" },
  { city: "Gurgaon", name: "Domino's Pizza - Sohna Road", address: "Sohna Road, Gurgaon - 122018", phone: "0124-7654321", deliveryTime: "30 mins", cost: "₹400 for 2 people approx", hours: "11 AM to 11 PM", goodFor: "Lunch, Dinner, Desserts, Late Night Delivery" },
 
  { city: "Kolkata", name: "Domino's Pizza - Park Street", address: "Park Street, Kolkata - 700016", phone: "033-12345678", deliveryTime: "30 mins", cost: "₹400 for 2 people approx", hours: "11 AM to 11 PM", goodFor: "Lunch, Dinner, Desserts, Late Night Delivery" },
  { city: "Kolkata", name: "Domino's Pizza - Salt Lake", address: "Salt Lake, Kolkata - 700064", phone: "033-87654321", deliveryTime: "30 mins", cost: "₹400 for 2 people approx", hours: "11 AM to 11 PM", goodFor: "Lunch, Dinner, Desserts, Late Night Delivery" },

  { city: "Lucknow", name: "Domino's Pizza - Hazratganj", address: "Hazratganj, Lucknow - 226001", phone: "0522-1234567", deliveryTime: "30 mins", cost: "₹400 for 2 people approx", hours: "11 AM to 11 PM", goodFor: "Lunch, Dinner, Desserts, Late Night Delivery" },
  { city: "Lucknow", name: "Domino's Pizza - Gomti Nagar", address: "Gomti Nagar, Lucknow - 226010", phone: "0522-7654321", deliveryTime: "30 mins", cost: "₹400 for 2 people approx", hours: "11 AM to 11 PM", goodFor: "Lunch, Dinner, Desserts, Late Night Delivery" },
];


export default function Store({ goToMenu })
 {
  const [selectedCity, setSelectedCity] = useState(null);
  const [search, setSearch] = useState("");

  const filteredRestaurants = (selectedCity
    ? restaurants.filter((r) => r.city === selectedCity)
    : popularCities.flatMap((city) =>
        restaurants.filter((r) => r.city === city.name).slice(0, 1)
      )
  ).filter(
    (r) =>
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6 w-full">
      <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">
        Pizza Restaurants Nearby
      </h1>

      <div className="max-w-3xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Search by restaurant or city"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>

      {!selectedCity && (
        <div className="max-w-6xl mx-auto mb-10">
          <h2 className="text-xl font-semibold mb-3">Popular Cities</h2>
          <div className="flex flex-wrap gap-3">
            {popularCities.map((city) => (
              <button
                key={city.name}
                onClick={() => setSelectedCity(city.name)}
                className="px-3 py-1 bg-white border border-gray-300 rounded-lg hover:bg-red-50 transition-all"
              >
                {city.name} ({city.count})
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedCity && (
        <div className="max-w-6xl mx-auto mb-4">
          <button
            onClick={() => setSelectedCity(null)}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            &larr; Back to all cities
          </button>
        </div>
      )}

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRestaurants.map((r, idx) => (
          <div
            key={idx}
            className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition-all"
          >
            <h3 className="text-lg font-bold text-red-600 mb-2">{r.name}</h3>
            <p className="text-gray-700 text-sm mb-1">{r.address}</p>
            <p className="text-gray-700 text-sm mb-1">City: {r.city}</p>
            <p className="text-gray-700 text-sm mb-1">PH: {r.phone}</p>
            <p className="text-gray-700 text-sm mb-1">Delivery: {r.deliveryTime}</p>
            <p className="text-gray-700 text-sm mb-1">Cost: {r.cost}</p>
            <p className="text-gray-700 text-sm mb-1">Hours: {r.hours}</p>
            <p className="text-gray-700 text-sm mb-3">Good for: {r.goodFor}</p>
            <div className="flex gap-2">
              <button
                className="flex-1 bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-800 transition-all"
                onClick={() => alert(`Dominos Pizza number: ${r.phone}`)}
              >
                Call
              </button>
              <button
                className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition-all"
                onClick={goToMenu}
              >
                View Menu
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

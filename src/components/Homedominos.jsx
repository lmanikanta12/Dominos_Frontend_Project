
import { useState } from "react";
import Login from "./Login";
import Menu from "./Menu";
import Contact from "./Contact";
import Giftcard from "./Giftcard";
import BirthdayPartyForm from "./BirthdayPartyForm";
import Catering from "./Catering";
import Store from "./Store";

export default function Homedominos()
 {
      const [activeSection, setActiveSection] = useState("home");
      const [loggedIn, setLoggedIn] = useState(false);

      const navItems =
      [
        loggedIn
          ? { name: "Logout", section: "home", isLogout: true }
          : { name: "Login", section: "login" },
        { name: "Menu", section: "menu" },
        { name: "Contact", section: "contact" },
        { name: "Giftcard", section: "giftcard" },
      ];

      const handleLoginSuccess = () =>
      {
        setLoggedIn(true);
        setActiveSection("menu"); 
      };

      return (
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <header className="w-full bg-gradient-to-r from-red-600 via-blue-700 to-purple-800 text-white shadow-md fixed top-0 z-50">
              <div className="flex items-center justify-between px-6 md:px-16 h-20">
              <h1 className="text-4xl font-extrabold cursor-pointer"
                onClick={() => setActiveSection("home")}>
                Domino's Pizza
              </h1>
              <nav className="flex gap-6 text-lg font-small">
                {navItems.map((item) => {
                  const isLogout = item.isLogout === true;
                  return (
                    <button
                      key={item.name}
                      onClick={() => {
                        if (isLogout) setLoggedIn(false);
                        setActiveSection(item.section);
                      }}
                      className={`transition-colors font-semibold py-1 px-1 rounded ${
                        isLogout
                          ? "bg-red-600 hover:bg-red-700 text-white"
                          : "hover:text-green-500 " +
                            (activeSection === item.section ? "text-yellow-300" : "")
                      }`}
                    >
                      {item.name}
                    </button>
                  );
                })}
              </nav>
            </div>
          </header>

          {/* Main Content */}
          <main className="pt-20 flex-grow flex flex-col items-center text-center bg-gray-100 w-full">
            {activeSection !== "home" && (
      <button
        onClick={() => setActiveSection("home")}
        className="fixed bottom-5 left-5 px-4 py-2 bg-gray-400 rounded-lg hover:bg-gray-400 transition z-50"
      >
        &larr; Back to Home
      </button>
    )}

            {activeSection === "home" && <HomeSection setActiveSection={setActiveSection} />}
            {activeSection === "login" && (
              <Login
                onLoginSuccess={handleLoginSuccess}
                goHome={() => setActiveSection("home")}
              />
            )}
            {activeSection === "menu" && <Menu loggedIn={loggedIn} />}
            {activeSection === "contact" && <Contact />}
            {activeSection === "giftcard" && <Giftcard />}
            {activeSection === "birthday" && <BirthdayPartyForm />}
            {activeSection === "catering" && <Catering />}
            {activeSection === "store" && <Store goToMenu={() => setActiveSection("menu")} />}
          </main>

          {/* Footer */}
          <Footer setActiveSection={setActiveSection} />
        </div>
      );
    }

    function Footer({ setActiveSection }) {
      return (
        <footer className="w-full bg-gray-900 text-gray-300 pt-12 pb-6">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

            {/* Brand */}
            <div>
              <h3 className="text-2xl font-extrabold text-white mb-3">Domino's Pizza</h3>
              <p className="text-sm text-gray-400">
                Delivering happiness, one hot & fresh pizza at a time. Loved and trusted by millions across India.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => setActiveSection("home")} className="hover:text-red-500 transition">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveSection("menu")} className="hover:text-red-500 transition">
                    Menu
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveSection("store")} className="hover:text-red-500 transition">
                    Nearby Store
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveSection("catering")} className="hover:text-red-500 transition">
                    Catering
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveSection("birthday")} className="hover:text-red-500 transition">
                    Birthday Party
                  </button>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-bold mb-3">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => setActiveSection("contact")} className="hover:text-red-500 transition">
                    Contact Us
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveSection("giftcard")} className="hover:text-red-500 transition">
                    Gift Cards
                  </button>
                </li>
                <li className="text-gray-400">FAQs</li>
                <li className="text-gray-400">Track Your Order</li>
              </ul>
            </div>

            {/* Contact / Social */}
            <div>
              <h4 className="text-white font-bold mb-3">Get In Touch</h4>
              <p className="text-sm text-gray-400 mb-1">📞 1800-208-1234</p>
              <p className="text-sm text-gray-400 mb-4">✉️ support@dominos.in</p>
              <div className="flex gap-4 text-xl">
                <span className="cursor-pointer hover:text-red-500 transition">📘</span>
                <span className="cursor-pointer hover:text-red-500 transition">📸</span>
                <span className="cursor-pointer hover:text-red-500 transition">🐦</span>
                <span className="cursor-pointer hover:text-red-500 transition">▶️</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Domino's Pizza. All rights reserved.
          </div>
        </footer>
      );
    }

    function HomeSection({ setActiveSection }) {
      return (
        <>
          {/* main Section */}
          <div
            className="w-full h-[50vh] bg-cover bg-center relative"
            style={{
              backgroundImage:
                "url('https://www.dominos.com.au/ManagedAssets/AU/product/M006D/AU_M006D_en_hero_12070.jpg?v-157310378')",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
              <h1 className="text-2xl md:text-3xl font-extrabold drop-shadow">
                Domino’s Online Ordering
              </h1>
              <p className="text-lg mt-1">Yummy pizza delivered fast & fresh</p>
              <button
                onClick={() => setActiveSection("login")}
                className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg"
              >
                ORDER NOW
              </button>
            </div>
          </div>
          
          {/* Why Order From Domino's */}
          <section className="mt-10 w-full max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-red-700 mb-8 text-center">
              Why Order from Domino’s?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { emoji: "⚡", title: "Superfast Delivery", desc: "Hot and fresh pizzas delivered to your doorstep in just 30 minutes." },
                { emoji: "📱", title: "Easy Online Ordering", desc: "Order your favorite pizza anytime through our app or website." },
                { emoji: "💰", title: "Exciting Deals", desc: "Enjoy amazing discounts and combo offers every day." },
                { emoji: "🧀", title: "Fresh Ingredients", desc: "Every pizza is made with the freshest cheese, veggies, and sauces." },
                { emoji: "🍕", title: "Variety of Choices", desc: "Choose from an exciting range of crusts, toppings, and sides." },
                { emoji: "⭐", title: "Trusted Brand", desc: "Loved and trusted by millions of pizza fans across India." },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition text-center">
                  <div className="text-5xl mb-3">{item.emoji}</div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Explore Section */}
          <section className="mt-16 w-full max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-extrabold mb-10 text-gray-800 text-left">Explore</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              
              <div className="bg-white border border-gray-300 rounded-lg p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
                <div className="text-5xl mb-4">📋</div>
                <h3 className="font-bold text-lg text-gray-800">OUR MENU</h3>
                <p className="text-sm text-gray-600 mt-2">Explore our range of delicious Pizzas, delivered in 30 minutes!</p>
                <button
                  onClick={() => setActiveSection("menu")}
                  className="mt-4 text-red-600 font-bold hover:underline"
                >
                  DISCOVER PIZZA
                </button>
              </div>

              
              <div className="bg-white border border-gray-300 rounded-lg p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
                <div className="text-5xl mb-4">📍</div>
                <h3 className="font-bold text-lg text-gray-800">NEARBY STORE</h3>
                <p className="text-sm text-gray-600 mt-2">Find a Domino’s Pizza restaurant near you</p>
                <button
                  onClick={() => setActiveSection("store")}
                  className="mt-4 text-red-600 font-bold hover:underline"
                >
                  FIND DOMINO'S STORE
                </button>
              </div>

             
              <div className="bg-white border border-gray-300 rounded-lg p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="font-bold text-lg text-gray-800">BIRTHDAY PARTY</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Celebrate the joy of birthday with Fresh &amp; Hot pizzas
                </p>
                <button
                  onClick={() => setActiveSection("birthday")}
                  className="mt-4 text-red-600 font-bold hover:underline"
                >
                  BOOK NOW
                </button>
              </div>

              
              <div className="bg-white border border-gray-300 rounded-lg p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
                <div className="text-5xl mb-4">🍽️</div>
                <h3 className="font-bold text-lg text-gray-800">CATERING</h3>
                <p className="text-sm text-gray-600 mt-2">Live Domino's Kitchen for weddings / corporate events</p>
                <button
                  onClick={() => setActiveSection("catering")}
                  className="mt-4 text-red-600 font-bold hover:underline"
                >
                  BOOK NOW
                </button>
              </div>

            </div>
          </section>

          {/* Domino's Info Section */}
          <section className="mt-16 w-full px-4 md:px-8 text-gray-800 text-left leading-relaxed max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-red-700">Domino's Pizza: Delivering Happiness</h2>

            <p className="mb-4">
              What’s better than a crispy, melty pizza? Enjoying it at home with loved ones. At Domino’s, it’s always “Rishton ka time”.
              Whether you're celebrating a promotion, a kid’s success, or simply unwinding — a hot, cheesy pizza makes every moment better.
            </p>

            <p className="mb-4">
              Choose from a wide variety of toppings — from fresh veggies to indulgent non-veg options — all on your favorite crust like cheese burst,
              pan or thin crust. Domino’s gives you the freedom to customize your perfect pizza.
            </p>

            <p className="mb-4">
              Enjoy exciting value deals starting at ₹99 and 30-minute delivery from over 1250+ stores across India — even on trains!
              Order now and experience pizza happiness wherever you are.
            </p>
          </section>
        </>
      );
    }

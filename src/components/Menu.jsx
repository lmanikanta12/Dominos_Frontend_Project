



import React, { useState } from "react";

export default function Menu({ loggedIn }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cartItems, setCartItems] = useState({});
  const [checkoutStage, setCheckoutStage] = useState("menu"); 
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [upiId, setUpiId] = useState("");

//menu details items

  const menuItems = [
    { key: "Vegpizza", label: "Veg Pizza" },
    { key: "Nonvegpizza", label: "Non Veg Pizza" },
    { key: "Pizzamania", label: "Pizza Mania" },
    { key: "Sideorders", label: "Side Orders" },
    { key: "Beverages", label: "Beverages" },
    { key: "Choiceofcrusts", label: "Crusts" },
    { key: "Choiceoftoppings", label: "Toppings" },
    { key: "Pasta", label: "Pasta" },
    { key: "Burger", label: "Burger" },
    { key: "Chickenwings", label: "Chicken Wings" },
    { key: "Chickenloverspizza", label: "Chicken Pizza" },
    { key: "Parathapizza", label: "Paratha Pizza" },
  ];

  const menuDetails = {
    Vegpizza: [
      {
        name: "VEGGIE PARADISE",
        price: 299,
        img: "https://www.dominos.co.in/files/items/Digital_Veggie_Paradise_olo_266x265.jpg",
        desc: "Golden Corn, Black Olives, Capsicum & Red Paprika",
      },
      {
        name: "CHEESE N CORN",
        price: 249,
        img: "https://www.dominos.co.in/files/items/Corn_&_Cheese.jpg",
        desc: "Cheese I Golden Corn | Cheese n Corn Pizza",
      },
      {
        name: "Indi Tandoori Paneer",
        price: 349,
        img: "https://www.dominos.co.in/files/items/IndianTandooriPaneer.jpg",
        desc: "Tandoori paneer with capsicum, red paprika, mint mayo",
      },
    ],
    Nonvegpizza: [
      {
        name: "CHICKEN FIESTA",
        price: 329,
        img: "https://www.dominos.co.in/files/items/MicrosoftTeams-image_(10).png",
        desc: "Grilled Chicken Rashers, Peri-Peri Chicken, Onion, Capsicum",
      },
      {
        name: "Chicken Pepperoni",
        price: 349,
        img: "https://www.dominos.co.in/files/items/MicrosoftTeams-image_(20).png",
        desc: "Relish the delectable flavor of Chicken Pepperoni",
      },
      {
        name: "PEPPER BARBECUE CHICKEN",
        price: 319,
        img: "https://www.dominos.co.in/files/items/MicrosoftTeams-image_(15).png",
        desc: "Pepper Barbecue Chicken and Cheese",
      },
    ],
    Pizzamania: [
      {
        name: "CHEESY",
        price: 179,
        img: "https://www.dominos.co.in/files/items/PrimeCheesyL.jpg",
        desc: "Orange Cheddar Cheese and Mozzarella",
      },
      {
        name: "CAPSICUM",
        price: 159,
        img: "https://www.dominos.co.in/files/items/CapsicumVeg.jpg",
        desc: "Capsicum",
      },
      {
        name: "NON VEG LOADED",
        price: 229,
        img: "https://www.dominos.co.in/files/items/LoadedC.jpg",
        desc: "Peri-Peri Chicken, Pepper Barbecue, Chicken Sausage",
      },
      {
        name: "PEPPER BARBECUE CHICKEN",
        price: 219,
        img: "https://www.dominos.co.in/files/items/PepperBarbecueChicken.jpg",
        desc: "Pepper Barbecue Chicken",
      },
    ],
    Sideorders: [
      {
        name: "Garlic Breadsticks",
        price: 129,
        img: "https://www.dominos.co.in/files/items/garlic-bread.webp",
        desc: "Tangy garlic flavor baked to perfection.",
      },
      {
        name: "Stuffed Garlic Bread",
        price: 169,
        img: "https://www.dominos.co.in/files/items/stuffed-garlic-breadstick_1346070564.webp",
        desc: "Stuffed with cheese, corn & jalapeños.",
      },
      {
        name: "Cheese Dip",
        price: 39,
        img: "https://www.dominos.co.in/files/items/_thumb_17450.png",
        desc: "Creamy cheese dip.",
      },
      {
        name: "Red Velvet Lava Cake",
        price: 109,
        img: "https://www.dominos.co.in/files/items/CAKE03.jpg",
        desc: "Rich red velvet cake with lava inside.",
      },
      {
        name: "Butterscotch Mousse Cake",
        price: 109,
        img: "https://www.dominos.co.in/files/items/170046_BMC_image_for_Website_272X272.jpg",
        desc: "Layers of butterscotch and dark chocolate.",
      },
    ],
    Beverages: [
      {
        name: "PEPSI BLACK CAN",
        price: 60,
        img: "https://www.dominos.co.in/files/items/pepsi_black.png",
      },
      {
        name: "7Up (500ml)",
        price: 60,
        img: "https://www.dominos.co.in/files/items/7up.png",
      },
      {
        name: "Mirinda (500ml)",
        price: 60,
        img: "https://www.dominos.co.in/files/items/mirinda.png",
      },
    ],
    Choiceofcrusts: [
      {
        name: "Cheese Burst",
        price: 80,
        img: "https://www.dominos.co.in/files/items/_1346164951.jpg",
        desc: "Crust filled with cheesy sauce inside.",
      },
      {
        name: "Fresh Pan Pizza",
        price: 60,
        img: "https://www.dominos.co.in/files/items/FPP_(1).jpg",
        desc: "Soft, buttery, cheesy and crunchy.",
      },
    ],
    Choiceoftoppings: [
      {
        name: "Veg Toppings",
        price: 40,
        img: "https://www.dominos.co.in/files/items/veg-toppings.jpg",
        desc: "Olives, Capsicum, Paneer, Mushroom, etc.",
      },
      {
        name: "Non Veg Toppings",
        price: 50,
        img: "https://www.dominos.co.in/files/items/nonveg-toppings.jpg",
        desc: "Barbeque Chicken, Chicken Sausage, Salami.",
      },
    ],
    Pasta: [
      {
        name: "Tikka Masala Pasta Non Veg",
        price: 229,
        img: "https://www.dominos.co.in/files/items/ChickenTikkaMasala_N.jpg",
        desc: "Fusilli pasta with tikka chicken and spices.",
      },
      {
        name: "Creamy Tomato Pasta Veg",
        price: 209,
        img: "https://www.dominos.co.in/files/items/CreamyTomatoVeg_N_(3).jpg",
        desc: "Fusilli pasta with creamy tomato dressing.",
      },
    ],
    Burger: [
      {
        name: "BURGER PIZZA- CLASSIC NON VEG",
        price: 149,
        img: "https://www.dominos.co.in/files/items/160790_Burger_Pizza_427X298_Pixel.jpg",
        desc: "Burger + pizza goodness with meat.",
      },
      {
        name: "BURGER PIZZA- CLASSIC VEG",
        price: 129,
        img: "https://www.kindpng.com/picc/m/5-54040_burger-transparent-veg-burger-hd-png-download.png",
        desc: "Veg patty with cheesy pizza filling.",
      },
    ],
    Chickenwings: [
      {
        name: "ROASTED CHICKEN WINGS PERI-PERI",
        price: 169,
        img: "https://www.dominos.co.in/files/items/Roasted-chicken-192x192.png",
        desc: "Juicy roasted chicken wings in peri-peri sauce.",
      },
      {
        name: "BONELESS CHICKEN WINGS PERI-PERI",
        price: 189,
        img: "https://www.dominos.co.in/files/items/Boneless-Chicken-wings-192x192.png",
        desc: "Boneless wings with peri-peri flavor.",
      },
    ],
    Chickenloverspizza: [
      {
        name: "The 5 Chicken Feast Pizza",
        price: 399,
        img: "https://www.dominos.co.in/files/items/chicken_feast.jpg",
        desc: "Grilled Chicken, Keema, Tikka, Meatballs & more.",
      },
      {
        name: "Spiced Double Chicken",
        price: 349,
        img: "https://www.dominos.co.in/files/items/spiced_doubled.jpg",
        desc: "Double dose of Peri Peri and Barbecue Chicken.",
      },
      {
        name: "Chicken Golden Delight",
        price: 319,
        img: "https://www.tasteofhome.com/wp-content/uploads/2019/06/Chicken-Parmesan-Pizza_EXPS_PPMBZ24_195069_DR_11_07_8b.jpg",
        desc: "Golden corn, cheese and chicken topping.",
      },
    ],
    Parathapizza: [
      {
        name: "Non Veg Paratha Pizza",
        price: 299,
        img: "https://www.dominos.co.in/files/items/chickenkeemaparatha.jpg",
        desc: "Delicious paratha base with chicken toppings.",
      },
      {
        name: "Veg Paratha Pizza",
        price: 249,
        img: "https://www.dominos.co.in/files/items/cornncheesepp.jpg",
        desc: "Paratha base topped with veggies and cheese.",
      },
    ],
  };
//  CART HANDLERS 
const addToCart = (item) => {
  if (!loggedIn) return alert("Login to add items!");
  setCartItems((prev) => ({ ...prev, [item.name]: (prev[item.name] || 0) + 1 }));
};

const removeFromCart = (item) => {
  setCartItems((prev) => {
    if (!prev[item.name]) return prev;
    const updatedQty = prev[item.name] - 1;
    if (updatedQty <= 0) {
      const { [item.name]: _ , ...rest } = prev;
      return rest;
    }
    return { ...prev, [item.name]: updatedQty };
  });
};

const clearCart = () => setCartItems({});
const totalItemsInCart = Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);

const cartItemDetails = Object.entries(cartItems)
  .map(([name, qty]) => {
    for (const categoryKey of Object.keys(menuDetails)) {
      const foundItem = menuDetails[categoryKey].find((item) => item.name === name);
      if (foundItem) return { ...foundItem, quantity: qty };
    }
    return null;
  })
  .filter(Boolean);

const totalPrice = cartItemDetails.reduce((sum, item) => sum + item.price * item.quantity, 0);

// CHECKOUT FLOW
const proceedBuyNow = () => {
  if (totalItemsInCart === 0) return alert("Cart is empty!");
  setCheckoutStage("address");
};

const goToPayment = () => {
  if (!address.trim()) return alert("Enter valid address");
  setCheckoutStage("payment");
};

const placeOrder = () => {
  if (!paymentMethod) return alert("Select payment method");
  if (paymentMethod === "UPI" && !upiId.trim()) return alert("Enter UPI ID");
  setCheckoutStage("confirmation");
  clearCart();
};

const orderMore = () => {
  setCheckoutStage("menu");
  setAddress("");
  setPaymentMethod("");
  setUpiId("");
  setSelectedCategory(null);
};


return (
  <div className="relative w-full max-w-6xl mx-auto px-5 py-5">

  
    {checkoutStage === "menu" && !selectedCategory && (
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-red-600 mb-4 text-center">
          Domino's Menu
        </h1>
        <div className="flex flex-wrap justify-center gap-4">
          {menuItems.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className="bg-blue-400 hover:bg-blue-400 text-white px-4 py-2 rounded-md transition font-medium"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    )}

    {/*Full Menu  */}
    {checkoutStage === "menu" && (
      <>
        {!selectedCategory && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map(({ key, label }) => {
              const items = menuDetails[key]?.slice(0, 1) || [];
              return (
                
                 <div key={key} className="border rounded-xl p-4 shadow-sm bg-white">
                  <h2 className="text-xl font-semibold mb-2 text-red-600">{label}</h2>
                  {items.map((item) => (
                    <div key={item.name} className="text-center">
                      <img src={item.img} alt={item.name} className="w-24 h-24 object-cover mx-auto rounded-md mb-1"/>
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-gray-500">₹{item.price}</p>
                    </div>
                  ))}
                  <button
                    onClick={() => setSelectedCategory(key)}
                    className="mt-3 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md transition"
                  >
                    View All →
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {selectedCategory && (
          <div>
            <button
              onClick={() => setSelectedCategory(null)}
              className="mb-5 bg-yellow-400 hover:bg-yellow-400 px-4 py-2 rounded-md"
            >
              ← Back to Menu
            </button>
            <div className="flex flex-wrap gap-5">
              {menuDetails[selectedCategory]?.map((item) => {
                const quantityInCart = cartItems[item.name] || 0;
                return (
                  <div key={item.name} className="border rounded-lg p-3 w-56 h-30 shadow-sm text-center">
                    <img src={item.img} alt={item.name} className="w-full h-30 object-cover rounded-md mb-3"/>
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    {item.desc && <p className="text-gray-600 text-sm mb-2">{item.desc}</p>}
                    <p className="font-bold mb-3">₹{item.price}</p>
                    {quantityInCart === 0 ? (
                      <button onClick={() => addToCart(item)} className="bg-blue-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition">Add to Cart</button>
                    ) : (
                      <div className="flex justify-center items-center gap-2">
                        <button onClick={() => removeFromCart(item)} className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md transition">-</button>
                        <span className="font-semibold">{quantityInCart}</span>
                        <button onClick={() => addToCart(item)} className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md transition">+</button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </>
    )}

    {/* Cart, Address, Payment, Confirmation  */}
    {(checkoutStage === "cart" || checkoutStage === "address" || checkoutStage === "payment" || checkoutStage === "confirmation") && (
      <div className="p-5 bg-white rounded-xl shadow space-y-5">

        {/* Cart Items */}
        {checkoutStage !== "confirmation" && (
          <>
            <h2 className="text-xl font-bold mb-3">Your Cart</h2>
            {cartItemDetails.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                <ul className="mb-3">
                  {cartItemDetails.map((item) => (
                    <li key={item.name} className=" text-xl font-bold flex justify-between mb-2  text-purple-700">
                      {item.name} x {item.quantity} <span>₹{item.price * item.quantity}</span>
                    </li>
                  ))}
                </ul>
                <p className=" text-2xl text-orange-700 font-bold mb-3">Total: ₹{totalPrice}</p>
                {checkoutStage === "cart" && (
                  <button
                    onClick={proceedBuyNow}
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                  >
                    Buy Now
                  </button>
                )}
              </>
            )}
          </>
        )}

        {/* Address Stage */}
        {checkoutStage === "address" && (
          <div>
            <h2 className="text-xl font-bold mb-3">Delivery Address</h2>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border p-2 rounded-md mb-3"
              placeholder="Enter your address"
            />
            <div className="flex gap-3">
              <button onClick={() => setCheckoutStage("cart")} className="bg-gray-300 px-3 py-1 rounded-md">Back</button>
              <button onClick={goToPayment} className="bg-green-500 text-white px-3 py-1 rounded-md">Continue</button>
            </div>
          </div>
        )}

        {/* Payment Stage */}
        {checkoutStage === "payment" && (
          <div>
            <h2 className="text-xl font-bold mb-3">Payment Method</h2>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full border p-2 rounded-md mb-3"
            >
              <option value="">--Select--</option>
              <option value="COD">Cash on Delivery</option>
              <option value="UPI">UPI</option>
            </select>
            {paymentMethod === "UPI" && (
              <input
                type="text"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                placeholder="Enter UPI ID"
                className="w-full border p-2 rounded-md mb-3"
              />
            )}
            <div className="flex gap-3">
              <button onClick={() => setCheckoutStage("address")} className="bg-gray-300 px-3 py-1 rounded-md">Back</button>
              <button onClick={placeOrder} className="bg-red-500 text-white px-3 py-1 rounded-md">Place Order</button>
            </div>
          </div>
        )}

        {/* Confirmation */}
        {checkoutStage === "confirmation" && (
          <div className="min-h-screen flex flex-col items-center justify-center px-4">
            <h2 className="text-4xl font-bold mb-4 text-center">
              ✅Thank you for your order!
            </h2>
            <p className="text-lg mb-6 text-center">
              Your delicious pizza is on its way 🍕
            </p>
            <button
              onClick={orderMore}
              className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition font-semibold"
            >
              Order More
            </button>
          </div>
        )}

      </div>
    )}

    {/*  Floating Cart Button - */}
    {checkoutStage === "menu" && (
      <button
        onClick={() => setCheckoutStage("cart")}
        className="fixed bottom-5 right-5  bg-purple-700 text-white px-7 py-5 rounded-full shadow-lg z-50 hover:bg-red-600 transition"
      >
        Cart🛒 {totalItemsInCart} Items
      </button>
    )}

  </div>
);
}
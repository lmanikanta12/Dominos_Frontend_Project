export default function GiftCard() {
  return (
    <div className="font-sans text-gray-800">
      {/* Top Banner with reduced height */}
      <section className="relative w-full h-64 md:h-80 overflow-hidden">
        <img
          src="https://www.dominos.co.in/theme2/front/images/voucherimages/giftcardbanner.png"
          alt="Domino's Gift Card"
          className="w-full h-full object-cover"
        />
      </section>

      {/* Gift Options */}
      <section className="text-center py-12 px-4 md:px-16 bg-white">
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-10">
          GIFT DELICIOUS MOMENTS WITH DOMINO'S PIZZA GIFTING SOLUTIONS
        </h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* E-Gift Voucher */}
          <div className="border border-gray-300 rounded-lg p-6 shadow bg-white">
            <img
              src="https://www.jigsawstore.com.au/assets/full/GIFTVOUCHER_100.jpg?20201123191811"
              alt="E-Gift Voucher"
              className="w-40 h-28 mx-auto mb-4 object-contain rounded"
            />
            <h3 className="text-lg font-bold mb-2">E-GIFT VOUCHER</h3>
            <p className="text-sm text-gray-700">
              Instantly send a Domino’s voucher. Ideal for any occasion via app or mobile site.
            </p>
          </div>

          {/* Gift Card */}
          <div className="border border-gray-300 rounded-lg p-6 shadow bg-white">
            <img
              src="http://acadianasthriftymom.com/wp-content/uploads/2012/09/dominos-pizza-gift-card.jpg"
              alt="Gift Card"
              className="w-40 h-28 mx-auto mb-4 object-contain rounded"
            />
            <h3 className="text-lg font-bold mb-2">GIFT CARD</h3>
            <p className="text-sm text-gray-700">
              Reloadable card usable at Domino’s outlets, app, and site. Easy & convenient!
            </p>
          </div>
        </div>
      </section>

      {/* Gifting for Every Occasion */}
      <section className="bg-yellow-20 text-center py-6 px-4">
        <h2 className="text-2xl font-bold text-red-700 mb-6">
          DOMINO'S PIZZA GIFTING FOR EVERY OCCASION
        </h2>
        <div className="flex justify-center items-center gap-6 max-w-7xl mx-auto flex-wrap">
          {[
            "https://www.dominos.co.in/theme2/front/images/voucherimages/carousel6.png",
            "https://prod-cs-gft-static.s3.amazonaws.com/wp-content/uploads/2022/09/19101644/20-dominos-gift-card.jpeg",
            "https://www.dominos.co.in/theme2/front/images/voucherimages/carousel14.png",
            "https://www.dominos.co.in/theme2/front/images/voucherimages/carousel12.png",
          ].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Domino's${idx + 1}`}
              className="w-60 h-60 rounded object-contain "
            />
          ))}
        </div>
      </section>

      {/* How to Redeem */}
      <section className="bg-gray-50 py-12 px-4 md:px-16 text-center">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">HOW TO REDEEM</h2>
       <button
  onClick={() => alert("Redeem dominnos gift cards")}
  className="bg-blue-700 text-white px-6 py-2 rounded font-semibold mb-10 hover:bg-blue-800"
>
  Redeem Online
</button>


        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <span className="text-3xl mb-2">🍕</span>
            <h4 className="text-lg font-semibold mb-2">Place Order</h4>
            <p className="text-sm text-gray-600">
              Add items on the mobile app or site and proceed to pay.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <span className="text-3xl mb-2">💰</span>
            <h4 className="text-lg font-semibold mb-2">Payment Method</h4>
            <p className="text-sm text-gray-600">Select the Voucher/Gift Card option at checkout.</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <span className="text-3xl mb-2">🎁</span>
            <h4 className="text-lg font-semibold mb-2">Enter Details</h4>
            <p className="text-sm text-gray-600">
              Input your Voucher or Gift Card number and PIN/OTP.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center">
            <span className="text-3xl mb-2">💳</span>
            <h4 className="text-lg font-semibold mb-2">Make Payment</h4>
            <p className="text-sm text-gray-600">
              Complete payment and pay any remaining balance if needed.
            </p>
          </div>
        </div>
        <p className="w-full text-left -ml-2 md:-ml-8 mt-6">
  Pizza parties are most loved by people of all ages. The one food that comes into the mind of any person when asked what they want to eat is Pizza! Make your pizza parties more fun with Domino’s pizza gift vouchers.
</p>

      </section>
    </div>
  );
}

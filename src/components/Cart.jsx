function Cart({ cart, setCart, onBack, onCheckout }) {
  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };
console.log(cart);
 const total = cart.reduce((sum, item) => {
  return sum + item.price * item.qty;
}, 0);

  return (
    <div className="p-8">

      {/* BACK BUTTON */}
      <button
        onClick={onBack}
        className="mb-4 text-blue-600 font-semibold"
      >
        ← Back to Shop
      </button>

      <h2 className="text-3xl font-bold mb-6">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
  <div key={item.id} className="flex justify-between bg-white p-4 mb-3 shadow rounded">

    <div>
      <h3 className="font-bold">{item.name}</h3>
      <p>₹{item.price.toLocaleString("en-IN")}</p>

      {/* QUANTITY CONTROLS */}
      <div className="flex items-center gap-2 mt-2">

        <button
          onClick={() => {
            setCart((prev) =>
              prev.map((p) =>
                p.id === item.id && p.qty > 1
                  ? { ...p, qty: p.qty - 1 }
                  : p
              )
            );
          }}
          className="px-2 bg-gray-200"
        >
          -
        </button>

        <span>{item.qty}</span>

        <button
          onClick={() => {
            setCart((prev) =>
              prev.map((p) =>
                p.id === item.id
                  ? { ...p, qty: p.qty + 1 }
                  : p
              )
            );
          }}
          className="px-2 bg-gray-200"
        >
          +
        </button>

      </div>
    </div>

    <button
      onClick={() => {
        setCart((prev) => prev.filter((p) => p.id !== item.id));
      }}
      className="text-red-500"
    >
      Remove
    </button>
  </div>
))}

          <h3 className="text-2xl font-bold mt-6">
  Total: ₹{total.toLocaleString("en-IN")}
</h3>
<button
  onClick={onCheckout}
  className="mt-4 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
>
  Proceed to Checkout
</button>
        </>
      )}
    </div>
  );
}

export default Cart;
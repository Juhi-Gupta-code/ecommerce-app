function Checkout({ cart, onBack, onPlaceOrder }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="p-8">
      <button
        onClick={onBack}
        className="mb-4 text-blue-600 font-semibold"
      >
        ← Back to Cart
      </button>

      <h2 className="text-3xl font-bold mb-6">🧾 Checkout</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between border-b py-2"
        >
          <span>
            {item.name} × {item.qty}
          </span>
          <span>
            ₹{(item.price * item.qty).toLocaleString("en-IN")}
          </span>
        </div>
      ))}

      <h3 className="text-2xl font-bold mt-6">
        Total: ₹{total.toLocaleString("en-IN")}
      </h3>

     <button
  onClick={onPlaceOrder}
  className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
>
  Place Order
</button>
    </div>
  );
}

export default Checkout;
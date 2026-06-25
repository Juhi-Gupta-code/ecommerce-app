function Navbar({ cartCount, totalPrice, onCartClick, onHomeClick }) {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 flex justify-between items-center shadow-lg">
      <h1
  onClick={onHomeClick}
  className="text-3xl font-bold cursor-pointer"
>
  🛍️ ShopEase
</h1>

      <div className="hidden md:flex gap-6">
        <a href="#" className="hover:text-yellow-300">Home</a>
        <a href="#" className="hover:text-yellow-300">Products</a>
        <a href="#" className="hover:text-yellow-300">Categories</a>
        <a href="#" className="hover:text-yellow-300">Contact</a>
      </div>

    <div
  onClick={onCartClick}
  className="flex items-center gap-2 cursor-pointer"
>
  🛒
  <span className="bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
    {cartCount}
  </span>

  <span className="text-sm ml-2">
    ₹{totalPrice}
  </span>
</div>
    </nav>
  );
}

export default Navbar;
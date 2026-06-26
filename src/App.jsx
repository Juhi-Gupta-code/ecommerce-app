import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import CategoryCard from "./components/CategoryCard";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { useEffect } from "react";
import Checkout from "./components/Checkout";


function App() {
  
 const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
});
const [searchTerm, setSearchTerm] = useState("");
const [showCart, setShowCart] = useState(false);
const [showCheckout, setShowCheckout] = useState(false);
const [toast, setToast] = useState("");
const [selectedProduct, setSelectedProduct] = useState(null);
const [selectedCategory, setSelectedCategory] = useState("All");
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

const handleAddToCart = (product) => {
  setToast(`${product.name} added to cart!`);

  setTimeout(() => {
    setToast("");
  }, 2000);
  setCart((prev) => {
    const exists = prev.find((item) => item.id === product.id);

    if (exists) {
      return prev.map((item) =>
        item.id === product.id
          ? { ...item, qty: item.qty + 1 }
          : item
      );
    }
    

    return [...prev, { ...product, qty: 1 }];
  });
};
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2499,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 3999,
    category: "Watches",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 1999,
    category: "Shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
  {
    id: 4,
    name: "Cotton T-Shirt",
    price: 999,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
  },
  {
    id: 5,
    name: "Gaming Laptop",
    price: 74999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
  },
  {
    id: 6,
    name: "Android Phone",
    price: 28999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
  },
  {
    id: 7,
    name: "DSLR Camera",
    price: 45999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
  },
  {
    id: 8,
    name: "Travel Backpack",
    price: 1799,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=500",
  },
  {
    id: 9,
    name: "Bluetooth Speaker",
    price: 3499,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500",
  },
  {
    id: 10,
    name: "Sports Sneakers",
    price: 2999,
    category: "Shoes",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
  },
  
{
  id: 11,
  name: "Wireless Earbuds",
  price: 5499,
  category: "Electronics",
  rating: 4.6,
  description: "Compact true wireless earbuds with immersive sound.",
  image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500",
},
{
  id: 12,
  name: "Leather Strap Watch",
  price: 5999,
  category: "Watches",
  rating: 4.5,
  description: "Classic watch with genuine leather strap and quartz movement.",
  image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500",
},
{
  id: 13,
  name: "Casual Hoodie",
  price: 1499,
  category: "Fashion",
  rating: 4.4,
  description: "Soft cotton hoodie perfect for everyday wear.",
  image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
},
{
  id: 14,
  name: "Gaming Keyboard",
  price: 3299,
  category: "Electronics",
  rating: 4.7,
  description: "Mechanical keyboard with RGB backlighting.",
  image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
},
{
  id: 15,
  name: "White Sneakers",
  price: 4299,
  category: "Shoes",
  rating: 4.5,
  description: "Minimal white sneakers suitable for casual outfits.",
  image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500",
},
{
  id: 16,
  name: "Slim Fit Jeans",
  price: 2199,
  category: "Fashion",
  rating: 4.3,
  description: "Comfortable slim-fit denim jeans with stretch fabric.",
  image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
},
{
  id: 17,
  name: "Tablet Pro 11",
  price: 27999,
  category: "Electronics",
  rating: 4.8,
  description: "11-inch tablet designed for work, study, and entertainment.",
  image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
},

];
const filteredProducts = products.filter((product) => {
  const matchesSearch = product.name
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  const matchesCategory =
    selectedCategory === "All" ||
    product.category === selectedCategory;

  return matchesSearch && matchesCategory;
});

  
  const totalPrice = cart.reduce((sum, item) => {
  const price = typeof item.price === "string"
    ? Number(item.price.replace("₹", ""))
    : item.price;

  return sum + price * item.qty;
}, 0);
 return (
  
  <div className="min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50">
    {toast && (
  <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50">
    ✅ {toast}
  </div>
)}

    {showCheckout ? (
  <Checkout
    cart={cart}
    onBack={() => {
      setShowCheckout(false);
      setShowCart(true);
    }}
    onPlaceOrder={() => {
      alert("🎉 Order placed successfully!");

      setCart([]);              // Clear the cart
      setShowCheckout(false);   // Exit checkout
      setShowCart(false);       // Return to home page
    }}
  />
) : showCart ? (
  <Cart
    cart={cart}
    setCart={setCart}
    onBack={() => setShowCart(false)}
    onCheckout={() => {
      setShowCart(false);
      setShowCheckout(true);
    }}
  />
) : (
  <>
   <Navbar
  cartCount={cart.reduce((t, i) => t + i.qty, 0)}
  totalPrice={totalPrice}
  onCartClick={() => setShowCart(true)}
  onHomeClick={() => {
    console.log("Home clicked!");
    setShowCart(false);
    setShowCheckout(false);
    setSelectedProduct(null);
  }}
/>
        <Hero />

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        {/* Shop by Category */}
        <section className="px-8 py-10 bg-gray-50">
  <h2 className="text-3xl font-bold text-center mb-8">
    Shop by Category
  </h2>

  <div className="text-center mb-6">
    <button
      onClick={() => setSelectedCategory("All")}
      className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
    >
      Show All Products
    </button>
  </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div 
            className="cursor-pointer"
            onClick={() => setSelectedCategory("Electronics")}>
  <CategoryCard emoji="🎧" title="Electronics" />
</div>

<div 
className="cursor-pointer"
onClick={() => setSelectedCategory("Watches")}>
  <CategoryCard emoji="⌚" title="Watches" />
</div>

<div 
className="cursor-pointer"
onClick={() => setSelectedCategory("Shoes")}>
  <CategoryCard emoji="👟" title="Shoes" />
</div>

<div 
className="cursor-pointer"
onClick={() => setSelectedCategory("Fashion")}>
  <CategoryCard emoji="👕" title="Fashion" />
</div>
</div>
        </section>

        {/* Featured Products */}
        <section className="px-8 py-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Products
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
  key={product.id}
  product={product}
  onAddToCart={handleAddToCart}
  onViewDetails={setSelectedProduct}
/>
            ))}
          </div>
        </section>

        {/* Trending */}
        <section className="px-8 py-12">
  <h2 className="text-3xl font-bold text-center mb-8">
    🔥 Trending Now
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    {[
      {
        name: "Laptop",
        image:
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
      },
      {
        name: "Phone",
        image:
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
      },
      {
        name: "Camera",
        image:
          "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
      },
      {
        name: "Backpack",
        image:
          "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=500",
      },
    ].map((item) => (
      <div
        key={item.name}
        className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-xl transition"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />

        <h3 className="font-semibold text-lg">{item.name}</h3>
      </div>
    ))}
  </div>
</section>

        <Footer />
      </>
    )}
    {selectedProduct && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl p-6 w-96 relative">
      <button
        onClick={() => setSelectedProduct(null)}
        className="absolute top-2 right-3 text-xl"
      >
        ✖
      </button>

      <img
        src={selectedProduct.image}
        alt={selectedProduct.name}
        className="w-full h-56 object-cover rounded-lg"
      />

      <h2 className="text-2xl font-bold mt-4">
        {selectedProduct.name}
      </h2>

      <p className="text-gray-600 mt-2">
        Category: {selectedProduct.category}
      </p>

      <p className="text-indigo-600 text-xl font-bold mt-2">
        ₹{selectedProduct.price.toLocaleString("en-IN")}
      </p>

      <button
        onClick={() => {
          handleAddToCart(selectedProduct);
          setSelectedProduct(null);
        }}
        className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
      >
        Add to Cart
      </button>
    </div>
  </div>
)}
  </div>
);
}
export default App;
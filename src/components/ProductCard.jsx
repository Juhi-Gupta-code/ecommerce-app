import { useState } from "react";

function ProductCard({ product, onAddToCart, onViewDetails }) {
  const [liked, setLiked] = useState(false);

  return (
    <div
  onClick={() => onViewDetails(product)}
  className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-2xl hover:-translate-y-1 transition duration-300 relative cursor-pointer"
>
      {/* Discount Badge */}
      <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
        20% OFF
      </span>

      {/* Wishlist */}
      <button
  onClick={(e) => {
    e.stopPropagation();
    setLiked(!liked);
  }}
  className="absolute top-3 right-3 text-2xl"
>
  {liked ? "❤️" : "🤍"}
</button>
      {/* Product Placeholder */}
      <img
  src={product.image}
  alt={product.name}
  className="h-48 w-full object-cover rounded-xl"
/>

      {/* Product Name */}
      <h3 className="text-xl font-bold mt-4">
        {product.name}
      </h3>

      {/* Rating */}
      <div className="flex items-center mt-2">
        ⭐⭐⭐⭐☆
        <span className="ml-2 text-gray-500 text-sm">(4.5)</span>
      </div>

      {/* Price */}
      <p className="text-indigo-600 font-bold text-2xl mt-3">
        ₹{product.price.toLocaleString("en-IN")}
      </p>

      {/* Add to Cart */}
     <button
  onClick={(e) => {
    e.stopPropagation(); // Prevent opening the product popup
    onAddToCart(product);
  }}
  className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
>
  Add to Cart
</button>
    </div>
  );
}

export default ProductCard;
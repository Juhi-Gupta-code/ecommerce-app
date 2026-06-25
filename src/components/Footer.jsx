function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="text-center">
        <h2 className="text-2xl font-bold">🛍️ ShopEase</h2>
        <p className="mt-2 text-gray-400">
          Your trusted online shopping destination.
        </p>

        <div className="flex justify-center gap-6 mt-4">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          © 2026 ShopEase. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
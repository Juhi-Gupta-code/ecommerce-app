function CategoryCard({ emoji, title }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer">
      <div className="text-5xl mb-3">{emoji}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  );
}

export default CategoryCard;
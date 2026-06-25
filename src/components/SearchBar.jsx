function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="flex justify-center py-8 bg-white">
      <div className="flex w-full max-w-2xl shadow-lg rounded-full overflow-hidden">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-5 py-3 outline-none"
        />

        <button className="bg-indigo-600 text-white px-8">
          🔍
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
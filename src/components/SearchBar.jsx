import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSearch?.(query.trim());
  }

  function handleChange(event) {
    const nextQuery = event.target.value;
    setQuery(nextQuery);
    onSearch?.(nextQuery.trim());
  }

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className="mx-auto mb-8 flex w-full max-w-xl items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm focus-within:border-[#54b7f0] focus-within:ring-2 focus-within:ring-[#6154F0]/20"
    >
      <input
        type="search"
        value={query}
        onChange={handleChange}
        placeholder="Apple Watch, Samsung S21, Macbook Pro..."
        aria-label="Search products"
        className="min-w-0 flex-1 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
      />
      <button
        type="submit"
        aria-label="Search"
        className="shrink-0 text-gray-500 transition-colors hover:text-[#549df0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#549df0]"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;

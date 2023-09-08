import React from "react";

export default function SearchBar({ submit }) {
  return (
    <form
      onSubmit={submit}
      className="text-center rounded-[40px] shadow text-gray-700 overflow-hidden bg-white w-60 relative"
    >
      <input
        type="text"
        name="search"
        placeholder="חיפוש..."
        className="w-full h-4 focus:outline-none px-4"
      />
      <button
        type="submit"
        className="absolute top-1 left-2 h-4 w-4 rounded-full flex text-lg items-center justify-center bg-orange-100"
      >
        🍳
      </button>
    </form>
  );
}

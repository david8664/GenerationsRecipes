import React, { useState } from "react";

function DescriptionSection({ description, setDescription }) {
  const handleInputChange = (e) => {
    const newValue = e.target.value;

    // Count the number of newline characters in the new value
    const newLinesCount = (newValue.match(/\n/g) || []).length;
    if (newLinesCount < 3) {
      setDescription(newValue);
    }
  };
  return (
    <div className="flex flex-row px-4 rounded-l-lg w-fit max-h-32 border border-black rounded-lg">
      <label htmlFor="description" className="text-lg my-auto pl-4">
        תיאור:
      </label>
      <textarea
        name="description"
        id="description"
        cols="46"
        rows="3"
        placeholder="המאכל הלבנוני המסורתי עם טוויסט מיוחד של זרעי צנובר וכורכום"
        className="mb-4 w-full p-2 bg-transparent focus:outline-none resize-none overflow-hidden"
        value={description}
        onChange={handleInputChange}
        maxLength={70}
        minLength={10}
        required
      ></textarea>
    </div>
  );
}

export default DescriptionSection;

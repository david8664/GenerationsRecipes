// components/CreateRecipeForm/TagsSection.jsx
import React, { useState } from "react";
import AddCategory from "@/components/ui/AddCategory";
import tagsDB from "@/Data/tagsDB.json"; // DB test only

function TagsSection({ setRecipeData, tags }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTags, setFilteredTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    filterTags(e.target.value);
  };

  const handleTagSelect = (tag) => {
    if (!tags.includes(tag)) {
      setRecipeData((prevData) => ({
        ...prevData,
        tags: [...prevData.tags, tag],
      }));
      setSelectedTag("");
      setSearchTerm("");
    }
  };

  const filterTags = (searchTerm) => {
    const filtered = tagsDB.filter((tag) =>
      tag.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredTags(filtered.length > 0 ? filtered : ["לא נמצאה קטגוריה"]);
  };

  return (
    <div className="flex flex-row gap-x-3">
      <label htmlFor="tags">קטגוריות:</label>
      <div>
        <input
          type="text"
          placeholder="חפש קטגוריה"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border-black border-b-2 outline-none px-8 w-36 rounded-t-md ml-4"
        />
        {searchTerm.length > 0 && (
          <div className="text-center scrollable-container">
            {filteredTags.map((tag) => (
              <div
                key={tag}
                className="cursor-pointer"
                onClick={() => handleTagSelect(tag)}
              >
                {tag}
              </div>
            ))}
          </div>
        )}
      </div>
      <AddCategory tags={tags} setCategories={setRecipeData} />
    </div>
  );
}

export default TagsSection;

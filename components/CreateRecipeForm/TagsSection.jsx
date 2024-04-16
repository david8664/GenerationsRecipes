// components/CreateRecipeForm/TagsSection.jsx
import React, { useEffect, useState } from "react";
import AddCategory from "@/components/AddCategory";
import api from "@/lib/apiCalls";

function TagsSection({ setRecipeData, tags }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTags, setFilteredTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");
  const [allTags, setAllTags] = useState([]);

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

  useEffect(() => {
    const fetchTags = async () => {
      try {
        // const response = await api.get("r/tags");
        // setAllTags(response.message);
        setAllTags(["a", "b", "c", "d", "e", "f"]);
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };

    fetchTags();
  }, []);

  const filterTags = (searchTerm) => {
    const filtered = allTags.filter((tag) =>
      tag.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredTags(filtered.length > 0 ? filtered : ["לא נמצאה קטגוריה"]);
  };

  return (
    <div className="flex flex-row gap-x-3 w-fit h-fit">
      <label htmlFor="tags">קטגוריות:</label>
      <div>
        <input
          type="text"
          name="tags"
          id="tags"
          placeholder="חפש קטגוריה"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border-gray-400 border-b-2 outline-none px-8 w-36 rounded-t-md ml-4 bg-transparent"
        />
        {searchTerm.length > 0 && (
          <div className="scrollable-container">
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
      {tags.length > 0 && (
        <AddCategory tags={tags} setCategories={setRecipeData} />
      )}
    </div>
  );
}

export default TagsSection;

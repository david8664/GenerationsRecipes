"use client";
import React, { useState, useRef } from "react";
import { MdImageSearch } from "react-icons/md";
import { LuClock4 } from "react-icons/lu";
import AddCategory from "@/components/ui/AddCategory";
import tags from "@/Data/tagsDB.json"; // test only
import RichTextEditor from "@/components/ui/RichTextEditor/RichTextEditor";

export default function CreateRecipe() {
  const [recipeData, setRecipeData] = useState({
    illustrationImage: null,
    name: "",
    preparationTime: { hour: 0, minute: 0 },
    tags: [],
    description: "",
    ingredients: [],
    preparationMethod: "",
    comments: "",
    allergens: [],
    isPrivate: false,
  });
  const fileInputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTags, setFilteredTags] = useState(tags);
  const [selectedTag, setSelectedTag] = useState("");

  const handleTagsChange = (e) => {
    setSearchTerm(e.target.value);
    filterTags(e.target.value);
  };

  const handleTagSelect = (tag) => {
    if (!recipeData.tags.includes(tag)) {
      setRecipeData({
        ...recipeData,
        tags: [...recipeData.tags, tag],
      });
      setSelectedTag("");
      setSearchTerm("");
    }
  };

  const filterTags = (searchTerm) => {
    const filtered = tags.filter((tag) =>
      tag.toLowerCase().includes(searchTerm.toLowerCase())
    );

    filtered.length > 0
      ? setFilteredTags(filtered)
      : setFilteredTags(["לא נמצאה קטגוריה"]);
  };

  const onImageChange = (event) => {
    if (event.target.files) {
      const imageUrl = URL.createObjectURL(event.target.files[0]);
      setRecipeData({ ...recipeData, illustrationImage: imageUrl });
    }
  };

  const handleSelectImage = () => fileInputRef.current.click();

  const handleInputChange = (field, e) => {
    setRecipeData({ ...recipeData, [field]: e.target.value });
  };

  return (
    <form className="flex flex-col gap-y-2 h-screen">
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={onImageChange}
        className="filetype hidden"
      />
      <div className="w-full h-1/6 relative bg-slate-300">
        {!recipeData.illustrationImage ? (
          <div className="absolute right-[40%] w-1/5 h-full">
            <MdImageSearch
              onClick={handleSelectImage}
              className="w-full h-full cursor-pointer fill-slate-700"
            />
          </div>
        ) : (
          <img
            src={recipeData.illustrationImage}
            alt="Recipe image"
            className="object-cover w-full h-full cursor-pointer"
            onClick={handleSelectImage}
          />
        )}
      </div>
      <div className="relative w-full h-6">
        <input
          type="text"
          placeholder="שם המתכון"
          name="name"
          id="name"
          value={recipeData.name}
          onChange={(e) => handleInputChange("name", e)}
          className="w-1/5 absolute right-[40%] outline outline-1 outline-black rounded-md pr-2"
        />
      </div>
      <div className="flex flex-row w-1/4">
        <LuClock4 className="mx-0 my-auto mr-2" />
        <label htmlFor="preparationTime">זמן הכנה:</label>
        <div className=" border-black border-b-2 w-[30%] mr-3 flex gap-2">
          <input
            type="number"
            max={59}
            min={0}
            id="preparationTimeMinute"
            value={recipeData.preparationTime.minute}
            onChange={(e) =>
              setRecipeData({
                ...recipeData,
                preparationTime: {
                  ...recipeData.preparationTime,
                  minute: e.target.value,
                },
              })
            }
            className="outline-none w-[48%] text-center"
          />
          :
          <input
            type="number"
            max={48}
            min={0}
            id="preparationTimeHour"
            value={recipeData.preparationTime.hour}
            onChange={(e) =>
              setRecipeData({
                ...recipeData,
                preparationTime: {
                  ...recipeData.preparationTime,
                  hour: e.target.value,
                },
              })
            }
            className="outline-none w-[48%] text-center"
          />
        </div>
      </div>
      <div className="flex flex-row gap-x-2">
        <label htmlFor="tags">קטגוריות:</label>
        <div>
          <input
            type="text"
            placeholder="חפש קטגוריה"
            value={searchTerm}
            onChange={handleTagsChange}
            className="border-black border-b-2 outline-none px-8 w-36"
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
        <AddCategory categories={recipeData} setCategories={setRecipeData} />
      </div>
      <div className="flex flex-row gap-x-4">
        <label htmlFor="editor">תיאור:</label>
        <RichTextEditor charLimit={70}/>
      </div>
      <div>
        <label htmlFor="Ingredients">מצרכים:</label>
      </div>
    </form>
  );
  //  tableSize="5rem"
}
{
  /* <div className="w-min justify-center">
        <textarea
          name="discription"
          id="discription"
          placeholder="תיאור"
          cols="30"
          rows="3"
        ></textarea>
      </div> */
}
/* image
Recipe Name
Discription
Preparation Time
Ingredients
Instructions
Tags
Yald - Number of servings the recipe makes
Equipment Needed
private / public
*/

function AddCategory({ tags, setCategories }) {
  const handleDelete = (categoryToDelete) => {
    const updatedCategories = tags.filter((tag) => tag !== categoryToDelete);
    setCategories((prevData) => ({ ...prevData, tags: updatedCategories }));
  };

  return (
    <div className="border border-black rounded-xl flex flex-row flex-wrap gap-2 w-[15%] p-2 scrollable-container">
      {tags.length === 0
        ? "טבלת קטגוריות:"
        : tags.map((tag) => (
            <div
              key={tag}
              className="border border-black rounded-lg flex flex-row gap-1 p-1"
            >
              {tag}
              <span
                className="text-red-700 cursor-pointer"
                onClick={() => handleDelete(tag)}
              >
                X
              </span>
            </div>
          ))}
    </div>
  );
}

export default AddCategory;

function AddCategory({ tags, setCategories }) {
  const handleDelete = (categoryToDelete) => {
    const updatedCategories = tags.filter((tag) => tag !== categoryToDelete);
    setCategories((prevData) => ({ ...prevData, tags: updatedCategories }));
  };

  return (
    <div className="flex flex-row justify-center items-center gap-2 px-3 pt-10 pb-10 scrollable-container border border-black rounded-md">
      {tags.map((tag) => (
        <div
          key={tag}
          className="border border-black rounded-lg flex flex-row justify-center items-center gap-1 p-1"
        >
          {tag}
          <span
            className="text-white bg-red-400 hover:bg-red-500 cursor-pointer rounded-full px-2 "
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

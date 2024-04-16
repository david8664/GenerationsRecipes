import { CreateRecipeForm } from "@/components/create-recipe-form";

const CreateRecipePage = () => {
  return (
    <div className="w-1/4">
      <CreateRecipeForm />
    </div>
  );
};
export default CreateRecipePage;

// import React, { useState } from "react";
// import DescriptionSection from "@/components/CreateRecipeForm/DescriptionSection";
// import IngredientsSection from "@/components/CreateRecipeForm/IngredientsSection";
// import PreparationTimeSection from "@/components/CreateRecipeForm/PreparationTimeSection";
// import RecipeImageSection from "@/components/CreateRecipeForm/RecipeImageSection";
// import RecipeNameSection from "@/components/CreateRecipeForm/RecipeNameSection";
// import TagsSection from "@/components/CreateRecipeForm/TagsSection";
// import PreparationMethodSection from "@/components/CreateRecipeForm/PreparationMethodSection";
// import CommentsSection from "@/components/CreateRecipeForm/CommentsSection";
// import AllergensSection from "@/components/CreateRecipeForm/AllergensSection";
// import IsPrivateSection from "@/components/CreateRecipeForm/IsPrivateSection";
// import api from "@/lib/apiCalls";
// import { useRouter } from "next/navigation";
// // import validateRecipeData from "@/Functions/utils/validateRecipeData";

// export default function CreateRecipe() {
//   const [recipeData, setRecipeData] = useState({
//     illustrationImage: "",
//     name: "",
//     preparationTime: { hour: 0, minute: 0 },
//     tags: [],
//     description: "",
//     ingredients: [{ name: "", amount: "", unit: "גרם" }],
//     preparationMethod: "",
//     comments: "",
//     allergens: [],
//     isPrivate: false,
//   });

//   const [errors, setErrors] = useState("");
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(recipeData);
//     // setErrors(validateRecipeData(recipeData));
//     // if (errors) {
//     //   setErrors(errorMessage);
//     //   setTimeout(() => {
//     //     setErrors("");
//     //   }, 3000);
//     //   return;
//     // }
//     // try {
//     //   await api.post("r/create", recipeData);
//     // } catch (error) {
//     //   // Assuming the error object has a `message` property that contains a user-friendly error message
//     //   setErrors(error.message || "התרחשה שגיאה לא צפויה בעת יצירת המתכון.");
//     //   setTimeout(() => {
//     //     setErrors("");
//     //   }, 3000);

//     //   // Redirect to the profile page after a successful submission
//     //   router.push("/profile");
//     // }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       autoComplete="false"
//       className="flex flex-col flex-none justify-center items-center gap-y-4 mx-auto max-w-5xl p-6 bg-white shadow-lg rounded-lg h-full"
//     >
//       <h1 className="text-4xl font-semibold mb-6 sticky top-0 backdrop-blur-sm w-full z-10 text-center">
//         יצירת מתכון
//       </h1>
//       <RecipeImageSection
//         illustrationImage={recipeData.illustrationImage}
//         setIllustrationImage={(newIllustrationImage) =>
//           setRecipeData((prevData) => ({
//             ...prevData,
//             illustrationImage: newIllustrationImage,
//           }))
//         }
//       />
//       <RecipeNameSection name={recipeData.name} setRecipeData={setRecipeData} />
//       <PreparationTimeSection
//         preparationTime={recipeData.preparationTime}
//         setRecipeData={setRecipeData}
//       />
//       <DescriptionSection
//         description={recipeData.description}
//         setDescription={(newDescription) =>
//           setRecipeData((prevData) => ({
//             ...prevData,
//             description: newDescription,
//           }))
//         }
//       />
//       <IngredientsSection
//         ingredients={recipeData.ingredients}
//         setIngredients={(newIngredients) =>
//           setRecipeData((prevData) => ({
//             ...prevData,
//             ingredients: newIngredients,
//           }))
//         }
//       />
//       <PreparationMethodSection
//         preparationMethod={recipeData.preparationMethod}
//         setPreparationMethod={(newPreparationMethod) =>
//           setRecipeData((prevData) => ({
//             ...prevData,
//             preparationMethod: newPreparationMethod,
//           }))
//         }
//       />
//       <CommentsSection
//         comments={recipeData.comments}
//         setComments={(newComments) =>
//           setRecipeData((prevData) => ({ ...prevData, comments: newComments }))
//         }
//       />
//       <TagsSection tags={recipeData.tags} setRecipeData={setRecipeData} />
//       <AllergensSection
//         allergens={recipeData.allergens}
//         setAllergens={(newAllergens) =>
//           setRecipeData((prevData) => ({
//             ...prevData,
//             allergens: newAllergens,
//           }))
//         }
//       />
//       <IsPrivateSection
//         isPrivate={recipeData.isPrivate}
//         setIsPrivate={(newIsPrivate) =>
//           setRecipeData({ ...recipeData, isPrivate: newIsPrivate })
//         }
//       />
//       <button
//         type="submit"
//         className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 mt-6 w-1/5"
//       >
//         צור מתכון
//       </button>
//       {errors && <span className="text-red-500">{errors}</span>}
//     </form>
//   );
// }

// // "use client";
// // import React, { useState } from "react";

// // export default function CreateRecipe() {
// //   const [formData, setFormData] = useState({});
// //   const [error, setError] = useState("");
// //   const [tags, setTags] = useState([]);
// //   const [groceryList, setGroceryList] = useState([]);
// //   const [newTag, setNewTag] = useState("");
// //   const [newProduct, setNewProduct] = useState("");

// //   const handleInputChange = (e) => {
// //     setFormData({ ...formData, [e.target.id]: e.target.value });
// //   };

// //   const handleTagInputChange = (e) => {
// //     setNewTag(e.target.value);
// //   };

// //   const handleProductInputChange = (e) => {
// //     setNewProduct(e.target.value);
// //   };

// //   const addTag = () => {
// //     if (newTag.trim()) {
// //       setTags([...tags, newTag]);
// //       setNewTag("");
// //     }
// //   };

// //   const addProduct = () => {
// //     if (newProduct.trim()) {
// //       setGroceryList([...groceryList, newProduct]);
// //       setNewProduct("");
// //     }
// //   };

// //   const removeTag = (index) => {
// //     const updatedTags = [...tags];
// //     updatedTags.splice(index, 1);
// //     setTags(updatedTags);
// //   };

// //   const removeProduct = (index) => {
// //     const updatedGroceryList = [...groceryList];
// //     updatedGroceryList.splice(index, 1);
// //     setGroceryList(updatedGroceryList);
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     const {
// //       name,
// //       image,
// //       description,
// //       preparationTime,
// //       ingredients,
// //       instructions,
// //       yield: recipeYield,
// //       isPrivate,
// //     } = formData;

// //     try {
// //       if (
// //         !name ||
// //         !image ||
// //         !description ||
// //         !preparationTime ||
// //         !ingredients ||
// //         !instructions ||
// //         recipeYield === undefined
// //       )
// //         throw "All fields are required.";
// //       // Add your authentication logic here
// //     } catch (err) {
// //       setError(err);
// //     }

// //     console.log(formData);
// //   };

// //   return (
// //     <div className="h-full flex justify-center items-center bg-slate-400">
// //       <form
// //         onSubmit={handleSubmit}
// //         className="bg-white rounded-lg p-8 shadow-lg w-80"
// //       >
// //         <h2 className="text-2xl font-bold mb-4 text-center">הוספת מתכון</h2>
// //         <input
// //           type="text"
// //           id="name"
// //           placeholder="שם המתכון"
// //           className="mb-4 w-full rounded-lg p-2 text-center border border-gray-300 focus:outline-none"
// //           onChange={handleInputChange}
// //         />
// //         <input
// //           type="text"
// //           id="image"
// //           placeholder="קישור לתמונה"
// //           className="mb-4 w-full rounded-lg p-2 text-center border border-gray-300 focus:outline-none"
// //           onChange={handleInputChange}
// //         />
// //         <textarea
// //           name="description"
// //           id="description"
// //           placeholder="תיאור (70 תווים todo)"
// //           cols="46"
// //           rows="5"
// //           className="mb-4 w-full rounded-lg p-2 text-center border border-gray-300 focus:outline-none"
// //           value={formData.description}
// //           onChange={handleInputChange}
// //         ></textarea>
// //         <input
// //           type="number"
// //           name="preparationTime"
// //           id="preparationTime"
// //           min={0}
// //           placeholder="זמן הכנה (לדקה)"
// //           className="mb-4 w-full rounded-lg p-2 text-center border border-gray-300 focus:outline-none"
// //           value={formData.preparationTime}
// //           onChange={handleInputChange}
// //         />
// //         <div className="ml-8">
// //           <h3 className="text-2xl font-bold mb-4 text-center">רשימת מצרכים</h3>
// //           <div className="mb-4">
// //             <input
// //               type="text"
// //               placeholder="הוסף מצרך"
// //               className="mb-2 w-full rounded-lg p-2 text-center border border-gray-300 focus:outline-none"
// //               value={newProduct}
// //               onChange={handleProductInputChange}
// //             />
// //             <button
// //               type="button"
// //               className="bg-green-500 text-white rounded-lg px-4 py-2 mx-auto block hover:bg-green-700"
// //               onClick={addProduct}
// //             >
// //               הוסף מצרך
// //             </button>
// //           </div>
// //           <ul>
// //             {groceryList.map((product, index) => (
// //               <li key={index} className="mb-2">
// //                 {product}
// //                 <button
// //                   type="button"
// //                   className="bg-red-500 text-white rounded-lg px-2 py-1 ml-2"
// //                   onClick={() => removeProduct(index)}
// //                 >
// //                   מחק
// //                 </button>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>

// //         <textarea
// //           name="instructions"
// //           id="instructions"
// //           cols="46"
// //           rows="5"
// //           placeholder="הוראות הכנה"
// //           className="mb-4 w-full rounded-lg p-2 text-center border border-gray-300 focus:outline-none"
// //           value={formData.instructions}
// //           onChange={handleInputChange}
// //         ></textarea>
// //         <div className="ml-8">
// //           <h3 className="text-2xl font-bold mb-4 text-center">רשימת תגיות</h3>
// //           <div className="mb-4">
// //             <input
// //               type="text"
// //               placeholder="הוסף תגית"
// //               className="mb-2 w-full rounded-lg p-2 text-center border border-gray-300 focus:outline-none"
// //               value={newTag}
// //               onChange={handleTagInputChange}
// //             />
// //             <button
// //               type="button"
// //               className="bg-green-500 text-white rounded-lg px-4 py-2 mx-auto block hover:bg-green-700"
// //               onClick={addTag}
// //             >
// //               הוסף תגית
// //             </button>
// //           </div>
// //           <ul>
// //             {tags.map((tag, index) => (
// //               <li key={index} className="mb-2">
// //                 {tag}
// //                 <button
// //                   type="button"
// //                   className="bg-red-500 text-white rounded-lg px-2 py-1 ml-2"
// //                   onClick={() => removeTag(index)}
// //                 >
// //                   מחק
// //                 </button>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //         <input
// //           type="number"
// //           name="yield"
// //           id="yield"
// //           min={1}
// //           placeholder="כמות מנות שיצאו"
// //           className="mb-4 w-full rounded-lg p-2 text-center border border-gray-300 focus:outline-none"
// //           value={formData.yield}
// //           onChange={handleInputChange}
// //         />
// //         <div className="flex items-center mb-4">
// //           <input
// //             type="checkbox"
// //             name="isPrivate"
// //             id="isPrivate"
// //             className="mr-2"
// //             checked={formData.isPrivate}
// //             onChange={handleInputChange}
// //           />
// //           <label htmlFor="isPrivate">המתכון פרטי?</label>
// //         </div>
// //         <button
// //           type="submit"
// //           className="bg-green-500 text-white rounded-lg px-4 py-2 mx-auto block hover:bg-green-700"
// //         >
// //           הוסף מתכון
// //         </button>
// //         {error && <h2 className="text-red-700">{error}</h2>}
// //       </form>
// //     </div>
// //   );
// // }

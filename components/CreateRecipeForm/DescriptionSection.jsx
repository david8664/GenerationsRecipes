// components/CreateRecipeForm/DescriptionSection.jsx
'use client'
import React from "react";
import CustomEditor from "../ui/CustomEditor";
// import dynamic from "next/dynamic";

function DescriptionSection({ setRecipeData, description }) {
  // const CustomEditor = dynamic(
  //   () => {
  //     return import("@/components/ui/CustomEditor");
  //   },
  //   { ssr: false }
  // );
  return (
    <div className="flex flex-row gap-x-4">
      <label htmlFor="editor">תיאור:</label>
      <CustomEditor
        content={description}
        setContent={(newDescription) =>
          setRecipeData((prevData) => ({
            ...prevData,
            description: newDescription,
          }))
        }
      />
    </div>
  );
}

export default DescriptionSection;

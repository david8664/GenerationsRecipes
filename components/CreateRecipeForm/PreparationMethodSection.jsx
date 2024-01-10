// components/CreateRecipeForm/preparationMethodSection.jsx

import React from "react";
// import dynamic from "next/dynamic";
import CustomEditor from "../ui/CustomEditor";

function PreparationMethodSection({ setRecipeData, preparationMethod }) {
  // const CustomEditor = dynamic(
  //   () => {
  //     return import("@/components/ui/CustomEditor");
  //   },
  //   { ssr: false }
  // );
  return (
    <div className="flex flex-row gap-x-4">
      <label htmlFor="editor">אופן הכנה:</label>
      <CustomEditor
        content={preparationMethod}
        setContent={(newPreparationMethod) =>
          setRecipeData((prevData) => ({
            ...prevData,
            preparationMethod: newPreparationMethod,
          }))
        }
      />
    </div>
  );
}

export default PreparationMethodSection;
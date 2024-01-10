// components/CreateRecipeForm/CommentsSection.jsx

import React from "react";
import CustomEditor from "../ui/CustomEditor";
// import dynamic from "next/dynamic";

export default function CommentsSection({ setRecipeData, comments }) {
  // const CustomEditor = dynamic(
  //   () => {
  //     return import("@/components/ui/CustomEditor");
  //   },
  //   { ssr: false }
  // );
  return (
    <div className="flex flex-row gap-x-4">
      <label htmlFor="editor">הערות:</label>
      <CustomEditor
        content={comments}
        setContent={(newComments) =>
          setRecipeData((prevData) => ({
            ...prevData,
            comments: newComments,
          }))
        }
      />
    </div>
  );
}

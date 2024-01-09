// components/ui/custom-editor.js

import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build";

const editorConfiguration = {
  fontFamily: {
    options: ["default", "Assistant, sans-serif", "Poppins, sans-serif"],
  },
  toolbar: [
    "heading",
    "fontSize",
    "fontFamily",
    "fontColor",
    "fontBackgroundColor",
    "|",
    "bold",
    "underline",
    "link",
    "numberList",
    "bulletedList",
  ],
};

function CustomEditor({ content, setContent }) {
  return (
    <CKEditor
      editor={Editor}
      config={editorConfiguration}
      data={content}
      onChange={(event, editor) => {
        setContent(editor.getData());
        console.log({ event, editor, content });
        // charLimit={70}
      }}
    />
  );
}

export default CustomEditor;

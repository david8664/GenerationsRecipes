// components/CreateRecipeForm/CommentsSection

import React from "react";

export default function CommentsSection({ comments, setComments }) {
  return (
    <div className="flex flex-row px-4 w-fit max-h-32 border border-black rounded-lg">
      <label htmlFor="comments" className="text-lg my-auto pl-4 p-10">
        הערות:
      </label>
      <textarea
        name="comments"
        id="comments"
        cols="46"
        rows="5"
        placeholder={`1. ניתן להוסיף קמח קוקוס לתערובת כדי לתת טעם נוסף וטקסטורה מעניינת.
2. אם נדרש, ניתן להוסיף כפית וחצי חרדל חריף לתערובת כדי להוסיף פיקנטיות...`}
        className="mb-4 w-full bg-transparent p-2 focus:outline-none resize-none overflow-hidden"
        value={comments}
        minLength={10}
        required
        onChange={(e) => setComments(e.target.value)}
      ></textarea>
    </div>
  );
}

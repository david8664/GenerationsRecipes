// components/CreateRecipeForm/preparationMethodSection

import React from "react";

function PreparationMethodSection({ preparationMethod, setPreparationMethod }) {
  return (
    <div className="flex flex-row px-4 w-fit max-h-96 border border-black rounded-lg">
      <label htmlFor="instructions" className="text-lg my-auto pl-4">
        הוראות הכנה:
      </label>
      <textarea
        name="instructions"
        id="instructions"
        cols="46"
        rows="5"
        placeholder={`1.   מחממים   תנור   ל-180   מעלות   צלזיוס   ומשמנים   תבנית   בשמן.
2.   מערבבים   את   כל   המצרכים   בקערה   גדולה   עד   שהם   מתמזגים   לתערובת   אחידה.
3.   מעבירים   את   התערובת   לתבנית   ומפזרים...`}
        className="mb-4 w-full p-2 bg-transparent focus:outline-none resize-none overflow-hidden"
        value={preparationMethod}
        minLength={10}
        required
        onChange={(e) => setPreparationMethod(e.target.value)}
      ></textarea>
    </div>
  );
}

export default PreparationMethodSection;

// components/CreateRecipeForm/PreparationTimeSection.jsx
import React from "react";
import { LuClock4 } from "react-icons/lu";

function PreparationTimeSection({ setRecipeData, preparationTime }) {
  const { minute, hour } = preparationTime;

  const handleTimeChange = (field, value) => {
    setRecipeData((prevData) => ({
      ...prevData,
      preparationTime: {
        ...preparationTime,
        [field]: value,
      },
    }));
  };

  return (
    <div className="flex flex-row w-1/4">
      <LuClock4 className="mx-0 my-auto ml-2" />
      <label htmlFor="preparationTime">זמן הכנה:</label>
      <div className="border-black border-b-2 w-[30%] mr-3 flex gap-2">
        <input
          type="number"
          max={59}
          min={0}
          id="preparationTimeMinute"
          value={minute}
          onChange={(e) => handleTimeChange("minute", e.target.value)}
          className="outline-none w-[48%] text-center border rounded-tr-md"
        />
        {":"}
        <input
          type="number"
          max={48}
          min={0}
          id="preparationTimeHour"
          value={hour}
          onChange={(e) => handleTimeChange("hour", e.target.value)}
          className="outline-none w-[48%] text-center border rounded-tl-md"
        />
      </div>
    </div>
  );
}

export default PreparationTimeSection;

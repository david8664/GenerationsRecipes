// components/CreateRecipeForm/PreparationTimeSection
import React from "react";
import { LuClock4 } from "react-icons/lu";

export default function PreparationTimeSection({
  setRecipeData,
  preparationTime,
}) {
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
    <div className="flex flex-row items-center p-2 rounded-l-lg">
      <LuClock4 size={24} />
      <label
        htmlFor="preparationTime"
        className="text-sm font-medium p-2"
      >
        זמן הכנה:
      </label>
      <div className="border-gray-400 border-b-2">
        <input
          type="number"
          max={59}
          min={0}
          step={1}
          required
          id="preparationTimeMinute"
          value={minute}
          onChange={(e) => handleTimeChange("minute", e.target.value)}
          className="outline-none text-center w-10 bg-transparent no-spinner"
        />
        <span className="mx-2 w-1">:</span>
        <input
          type="number"
          max={48}
          min={0}
          step={1}
          required
          id="preparationTimeHour"
          value={hour}
          onChange={(e) => handleTimeChange("hour", e.target.value)}
          className="outline-none text-center w-10 bg-transparent no-spinner"
        />
      </div>
    </div>
  );
}

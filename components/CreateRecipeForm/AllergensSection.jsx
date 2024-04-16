// components/CreateRecipeForm/AllergensSection.jsx
import React from "react";
import AllergensButton from "@/components/AllergensButton";

const SymbolsOfAllergiesRoot =
  "https://res.cloudinary.com/dcfwqisy1/image/upload/GenerationsRecipes/SymbolsOfAllergies";
const allergensData = [
  {
    hebrewName: "חלב",
    name: "Milk",
    image: SymbolsOfAllergiesRoot + "/milk.svg",
    color: "#1481ba",
  },
  {
    hebrewName: "אגוזים",
    name: "Nuts",
    image: SymbolsOfAllergiesRoot + "/nuts.svg",
    color: "#6fd6b8",
  },
  {
    hebrewName: "בוטנים",
    name: "Peanuts",
    image: SymbolsOfAllergiesRoot + "/peanuts.svg",
    color: "#e4963b",
  },
  {
    hebrewName: "דגים",
    name: "Fish",
    image: SymbolsOfAllergiesRoot + "/fish.svg",
    color: "#0e607f",
  },
  {
    hebrewName: "ביצים",
    name: "Eggs",
    image: SymbolsOfAllergiesRoot + "/eggs.svg",
    color: "#8e76da",
  },
  {
    hebrewName: "שומשום",
    name: "Sesame",
    image: SymbolsOfAllergiesRoot + "/sesame.svg",
    color: "#f3d219",
  },
  {
    hebrewName: "סויה",
    name: "Soy",
    image: SymbolsOfAllergiesRoot + "/soy.svg",
    color: "#42bc70",
  },
  {
    hebrewName: "גלוטן",
    name: "Wheat",
    image: SymbolsOfAllergiesRoot + "/wheat.svg",
    color: "#a1d057",
  },
];

export default function AllergensSection({ allergens, setAllergens }) {
  return (
    <div>
      <label>אלרגיות:</label>
      <div className="flex gap-4 flex-wrap mt-4 mr-4">
        {allergensData.map(({ name, hebrewName, image, color }) => (
          <div key={name} className="flex flex-col items-center">
            <img
              src={image}
              alt={hebrewName}
              className="object-cover h-10 filter brightness-100 sepia-100 saturate-200"
            />
            <h5 style={{ color: color }}>{hebrewName}</h5>
            <AllergensButton
              allergenName={name}
              allergens={allergens}
              setAllergens={setAllergens}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// components/CreateRecipeForm/AllergensSection.jsx
import React from "react";
import Image from "next/image";
import AllergensButton from "@/components/ui/AllergensButton";

const allergensData = [
  { hebrewName: "ביצים", name: "Eggs", image: "/SymbolsOfAllergies/eggs.svg" },
  { hebrewName: "חלב", name: "Milk", image: "/SymbolsOfAllergies/milk.svg" },
  { hebrewName: "בוטנים", name: "Peanuts", image: "/SymbolsOfAllergies/peanuts.svg" },
  { hebrewName: "אגוזים", name: "Nuts", image: "/SymbolsOfAllergies/nuts.svg" },
  { hebrewName: "דגים", name: "Fish", image: "/SymbolsOfAllergies/fish.svg" },
  { hebrewName: "גלוטן", name: "Wheat", image: "/SymbolsOfAllergies/wheat.svg" },
  { hebrewName: "סויה", name: "Soy", image: "/SymbolsOfAllergies/soy.svg" },
  { hebrewName: "שומשום", name: "Sesame", image: "/SymbolsOfAllergies/sesame.svg" },
];

export default function AllergensSection({ allergens, setAllergens }) {
  return (
    <div>
      <label>אלרגיות:</label>
      <div className="flex gap-4">
        {allergensData.map(({ name, hebrewName, image }) => (
          <div key={name} className="flex flex-col items-center">
            <Image src={image} width={30} height={45} alt={hebrewName} />
            <h5>{hebrewName}</h5>
            <AllergensButton allergenName={name} allergens={allergens} setAllergens={setAllergens} />
          </div>
        ))}
      </div>
    </div>
  );
}

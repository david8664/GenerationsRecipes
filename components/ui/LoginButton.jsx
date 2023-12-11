"use client"
import React from "react";

export default function LoginButton() {
  const data = [
    { email: "yo@123", password: "123" },
    { email: "yo@123", password: "123" },
  ];

  const fon = (e) => {
    e.preventDefault();
    console.log(e);
    // הוסף כאן את הפעולות שאתה רוצה לבצע כאשר לוחצים על הכפתור
  };

  return (
    <button
      type="submit"
      className="bg-lime-500 rounded-lg"
      onClick={(e) => {
        fon(e);
      }}
    >
      התחברות
    </button>
  );
}

"use client";
import React, { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    try {
      if (!password || !email) throw "Both email and password are required.";
      // Add your authentication logic here
    } catch (err) {
      setError(err);
    }

    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 justify-center items-center text-center bg-white p-8 shadow-lg w-80 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">התחברות</h2>
        <input
          type="email"
          id="email"
          placeholder="אימייל"
          className="w-full rounded-lg p-2 border border-gray-300 focus:outline-none text-center"
          onChange={handleInputChange}
        />
        <input
          type="password"
          id="password"
          placeholder="סיסמא"
          className="w-full rounded-lg p-2 border border-gray-300 focus:outline-none text-center"
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="bg-green-500 text-white rounded-lg px-4 py-2 disabled:bg-gray-300"
        >
          התחבר
        </button>
        {error && <h2 className="text-red-700">{error}</h2>}
      </form>
    </div>
  );
}

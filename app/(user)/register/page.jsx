"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

export default function RegisterPage() {
  const [dataOfForm, setDataOfForm] = useState({
    fullName: "",
    nickname: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    imageUrl: "",
  });

  const [okButton, setOkButton] = useState(true);

  useEffect(() => {
    const { fullName, email, password } = dataOfForm;
    setOkButton(
      !(
        fullName.length > 1 &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
        password.length > 6 &&
        dataOfForm.nickname.length > 1 &&
        (dataOfForm.phone === "" || /^\d{10}$/.test(dataOfForm.phone)) &&
        (dataOfForm.address === "" || dataOfForm.address.length > 1)
      )
    );
  }, [dataOfForm]);

  const [imageExists, setImageExists] = useState(false);

  const checkImageExists = (url) => {
    const img = new Image();
    img.src = url;

    img.onload = () => {
      setImageExists(true);
      console.log("Image loaded");
    };

    img.onerror = () => {
      setImageExists(false);
      console.log("Image error");
    };
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const imageUrl = event.target.result;
      setDataOfForm({ ...dataOfForm, imageUrl });
      checkImageExists(imageUrl);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="h-full flex justify-center items-center bg-slate-400">
      <form className="bg-white rounded-lg p-8 shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">הרשמה</h2>
        {["שם מלא", "כינוי", "אימייל", "סיסמא", "טלפון", "כתובת"].map(
          (placeholder, index) => (
            <input
              key={index}
              type={index === 2 ? "email" : index === 3 ? "password" : "text"}
              required
              placeholder={placeholder}
              className="mb-4 w-full rounded-lg p-2 text-center border border-gray-300 focus:outline-none"
              onChange={(e) =>
                setDataOfForm({
                  ...dataOfForm,
                  [Object.keys(dataOfForm)[index]]: e.target.value,
                })
              }
            />
          )
        )}
        {!imageExists ? (
          <label className="mb-2 text-center block text-gray-700 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-center p-5">
            בחר תמונת פרופיל <AiOutlineCloudUpload className="mr-2" />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
        ) : (
          <label
            htmlFor="fileInput"
            className="mb-4 text-center block cursor-pointer"
          >
            <img
              src={dataOfForm.imageUrl}
              className="rounded-lg mx-auto w-1/2"
              alt="uploaded"
            />
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
        )}
        <button
          type="submit"
          disabled={okButton}
          className={`bg-green-500 text-white rounded-lg px-4 py-2 mx-auto block ${
            okButton ? "bg-gray-300 cursor-not-allowed" : "hover:bg-green-700"
          }`}
          onClick={(e) => {
            e.preventDefault();
            console.log(dataOfForm);
          }}
        >
          הירשם
        </button>
      </form>
    </div>
  );
}

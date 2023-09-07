"use client";
import React, { useEffect, useState } from "react";

export default function RegisterPage() {
  const [dataOfForm, setDataOfForm] = useState({});
  const [okButton, setOkButton] = useState(Boolean);

  useEffect(() => {
    if (
      dataOfForm.firstName &&
      dataOfForm.firstName.length > 1 &&
      dataOfForm.lastName &&
      dataOfForm.lastName.length > 1 &&
      dataOfForm.email &&
      dataOfForm.email.includes("@") &&
      dataOfForm.password &&
      dataOfForm.password.length > 2
    )
      setOkButton(false);
    else setOkButton(true);
  }, [dataOfForm]);

  async function urlStatus(url) {
    try {
      const data = await fetch(url).then((res) => console.log(res.status));
    } catch (error) {}
  }
  const [imageUrl, setImageUrl] = useState("");
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

  const classAll = "top-2 rounded-lg text-center ";
  return (
    <div className="h-max w-full flex flex-row justify-center text-center   bg-slate-400">
      <div className=" only:font-bold">
        הרשמה
        <form
          className="flex flex-col gap-2 justify-center px-10
       bg-green-600 h-fit py-8  rounded-2xl"
        >
          <input
            type="text"
            id="firstName"
            placeholder="שם פרטי"
            className={classAll}
            onChange={(e) =>
              setDataOfForm({ ...dataOfForm, firstName: e.target.value })
            }
          />
          <input
            type="text"
            id="lastName"
            required
            placeholder="שם משפחה"
            className={classAll}
            onChange={(e) =>
              setDataOfForm({ ...dataOfForm, lastName: e.target.value })
            }
          />
          <input
            type="email"
            id="email"
            required
            placeholder="אימייל"
            className={classAll}
            onChange={(e) =>
              setDataOfForm({ ...dataOfForm, email: e.target.value })
            }
          />
          <input
            type="password"
            id="pass"
            required
            placeholder="סיסמא"
            className={classAll}
            onChange={(e) =>
              setDataOfForm({ ...dataOfForm, password: e.target.value })
            }
          />
          <span className="inline-flex items-center">
            <input
              type="text"
              id="pass"
              required={imageExists}
              placeholder="url-תמונה"
              className={classAll + " required:bg-slate-500 w-30"}
              onChange={(e) => {
                setImageUrl(e.target.value);
                checkImageExists(e.target.value);
                setDataOfForm({ ...dataOfForm, imageUrl: e.target.value });
              }}
            />
            {imageExists && (
              <img src={imageUrl} alt="yos" height="50px" width="30px" />
            )}
          </span>


          <span className="inline-flex items-center">
            <input
              type="file"
              id="fileUrl"
              required={imageExists}
              className="hidden"
            //   className={ + " required:bg-slate-500 w-30"}
            //   onChange={(e) => {
            //     setImageUrl(e.target.value);
            //     checkImageExists(e.target.value);
            //     setDataOfForm({ ...dataOfForm, imageUrl: e.target.value });
            //   }}

            />
            <label htmlFor="fileUrl">yy</label>
            {imageExists && (
              <img src={imageUrl} alt="yos" height="50px" width="30px" />
            )}
          </span>


          <button
            type="submit"
            disabled={okButton}
            className="bg-lime-500 rounded-lg disabled:bg-gray-600"
            onClick={(e) => {
              e.preventDefault();
              console.log(e);
            }}
          >
            הירשם
          </button>
          {/* <h2 className="text-red-700">{errorCath?.message}</h2> */}
        </form>
      </div>
    </div>
  );
}

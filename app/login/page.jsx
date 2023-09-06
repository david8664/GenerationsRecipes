// export const metadata: Metadata = {
//   title: "התחברות",
//   description: "Timeless Family Recipes, Old and New.",
// };
"use client";
import { useEffect, useState } from "react";
import LoginButton from "../../components/ui/LoginButton";

export default function login() {
  const [dataOfForm, setDataOfForm] = useState({});
  const [errorCath, setErrorCath] = useState({});

  const data = [
    { email: "yo@123", password: "123" },
    { email: "yo@123", password: "123" },
  ];

  function checInputs(e) {
    e.preventDefault();

    try {
      if (!dataOfForm.password) throw "need password";
      if (!dataOfForm.email) throw "need email";
      if (
        dataOfForm.password !== data[0].password ||
        dataOfForm.email !== data[0].email
      )
        throw "email or password is incorrect";
    } catch (error) {
      // alert("no email or password"+error)
      setErrorCath({ message: error });
      return error.message;
    }
    console.log(dataOfForm);
  }

  useEffect(() => {
    console.log(errorCath);
  }, [errorCath]);

  useEffect(() => {
    setErrorCath({});
  }, [dataOfForm]);

  return (
    <form
      onSubmit={() => console.log(dataOfForm)}
      className="flex flex-wrap flex-col gap-2 justify-center
     text-center bg-green-600 w-80 h-[200px] content-center rounded-2xl"
    >
      {/* <div> */}
      <input
        type="email"
        id="email"
        placeholder="Email"
        className="top-2 rounded-lg"
        onChange={(e) =>
          setDataOfForm({ ...dataOfForm, email: e.target.value })
        }
      />
      <input
        type="password"
        id="pass"
        placeholder="pass"
        className=" rounded-lg"
        onChange={(e) =>
          setDataOfForm({ ...dataOfForm, password: e.target.value })
        }
      />
      {/* <LoginButton/> */}
      <button
        type="submit"
        className="bg-lime-500 rounded-lg"
        onClick={(e) => checInputs(e)}
      >
        value
      </button>
      <h2 className="text-red-700">{errorCath?.message}</h2>
      {/* </div> */}
    </form>
  );
}

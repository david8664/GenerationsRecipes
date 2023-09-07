// export const metadata: Metadata = {
//   title: "התחברות",
//   description: "Timeless Family Recipes, Old and New.",
// };
"use client";
import { useEffect, useState } from "react";
// import Button from "../../components/ui/LoginButton";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const navigate = useNavigate();

  const data = [
    { email: "yo@123", password: "123" },
    { email: "yo@123", password: "123" },
  ];

  function checkInputs(e) {
    e.preventDefault();
    try {
      if (!password) throw "נא הכנס סיסמא" && console.log("pass");
      if (!email) throw "נא הכנס כתובת אימייל" && console.log("e-mail");
    } catch (err) {
      // from server error - move it to the right place
      console.log(err);
      setErrorMessage(
        err.request?.response || err.msg || "An unknown error occurred"
      );
    }
  }

  // remove the error message when he start to type something
  useEffect(() => {
    setErrorMessage({});
  }, [email, password]);

  return (
    <div className="w-full  flex justify-center items-start h-screen ">
      <form
        className="flex flex-col gap-2 justify-center items-center
      bg-teal-600 w-1/3 h-1/2 rounded-2xl "
      >
        <input
          type="email"
          id="email"
          placeholder="אימייל"
          className="rounded-lg px-2 w-1/2"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="pass"
          placeholder="סיסמא"
          className="rounded-lg px-2 w-1/2"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-gray-300 rounded-lg mt-10 px-6 py-2"
          onClick={(e) => checkInputs(e)}
        >
          התחברות
        </button>
      </form>
      <p className="text-red-600 text-center text-lg">{"errorMessage"}</p>
    </div>
  );
}

// const handleSubmit = async (e) => {
//   e.preventDefault();
// try {
//   validate({ email, password });
//   const token = await api.post("/users/login", { email, password });
//   if (token) {
//     localStorage.setItem("token", token);
//     navigate("/");
//   }
// } catch (err) {
//   setErrorMessage(
//     err?.request?.response || err?.msg || "An unknown error occurred"
//   );
//   setTimeout(() => setErrorMessage(""), 15000); // Clear the error message after 15 seconds
// }
// };

// const handleForgotPassword = async () => {
// try {
//   validate({ email });
//   const res = await api.get(`/users/forgotpassword?email=${email}`);
//   setErrorMessage(res);
// } catch (err) {
//   setErrorMessage(
//     err?.request?.response || err?.msg || "An unknown error occurred"
//   );
// }
// setTimeout(() => setErrorMessage(""), 15000); // Clear the error message after 15 seconds
// };

//   <form onSubmit={handleSubmit} className={styles.from}>
//   <h1>Welcome to Sounds good website</h1>
//   <div className="">
//     <input
//       type="email"
//       value={email}
//       placeholder="Email"
//       onChange={(e) => setEmail(e.target.value.trim())}
//       className={styles.emailInput}
//     />
//   </div>
//   <div className="">
//     <input
//       type="password"
//       value={password}
//       placeholder="Password"
//       onChange={(e) => setPassword(e.target.value.trim())} // Changed onInput to onChange
//       className={styles.passwordInput}
//     />
//   </div>
//   <label className={styles.rememberMe}>
//     <input
//       type="checkbox"
//       checked={rememberMe}
//       onChange={(e) => setRememberMe(e.target.checked)}
//     />
//     Remember Me
//   </label>
//   <button type="submit" className={styles.login}>
//     Login
//   </button>
//   <span className={styles.forgotPassword} onClick={handleForgotPassword}>
//     Forgot password?
//   </span>

//   <div className={styles.signUp}>
//     Not a member?
//     <Link to={"/register"} className={styles.signUp}>
//       Sign up now
//     </Link>
//   </div>
//   {errorMessage && (
//     <span className={styles.errorMessage}>{errorMessage}</span>
//   )}
// </form>

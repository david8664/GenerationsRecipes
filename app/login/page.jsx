// export const metadata: Metadata = {
//   title: "התחברות",
//   description: "Timeless Family Recipes, Old and New.",
// };
"use client";
import { useEffect, useState } from "react";
import LoginButton from "../../components/ui/LoginButton";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
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
  };

  const handleForgotPassword = async () => {
    // try {
    //   validate({ email });
    //   const res = await api.get(`/users/forgotpassword?email=${email}`);
    //   setErrorMessage(res);
    // } catch (err) {
    //   setErrorMessage(
    //     err?.request?.response || err?.msg || "An unknown error occurred"
    //   );
    // }
    setTimeout(() => setErrorMessage(""), 15000); // Clear the error message after 15 seconds
  };

  const [dataOfForm, setDataOfForm] = useState({});
  const [errorCath, setErrorCath] = useState({});

  const data = [
    { email: "yo@123", password: "123" },
    { email: "yo@123", password: "123" },
  ];

  function checkInputs(e) {
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
        onClick={(e) => checkInputs(e)}
      >
        value
      </button>
      <h2 className="text-red-700">{errorCath?.message}</h2>
      {/* </div> */}
    </form>

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
  );
}

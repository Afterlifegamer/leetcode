import { authModalState } from "@/atoms/authModalAtoms";
import { auth } from "@/firebase/firebase";
import { useSetAtom } from "jotai";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
type LoginProps = object;

const Login: React.FC<LoginProps> = () => {
  const setAuthModalState = useSetAtom(authModalState);
  const handleClick = (type: "login" | "register" | "forgotPassword") => {
    setAuthModalState((prev) => ({ ...prev, type: type }));
  };
  const router = useRouter();
  const [inputs, setInputs] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleLogin = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password) return "Enter all fields";
    try {
      const loggedUser = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!loggedUser) {
        console.log("Nothing happening");
        return;
      }
      router.push("/");
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };
  useEffect(() => {
    if (error) {
      alert(error.message);
    }
  }, [error]);
  console.log(inputs);
  return (
    <form className="space-y-6 px-4 pb-4" onSubmit={handleLogin}>
      <h3 className="text-x1 font-medium text-white">Sign Into Leet</h3>
      <div>
        <label
          htmlFor="email"
          className="text-sm font-medium block mb-2 text-gray-300"
        >
          Your Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          className="border-2 outline-none sm:text-sm rounded=lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600
                    border-gray-500 placeholder-gray-400 text-white"
          placeholder="name@gmail.com"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="text-sm font-medium block mb-2 text-gray-300"
        >
          Your Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          className="border-2 outline-none sm:text-sm rounded=lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600
                    border-gray-500 placeholder-gray-400 text-white"
        />
      </div>
      <button
        type="submit"
        className="w-full text-white focus:ring-blue-300 font-medium rounded-lg
          text-small px-5 py-2.5 text-center bg-[rgb(255,161,22)] hover:bg-[rgb(193,122,15)]"
      >
        {loading ? "Login..." : "Login"}
      </button>
      <button
        className="flex w-full justify-end"
        onClick={() => {
          handleClick("forgotPassword");
        }}
      >
        <a
          href="#"
          className="text-sm block text-[rgb(255,161,22)] hover:underlined w-full text-right"
        >
          Forgot Password
        </a>
      </button>
      <div className="text-sm font-medium text-gray-500">
        Not Registered?
        <a
          href="#"
          className="text-blue-700 hover:underline"
          onClick={() => {
            handleClick("register");
          }}
        >
          Create Account
        </a>
      </div>
    </form>
  );
};
export default Login;

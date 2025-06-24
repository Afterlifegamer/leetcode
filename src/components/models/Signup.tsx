import { authModalState } from "@/atoms/authModalAtoms";
import { auth } from "@/firebase/firebase";
import { useSetAtom } from "jotai";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

type SignupProps = object;

const Signup: React.FC<SignupProps> = () => {
  const setAuthModalState = useSetAtom(authModalState);
  const handleClick = () => {
    setAuthModalState((prev) => ({ ...prev, type: "login" }));
  };
  const [inputs, setInputs] = useState({
    email: "",
    displayName: "",
    password: "",
  });
  const router = useRouter();
  const [createUserWithEmailAndPassword, userCredential, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleRegister = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputs);
    if (!inputs.email || !inputs.displayName || !inputs.password) {
      return alert("Enter all fields");
    }
    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newUser) return;
      router.push("/");
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error && error.message) {
          toast.error(error.message, {
            position: "top-center",
            autoClose: 3000,
            theme: "dark",
          });
        }
      }
    }
  };
  useEffect(() => {
    if (error && error.message) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
    }
  }, [error]);

  return (
    <form className="space-y-6 px-4 pb-4" onSubmit={handleRegister}>
      <h3 className="text-x1 font-medium text-white">Sign Up </h3>
      <div>
        <label
          htmlFor="email"
          className="text-sm font-medium block mb-2 text-gray-300"
        >
          Email
        </label>
        <input
          onChange={handleChangeInput}
          type="email"
          name="email"
          id="email"
          className="border-2 outline-none sm:text-sm rounded=lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white
                        border-gray-500 placeholder-gray-400 text-black"
          placeholder="Binu@gmail.com"
        />
      </div>
      <div>
        <label
          htmlFor="displayName"
          className="text-sm font-medium block mb-2 text-gray-300"
        >
          Name
        </label>
        <input
          onChange={handleChangeInput}
          type="displayName"
          name="displayName"
          id="displayName"
          className="border-2 outline-none sm:text-sm rounded=lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600
                        border-gray-500 placeholder-gray-400 text-white"
          placeholder="Ben Dover"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="text-sm font-medium block mb-2 text-gray-300"
        >
          Password
        </label>
        <input
          onChange={handleChangeInput}
          type="password"
          name="password"
          id="password"
          className="border-2 outline-none sm:text-sm rounded=lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white
                        border-gray-500 placeholder-gray-400 text-black"
        />
      </div>
      <button
        type="submit"
        className="w-full text-white focus:ring-blue-300 font-medium rounded-lg
              text-small px-5 py-2.5 text-center bg-[rgb(255,161,22)] hover:bg-[rgb(193,122,15)]"
      >
        {loading ? "Registering..." : "Register"}
      </button>

      <div className="text-sm font-medium text-gray-500">
        Already have an account?{" "}
        <a
          href="#"
          className="text-blue-700 hover:underline"
          onClick={handleClick}
        >
          Login
        </a>
      </div>
    </form>
  );
};
export default Signup;

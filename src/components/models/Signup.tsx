import { authModalState } from "@/atoms/authModalAtoms";
import { useSetAtom } from "jotai";
import React from "react";

type SignupProps = object;

const Signup: React.FC<SignupProps> = () => {
  const setAuthModalState = useSetAtom(authModalState);
  const handleClick = () => {
    setAuthModalState((prev) => ({ ...prev, type: "login" }));
  };
  return (
    <form className="space-y-6 px-4 pb-4">
      <h3 className="text-x1 font-medium text-white">Sign Up </h3>
      <div>
        <label
          htmlFor="email"
          className="text-sm font-medium block mb-2 text-gray-300"
        >
          Email
        </label>
        <input
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
        Register
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

import { auth } from "@/firebase/firebase";
import React, { useEffect, useState } from "react";

import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

type ResetPasswordProps = object;

const ResetPassword: React.FC<ResetPasswordProps> = () => {
  const [email, setEmail] = useState("");
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const handleReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const reset = await sendPasswordResetEmail(email);
    if (reset) {
      toast.success("Password Reset Email Sent", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
    }
  };
  useEffect(() => {
    if (error) {
      alert(error.message);
    }
  }, [error]);
  return (
    <form
      className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8"
      onSubmit={handleReset}
    >
      <h3 className="text-xl font-medium  text-white">Reset Password</h3>
      <p className="text-sm text-white ">
        Forgotten your password?🤣🤣 Lmao Loser
      </p>
      <div>
        <label
          htmlFor="email"
          className="text-sm font-medium block mb-2 text-gray-300"
        >
          Your email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          placeholder="name@company.com"
        />
      </div>

      <button
        type="submit"
        className={`w-full text-white  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                bg-brand-orange hover:bg-brand-orange-s `}
      >
        {sending ? "Sending.." : "Reset Password"}
      </button>
    </form>
  );
};
export default ResetPassword;

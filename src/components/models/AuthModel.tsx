import React, { useEffect } from "react";
import { GrFormClose } from "react-icons/gr";

import ResetPassword from "./ResetPassword";
import { useAtomValue, useSetAtom } from "jotai";
import { authModalState } from "@/atoms/authModalAtoms";
import Login from "./Login";
import Signup from "./Signup";
type AuthModelProps = object;

const AuthModel: React.FC<AuthModelProps> = () => {
  const authModal = useAtomValue(authModalState);
  const closeModal = useCloseModal();

  return (
    <>
      {/* Transparent overlay with light/dark support */}
      <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" />

      {/* Centered modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="relative w-full sm:w-[450px] mx-6">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg bg-gradient-to-b from-[rgb(255,161,22)] to-slate-900">
            <div className="flex justify-end p-2">
              <button
                type="button"
                className="bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white text-white"
                onClick={closeModal}
              >
                <GrFormClose className="h-5 w-5" />
              </button>
            </div>
            {authModal.type === "login" ? (
              <Login />
            ) : authModal.type === "register" ? (
              <Signup />
            ) : (
              <ResetPassword />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthModel;
function useCloseModal() {
  const setAuthModalState = useSetAtom(authModalState);
  const closeModal = () => {
    setAuthModalState((prev) => ({ ...prev, isOpen: false, type: "login" }));
  };
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "ESCAPE") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  });
  return closeModal;
}

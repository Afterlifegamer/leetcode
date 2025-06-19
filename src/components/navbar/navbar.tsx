/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import React from "react";
import { useSetAtom } from "jotai";
import { authModalState } from "@/atoms/authModalAtoms";
type navbarProps = object;

const navbar: React.FC<navbarProps> = () => {
  const setAuthModalState = useSetAtom(authModalState);
  const handleClick = () => {
    setAuthModalState((prev) => ({ ...prev, isOpen: true }));
  };
  return (
    <div className="flex items-center justify-between sm:px-12 px-2 md:px-24">
      <Link href="/" className="flex items-center justify-center h-20">
        <img src="/logo.png" alt="LeetCLone" className="h-full" />
      </Link>
      <div className="flex items-center">
        <button
          className="bg-[rgb(255,161,22)] text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium 
            hover:text-[rgb(255,161,22)] hover:bg-white hover:border-2 hover:border-[rgb(255,161,22)] border-2 border-transparent
            transition duration-300 ease-in-out"
          onClick={handleClick}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};
export default navbar;

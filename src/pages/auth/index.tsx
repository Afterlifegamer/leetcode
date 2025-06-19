import { authModalState } from "@/atoms/authModalAtoms";
import AuthModel from "@/components/models/AuthModel";
import Navbar from "@/components/navbar/navbar";
import React from "react";
import { useAtomValue } from "jotai";

type AuthProps = object;

const Auth: React.FC<AuthProps> = () => {
  const authModal = useAtomValue(authModalState);
  return (
    <div className="bg-gradient-to-b from-gray-600 to-black h-screen relative">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <div className="flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none">
          <img src="/hero.png" alt="hero image" />
        </div>
        {authModal.isOpen && <AuthModel />}
      </div>
    </div>
  );
};
export default Auth;

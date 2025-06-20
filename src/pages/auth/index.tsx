import { authModalState } from "@/atoms/authModalAtoms";
import AuthModel from "@/components/models/AuthModel";
import Navbar from "@/components/navbar/navbar";
import React, { useEffect, useState } from "react";
import { useAtomValue } from "jotai";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import router from "next/router";

type AuthProps = object;

const Auth: React.FC<AuthProps> = () => {
  const authModal = useAtomValue(authModalState);
  const [user, loading, error] = useAuthState(auth);
  const [pageLoading, setPageLoading] = useState(true);
  useEffect(() => {
    if (user) router.push("/");
    if (!loading && !user) {
      setPageLoading(false);
    }
  }, [user, router, loading]);
  if (pageLoading) return null;
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

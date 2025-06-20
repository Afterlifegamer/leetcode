import { auth } from "@/firebase/firebase";
import React from "react";
import { useSignOut } from "react-firebase-hooks/auth";
import { FiLogOut } from "react-icons/fi";

type logoutProps = object;

const logout: React.FC<logoutProps> = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [signOut, loading, error] = useSignOut(auth);
  const handleLogout = () => {
    signOut();
  };

  return (
    <button
      className="bg-[hsla(0,0%,100%,.1)] py-1.5 px-3 cursor-pointer rounded text-[rgb(255,161,22)]"
      onClick={handleLogout}
    >
      <FiLogOut />
    </button>
  );
};
export default logout;

import { auth } from "@/firebase/firebase";
import Link from "next/link";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Logout from "../Button/Logout";
import { useSetAtom } from "jotai";
import { authModalState } from "@/atoms/authModalAtoms";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import Timer from "../Timer/Timer";

type topbarProps = {
  problemPage?: boolean;
};

const topbar: React.FC<topbarProps> = ({ problemPage }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [user] = useAuthState(auth);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const setAuthModalState = useSetAtom(authModalState);
  return (
    <nav className="relative flex h-[50px] w-full shrink-0 items-center px-5 bg-[rgb(40,40,40)] text-[rgb(179,179,179)]">
      <div
        className={`flex w-full items-center justify-between ${
          problemPage ? "max-w-[1800px] mx-auto " : ""
        }`}
      >
        <Link href="/" className="h-[22px] flex-1">
          <Image src="/logo-full.png" alt="Logo" height={100} width={100} />
        </Link>
        {problemPage && (
          <div className="flex items-center gap-4 flex-1 justify-center">
            <div className="flex items-center justify-center rounded bg-[hsla(0,0%,100%,.1)] hover:bg-[hsla(0,0%,100%,.14)] h-8 w-8 cursor-pointer">
              <FaChevronLeft />
            </div>
            <Link
              href="/"
              className="flex items-center gap-2 font-medium max-w-[170px] text-[rgb(219,219,219)] cursor-pointer"
            >
              <div>
                <BsList />
              </div>
              <p>Problems List</p>
            </Link>
            <div className="flex items-center justify-center rounded bg-[hsla(0,0%,100%,.1)] hover:bg-[hsla(0,0%,100%,.14)] h-8 w-8 cursor-pointer">
              <FaChevronRight />
            </div>
          </div>
        )}

        <div className="flex items-center space-x-4 flex-1 justify-end">
          <div>
            <a
              href="https://www.buymeacoffee.com/burakorkmezz"
              target="_blank"
              rel="noreferrer"
              className="bg-[hsla(0,0%,100%,.1)] py-1.5 px-3 cursor-pointer rounded text-[rgb(255,161,22)] hover:bg-[hsla(0,0%,100%,.14)]"
            >
              Premium
            </a>
          </div>

          {!user && (
            <Link
              href="/auth"
              onClick={() => {
                setAuthModalState((prev) => ({
                  ...prev,
                  isOpen: true,
                  type: "login",
                }));
              }}
            >
              <button className="bg-[hsla(0,0%,100%,.1)] py-1 px-2 cursor-pointer rounded ">
                Sign In
              </button>
            </Link>
          )}
          {problemPage && <Timer />}
          {user && (
            <div className="cursor-pointer group relative">
              <Image
                src="/avatar.png"
                alt="user profile"
                width={30}
                height={30}
                className="rounded-full"
              />
              <div
                className="absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-[rgb(40,40,40)] text-[rgb(255,161,22)] p-2 rounded shadow-lg z-40 group-hover:scale-100 scale-0 
		                transition-all duration-300 ease-in-out"
              >
                <p className="text-sm">{user.email}</p>
              </div>
            </div>
          )}
          {user && <Logout />}
        </div>
      </div>
    </nav>
  );
};
export default topbar;

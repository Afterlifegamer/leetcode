import Link from "next/link";
import React from "react";

type topbarProps = object;

const topbar: React.FC<topbarProps> = () => {
  return (
    <nav className="relative flex h-[50px] w-full shrink-0 items-center px-5 bg-[rgb(40,40,40)] text-[rgb(179,179,179)]">
      <div
        className={`flex w-full items-center justify-between max-w-[1200px] mx-auto`}
      >
        <Link href="/" className="h-[22px] flex-1">
          <img src="/logo-full.png" alt="Logo" className="h-full" />
        </Link>

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
          <Link href="/auth">
            <button className="bg-[hsla(0,0%,100%,.1)] py-1 px-2 cursor-pointer rounded ">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default topbar;

import React from 'react';
import { GrFormClose } from "react-icons/gr";
import Login from './Login';

type AuthModelProps = object;

const AuthModel: React.FC<AuthModelProps> = () => {
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
              >
                <GrFormClose className="h-5 w-5" />
              </button>
            </div>
            <Login />
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthModel;

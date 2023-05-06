import React from "react";
import Image from "next/image";
import VIIE from "../../VIIE-logo.png";

export default function page() {
  return (
    <div class="flex items-center justify-center min-h-screen md:h-screen sm:bg-fixed bg-center bg-no-repeat bg-cover audi-img">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[2]">
        <div className="min-h-screen flex flex-col justify-center">
          <div className="max-w-md w-full mx-auto mt-5 sm:mt-0 bg-slate-100 p-8 mx-border border-gray-300 shadow-xl">
            <div className="max-w-md w-16 mx-auto">
              <Image
                priority
                src={VIIE}
                alt="VIIE Picture"
                width={80}
                height={80}
              />
            </div>
            <div className="text-3xl font-bold text-gray-900 mt-4 text-center">
              Welcome Back
            </div>
            <div className="text-base text-gray-500 text-center">
              Please enter your details.
            </div>
            <form action="" className="space-y-6">
              <div>
                <label
                  htmlFor=""
                  className="text-sm font-bold text-gray-600 block"
                >
                  Email
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="text-sm font-bold text-gray-600 block"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-300 rounded"
                  />
                  <label
                    htmlFor=""
                    className="ml-2 text-sm text-gray-600 hover:text-gray-800"
                  >
                    Remember me
                  </label>
                </div>
                <div>
                  <a
                    href="forgot-password"
                    class="font-medium text-sm text-blue-500 hover:text-blue-700"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>
              <div>
                <button className="w-full py-2 px-4 bg-red-800 hover:bg-red-900 rounded-md text-white text-sm font-semibold">
                  Login
                </button>
              </div>
              <div>
                <a
                  href="/Sign-up"
                  class="text-sm text-black-500 hover:text-blue-700"
                >
                  Not a Member? Register Now
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

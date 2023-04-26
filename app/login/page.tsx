import React from "react";
import Image from "next/image";
import about from "../../login.jpg";

const page = () => {
  return (
    <>
      <head>
        <title>Login</title>
      </head>

      <div>
        <div className="bg-gradient-to-tl from-purple-900 to-green-900 h-96 w-full relative">
          <Image
            priority
            src={about}
            alt=""
            className="w-full h-full object-cover absolute mix-blend-overlay"
          />
          <div className="py-40 flex justify-center items-center">
            <h1 className="text-white text-6xl font-serif">
              Account Management
            </h1>
          </div>
        </div>

        <h1>Hello</h1>
      </div>
    </>
  );
};

export default page;

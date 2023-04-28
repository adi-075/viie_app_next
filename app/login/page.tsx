import React from "react";
import Image from "next/image";
import login from "../../login.jpg";

const page = () => {
  return (
    <>
      <head>
        <title>Login</title>
      </head>

      <div>
        <div className="w-screen h-60 sm:h-96 relative">
          <Image
            priority
            src={login}
            alt="About Image"
            width={2500}
            height={1660}
            className="w-screen h-full object-cover absolute"
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

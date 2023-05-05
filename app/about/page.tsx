"use client";
import React from "react";
import Image from "next/image";
import about from "../../public/images/Auditorium.png";
import Timeline from "../timelineData";

function page() {
  return (
    <>
      <head>
        <title>About VIIE</title>
      </head>

      <body className="bg-gray-100 max-w-screen">
        <div>
          <div className="w-screen h-60 sm:h-96 relative">
            <Image
              priority
              src={about}
              alt="About Image"
              width={2500}
              height={1660}
              className="w-screen h-full object-cover absolute"
            />
          </div>
          <div className="md:flex justify-center items-center h-screen">
            <h1 className="text-4xl text-center font-bold py-5 px-2">
              Our Journey
            </h1>
            <div className="mx-4 h-screen">
              <Timeline />
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default page;

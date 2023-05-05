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
          <div>
            <h1 className="text-4xl text-center font-bold py-5 px-2">
              Our Journey
            </h1>
          </div>
          <div className="mx-4 h-screen">
            <Timeline />
          </div>
        </div>
      </div>
    </>
  );
}

export default page;

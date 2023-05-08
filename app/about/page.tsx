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

        <div className="my-16 flex flex-col mx-3 lg:flex-row lg:justify-center lg:items-center lg:mx-8">
          <div>
            <h1 className="text-red-900 text-sm font-serif py-4 uppercase">
              About us
            </h1>
            <p className="text-3xl text-black font-bold font-serif break-normal">
              We are the pioneers in developing the Global Pathway Programs
            </p>
          </div>
          <div>
            <p className="my-10 lg:mx-10 lg:my-0 text-gray-500 text-md font-sans font-normal break-word">
              Our Global Pathway program gives students the best of both worlds;
              studying initial years with us in India offers students a solid
              foundation. The academic rigor makes them ready to take on
              international challenges eventually. Vidyalankar has a legacy of
              countless successful candidates over these 16 years of operation.
            </p>
          </div>
        </div>

        {/* <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center px-10 py-16">
          <div>
            <h1 className="text-red-900 font-bold font-serif text-center text-3xl">
              Our Vision
            </h1>
          </div>
        </div> */}

        <div className="my-10 h-screen flex flex-col min-h-screen justify-center items-center">
          <div>
            <h1 className="text-4xl text-center font-bold py-5 px-2">
              Timeline
            </h1>
          </div>
          <div className="h-screen min-w-fit">
            <Timeline />
          </div>
        </div>
      </div>
    </>
  );
}

export default page;

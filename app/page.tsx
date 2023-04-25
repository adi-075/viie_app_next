import React from "react";
import Image from "next/image";
import Link from "next/link";
import { homeData } from "./homeData";
// import "./homepage.css";

const page = () => {
  return (
    <>
      <title>Home</title>
      <div className="flex items-center justify-center h-screen mb-12 bg-scroll sm:bg-fixed bg-center bg-cover custom-img">
        {/* Overlay  */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[2]" />
        <div className="p-5 text-white z-[2] mt-[-10rem]">
          <h2 className="text-5xl font-bold text-center">
            Welcome to Vidyalankar <br /> Institute for International <br />{" "}
            Education
          </h2>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold text-center mb-5">This is VIIE</h2>
        <p className="text-center">
          Vidyalankar has collaborated with top universities in the USA, CANADA,
          UK, Australia, and New Zealand and has developed some unique programs{" "}
          <br />
          at the undergraduate and postgraduate levels. Our programs equip the
          students with the right toolset, suitable skillset and, more
          importantly, the right <br /> mindset. Ever since they were started in
          2006, they have been well received by the students <br />, their
          parents and by the industry.
        </p>
        {/* <button className="mx-auto bg-red-600 p-1">More about VIIE</button> */}
        <Link href="/about">
          <button className="mt-5 bg-[#9c0e0e] text-white font-bold py-1 px-4 rounded mb-10">
            More About VIIE
          </button>
        </Link>
      </div>
      <div className="flex flex-col justify-center bg-[#f4f4f4]">
        <h1 className="mx-auto text-4xl font-bold mb-5">Academics</h1>
        <p className="mb-8 px-6 text-center">
          The main objective of education is to equip students with the
          necessary skills <br /> and knowledge to actively participate as
          responsible members of society and make significant <br />{" "}
          contributions.
        </p>
        <div className="flex flex-row justify-center py-4 px-10">
          <div className="px-5 hover:scale-125 transition-all duration-500 cursor-pointer">
            <Image
              src="/images/cs.png"
              alt="Computer Science Program"
              width={300}
              height={300}
            />
            <p>Computer Science/IT</p>
          </div>

          <div className="px-5 hover:scale-125 transition-all duration-500 cursor-pointer">
            <Image
              src="/images/management.png"
              alt="Management Program"
              width={300}
              height={300}
            />
            <p>Management</p>
          </div>

          <div className="px-5 hover:scale-125 transition-all duration-500 cursor-pointer">
            <Image
              src="/images/massmedia.png"
              alt="Mass Media Program"
              width={300}
              height={300}
            />
            <p>Mass Media</p>
          </div>
        </div>

        {/* Inserted Changes Here  */}

        <br />
      </div>
      {/* <div className="image">
          <Image
            className="image__img"
            src={pennstate}
            alt="Penn State Campus"
            width={2560}
            height={1660}
          />
          <div className="image__overlay image__overlay--blur">
            <div className="image__title">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={alumni}
                  alt="Alumni"
                  width={200}
                  height={200}
                  className="mx-auto"
                />
                <q className="ml-20 text-justify text-md p-5">
                  Vidyalankar Institute for International Education provided me
                  with not just a world-class education, but also an enriching
                  cultural experience that broadened my horizons and prepared me
                  for success in a globalized world.
                </q>
              </div>
            </div>
            {/* <p className="image__description">Here we have the Alumni</p> */}
      {/* </div>
        </div>  */}
    </>
  );
};

export default page;

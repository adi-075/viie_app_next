import React from "react";
import Image from "next/image";
import Link from "next/link";
import { homeData } from "./homeData";
import { Mandali } from "next/font/google";
import Events from "./Events";
// import "./homepage.css";

const page = () => {
  return (
    <>
      <title>Home</title>
      <div className="flex items-center justify-center h-screen mb-12 bg-fixed sm:bg-center bg-cover custom-img-mb md:custom-img">
        {/* Overlay  */}
        <div className="absolute top-0 left-0 right-0 bottom-0 z-[2]" />
        <div className="p-5 text-white z-[2] mt-[-10rem]">
          <h2 className="text-5xl font-bold text-center">
            Welcome to Vidyalankar <br /> Institute for International <br />{" "}
            Education
          </h2>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold text-center mb-5">This is VIIE</h2>
        <p className="text-center p-3 sm:p-0">
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
        <h1 className="mx-auto text-4xl font-bold mb-5 my-10">Academics</h1>
        <p className="mb-8 px-6 text-center">
          The main objective of education is to equip students with the
          necessary skills <br /> and knowledge to actively participate as
          responsible members of society and make significant <br />{" "}
          contributions.
        </p>
        <div className="event-list grid grid-fow-row md:grid-flow-col gap-10 md:gap-14 justify-center px-2">
          <div className="hover:scale-125 transition-all duration-500 cursor-pointer">
            <Image
              src="/images/cs.png"
              alt="Computer Science Program"
              width={300}
              height={300}
            />
            <p>Computer Science/IT</p>
          </div>

          <div className="hover:scale-125 transition-all duration-500 cursor-pointer">
            <Image
              src="/images/management.png"
              alt="Management Program"
              width={300}
              height={300}
            />
            <p>Management</p>
          </div>

          <div className="hover:scale-125 transition-all duration-500 cursor-pointer">
            <Image
              src="/images/massmedia.png"
              alt="Mass Media Program"
              width={300}
              height={300}
            />
            <p>Mass Media</p>
            <br />
          </div>
        </div>

        <br />
      </div>
      <section className="mx-auto w-fit p-12">
        <h1 className="font-bold text-black text-2xl text-center">
          Under Development
        </h1>
        {/* card  */}
        <div className="w-72 h-fit group">
          <div className="relative overflow-hidden">
            <Image
              src="/images/penn-state.png"
              alt="Penn State Campus"
              className="object-fill h-48 w-96"
              width={200}
              height={200}
            />
            <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-300">
              <button className="bg-black text-white py-2 px-5">Alumni</button>
            </div>
          </div>
        </div>
      </section>
      <Events />
    </>
  );
};

export default page;

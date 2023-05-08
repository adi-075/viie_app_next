"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import VIIE from "../VIIE-logo.png";

import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"], weight: "700" });

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [aTextColor, setATextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#FFFFFF");
        setTextColor("#6b7280");
        setATextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
        setATextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <div className="flex">
            <Image
              src={VIIE}
              alt="VIIE Picture"
              width={60}
              height={60}
              className="w-12 h-12 lg:w-14 lg:h-14"
            />
            <div className="mt-0 mx-1 block sm:hidden lg:mt-1 lg:block">
              <h1
                style={{ color: `${aTextColor}` }}
                className={inter.className}
              >
                VIDYALANKAR INSTITUTE FOR <br /> INTERNATIONAL EDUCATION
              </h1>
            </div>
          </div>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4 font-semibold">
            <Link href="/about">About</Link>
          </li>
          <li className="p-4 font-semibold">
            <Link href="/courses">Courses</Link>
          </li>
          <li className="p-4 font-semibold">
            <Link href="/admission">Admission</Link>
          </li>
          <li className="p-4 font-semibold">
            <Link href="/partner-with-us">Partner with us</Link>
          </li>
          <li className="px-4 py-3 font-semibold">
            <Link href="/login">
              <button className="bg-[#9c0e0e] text-white font-bold py-1 px-4 rounded">
                Login
              </button>
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/about">About</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/admission">Admission</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/contact">Contact</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

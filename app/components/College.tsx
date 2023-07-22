import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";

interface college {
  logo: string;
  uni: string;
  address: string;
  size?: number;
  link: string;
  hero?: string;
}

export default function College(props: college) {
  return (
    <>
      <div className="hero relative -mt-10">
        {/* <img src="/rutgers.jpg" alt="Rutgers" /> */}
        <img src={props.hero} height={100} />
      </div>
      <div className="shadow-md flex flex-row py-7 justify-center items-center mx-auto">
        <div>
          <img
            src={props.logo}
            alt={props.uni}
            width={props.size}
            height={props.size}
            className="mx-5"
          />
        </div>
        <div>
          <h1 className="font-bold text-xl px-8 break-before-avoid-page">
            {props.uni}
          </h1>
        </div>
      </div>
      <hr className="h-px w-5/6 mx-auto my-8 bg-gray-200 border-0" />
      <div className="flex justify-center m-5">
        <div>
          <FaMapMarkerAlt className="mt-1 m-2" color="gray" />
        </div>
        <div>
          <p className="font-semibold break-before-avoid-page">
            {props.address}
          </p>
        </div>
      </div>
      <hr className="h-px w-5/6 mx-auto my-8 bg-gray-200 border-0" />
      <div className="flex justify-center">
        <div>
          <BsGlobe className="mt-1 m-2" color="gray" />
        </div>
        <div>
          <a
            href="https://camden.rutgers.edu"
            target="_blank"
            className="underline text-blue-400"
          >
            {props.link}
          </a>
        </div>
      </div>
      <hr className="h-px w-5/6 mx-auto my-8 bg-gray-200 border-0" />
    </>
  );
}

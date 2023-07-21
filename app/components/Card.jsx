import React from "react";
import Image from "next/image";

function Card(props) {
  return (
    <div>
      <div className="flex flex-col space-y-10 justify-center items-center h-full mx-7 mt-10 relative xl:hidden">
        <a href="/rutgers">
          <div className="align-middle items-center text-center relative flex justify-center">
            <img
              src="/csu.jpg"
              alt="Rutgers"
              width={500}
              height={500}
              className="rounded-2xl"
            />
            <h1 className="text-2xl absolute z-10 font-sans font-bold m-2 text-white">
              RUTGERS UNIVERSITY
            </h1>
          </div>
        </a>
        <a href="/psu">
          <div className="align-middle items-center text-center relative flex justify-center">
            <img
              src="/psu.jpg"
              alt="Rutgers"
              width={500}
              height={500}
              className="rounded-2xl"
            />
            <h1 className="text-2xl absolute z-10 font-sans font-bold m-2 text-white">
              PENN STATE UNIVERSITY
            </h1>
          </div>
        </a>
        <a href="/csu">
          <div className="align-middle items-center text-center relative flex justify-center">
            <img
              src="/csu.jpg"
              alt="Rutgers"
              width={500}
              height={500}
              className="rounded-2xl"
            />
            <h1 className="text-2xl absolute z-10 font-sans font-bold m-2 text-white">
              CALIFORNIA STATE UNIVERSITY
            </h1>
          </div>
        </a>
        <a href="/csu">
          <div className="align-middle items-center text-center relative flex justify-center">
            <img
              src="/csu.jpg"
              alt="Rutgers"
              width={500}
              height={500}
              className="rounded-2xl"
            />
            <h1 className="text-2xl absolute z-10 font-sans font-bold m-2 text-white">
              NULL
            </h1>
          </div>
        </a>
        <a href="/csu">
          <div className="align-middle items-center text-center relative flex justify-center">
            <img
              src="/csu.jpg"
              alt="Rutgers"
              width={500}
              height={500}
              className="rounded-2xl"
            />
            <h1 className="text-2xl absolute z-10 font-sans font-bold m-2 text-white">
              NULL
            </h1>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Card;

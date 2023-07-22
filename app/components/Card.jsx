import React from "react";
import Image from "next/image";

function Card(props) {
  return (
    <div className="xl:hidden">
      <h1 class="font-bold text-4xl text-center mt-7">US UNIVERSITIES</h1>
      <div className="flex flex-col space-y-10 justify-center items-center h-full mx-7 mt-10 relative xl:hidden">
        <a href="/rutgers">
          <div className="align-middle items-center text-center relative flex justify-center">
            <img
              src="/rutgers.jpg"
              alt="Rutgers"
              width={500}
              height={500}
              className="rounded-2xl shadow-xl drop-shadow-lg brightness-50"
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
              className="rounded-2xl shadow-xl drop-shadow-lg brightness-50"
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
              className="rounded-2xl shadow-xl drop-shadow-lg brightness-50"
            />
            <h1 className="text-2xl absolute z-10 font-sans font-bold m-2 text-white">
              CALIFORNIA STATE UNIVERSITY
            </h1>
          </div>
        </a>
      </div>
      <h1 class="font-bold text-4xl text-center mt-10">
        CANADIAN UNIVERSITIES
      </h1>
      <div className="flex flex-col space-y-10 justify-center items-center h-full mx-7 mt-10 relative xl:hidden">
        <a href="/ul">
          <div className="align-middle items-center text-center relative flex justify-center">
            <img
              src="/ul.jpg"
              alt="University of lethbridge"
              width={500}
              height={500}
              className="rounded-2xl shadow-xl drop-shadow-lg brightness-50"
            />
            <h1 className="text-2xl absolute z-10 font-sans font-bold m-2 text-white">
              UNIVERSITY OF LETHBRIDGE
            </h1>
          </div>
        </a>
        <a href="/uf">
          <div className="align-middle items-center text-center relative flex justify-center">
            <img
              src="/uf.jpg"
              alt="University of Fraser Valley"
              width={500}
              height={500}
              className="rounded-2xl shadow-xl drop-shadow-lg brightness-50"
            />
            <h1 className="text-2xl absolute z-10 font-sans font-bold m-2 text-white">
              UNIVERSITY OF LETHBRIDGE
            </h1>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Card;

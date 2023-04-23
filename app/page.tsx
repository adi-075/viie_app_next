import React from "react";

const page = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen mb-[3rem] bg-fixed bg-center bg-cover custom-img">
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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          accusantium quo voluptates exercitationem, inventore possimus
          similique illo esse vero eos hic ducimus, aperiam voluptatibus magni
          corporis, maxime necessitatibus alias magnam!
        </p>
        {/* <button className="mx-auto bg-red-600 p-1">More about VIIE</button> */}
        <button className="mt-5 bg-[#9c0e0e] text-white font-bold py-1 px-4 rounded mb-10">
          More About VIIE
        </button>
      </div>
      <div className="flex flex-col items-center justify-center bg-[#f4f4f4]">
        <h1 className="text-4xl font-bold mb-5">Academics</h1>
        <p className="mb-8">
          The main objective of education is to equip students with the
          necessary skills and knowledge to actively participate as responsible
          members of society and make significant contributions.
        </p>
      </div>
    </>
  );
};

export default page;

import React from "react";
import Image from "next/image";
import about from "../../BG Image.jpg";

function page() {
  return (
    <>
      <head>
        <title>About VIIE</title>
      </head>

      <div>
        <div className="bg-gradient-to-tl from-purple-900 to-green-900 h-96 w-full relative">
          <Image
            src={about}
            alt="About Image"
            className="w-full h-full object-cover absolute mix-blend-overlay"
          />
          {/* <img src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' className='w-full h-full object-cover absolute mix-blend-overlay' /> */}
          <div className="py-40 flex justify-center items-center">
            <h1 className="text-white text-6xl font-serif">About VIIE</h1>
          </div>
        </div>

        <h1>Hello</h1>
      </div>
    </>
  );
}

export default page;

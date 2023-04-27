import React from "react";
import Image from "next/image";
import Link from "next/link";

const Events = () => {
  return (
    <div className="flex flex-col justify-center bg-[#f4f4f4] h-full">
      <h1 className="mx-auto text-4xl font-bold mb-5 my-10">Upcoming Events</h1>
      <div className="my-5">
        <ul className="event-list grid grid-fow-row sm:grid-flow-col gap-14 justify-center">
          <li className="event w-64">
            <article className="event-card bg-white shadow-lg">
              <div className="container">
                <div className="box">
                  <Image
                    className="event-img brightness-75"
                    height={900}
                    width={900}
                    alt=""
                    src="/images/event-1.png"
                  />
                  <div className="box bg-[#6B0707] px-2 py-2 w-16 text-white shadow-xl ml-4 mt-52 text-center">
                    <abbr className="month no-underline" title="April">
                      MAR
                      <br />
                    </abbr>
                    <span className="day font-bold">20 </span>
                  </div>
                  {/* </time> */}
                </div>
              </div>

              <div className="content p-3">
                <span className="event-type text-red-800 font-bold">
                  <br />
                  <br />
                  <br />
                  Lecture/Presentation/Talk
                </span>
                <h2 className="event-title">
                  <a
                    className="event-title__link font-semibold hover:text-blue-400"
                    href="https://events.stanford.edu/event/longevitydesignchallenge2023?utm_campaign=widget&amp;utm_medium=widget&amp;utm_source=Stanford+University"
                  >
                    <br />
                    STUDY COMPUTER SCIENCE IN USA at half the cost.
                    <br /> Dr. Daniel Heimmermann
                  </a>
                </h2>

                <span className="start-time">
                  <br /> 01:30 PM IST
                </span>
              </div>
            </article>
          </li>

          {/* 2nd event */}
          <li className="event w-64">
            <article className="event-card bg-white shadow-lg">
              <div className="container">
                <div className="box">
                  <Image
                    className="event-img brightness-75"
                    height={900}
                    width={900}
                    alt=""
                    src="/images/event-1.png"
                  />
                  <div className="box bg-[#6B0707] px-2 py-2 w-16 text-white shadow-xl ml-4 mt-52 text-center">
                    <abbr className="month no-underline" title="April">
                      MAR
                      <br />
                    </abbr>
                    <span className="day font-bold">20 </span>
                  </div>
                  {/* </time> */}
                </div>
              </div>

              <div className="content p-3">
                <span className="event-type text-red-800 font-bold">
                  <br />
                  <br />
                  <br />
                  Lecture/Presentation/Talk
                </span>
                <h2 className="event-title">
                  <a
                    className="event-title__link font-semibold hover:text-blue-400"
                    href="https://events.stanford.edu/event/longevitydesignchallenge2023?utm_campaign=widget&amp;utm_medium=widget&amp;utm_source=Stanford+University"
                  >
                    <br />
                    STUDY COMPUTER SCIENCE IN USA at half the cost.
                    <br /> Dr. Daniel Heimmermann
                  </a>
                </h2>

                <span className="start-time">
                  <br /> 01:30 PM IST
                </span>
              </div>
            </article>
          </li>

          {/* 3rd event */}
          <li className="event w-64">
            <article className="event-card bg-white shadow-lg">
              <div className="container">
                <div className="box">
                  <Image
                    className="event-img brightness-75"
                    height={900}
                    width={900}
                    alt=""
                    src="/images/event-1.png"
                  />
                  <div className="box bg-[#6B0707] px-2 py-2 w-16 text-white shadow-xl ml-4 mt-52 text-center">
                    <abbr className="month no-underline" title="April">
                      MAR
                      <br />
                    </abbr>
                    <span className="day font-bold">20 </span>
                  </div>
                  {/* </time> */}
                </div>
              </div>

              <div className="content p-3">
                <span className="event-type text-red-800 font-bold">
                  <br />
                  <br />
                  <br />
                  Lecture/Presentation/Talk
                </span>
                <h2 className="event-title">
                  <a
                    className="event-title__link font-semibold hover:text-blue-400"
                    href="https://events.stanford.edu/event/longevitydesignchallenge2023?utm_campaign=widget&amp;utm_medium=widget&amp;utm_source=Stanford+University"
                  >
                    <br />
                    STUDY COMPUTER SCIENCE IN USA at half the cost.
                    <br /> Dr. Daniel Heimmermann
                  </a>
                </h2>

                <span className="start-time">
                  <br /> 01:30 PM IST
                </span>
              </div>
            </article>
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Link href="/blogs">
          <button className="mt-5 bg-[#6B0707] text-white font-bold py-1 px-4 rounded mb-10">
            More Information
          </button>
        </Link>
      </div>

      <br />
    </div>
  );
};

export default Events;

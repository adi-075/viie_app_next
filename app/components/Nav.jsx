import { IoIosArrowRoundBack } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import React from "react";

export default function Nav() {
  return (
    <nav>
      <div className="mob-nav z-10 absolute">
        <div className="nav inline-block xl:hidden">
          <div>
            <div className="mt-4 ml-4 grow">
              <a href="/">
                <IoIosArrowRoundBack
                  size={40}
                  className="back-icon rounded-full drop-shadow-lg bg-slate-50"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <RxHamburgerMenu
          size={40}
          className="p-2 back-icon rounded-full drop-shadow-lg bg-slate-50 relative top-4 left-[88%] mr-10 xl:hidden z-10"
        />
      </div>
    </nav>
  );
}

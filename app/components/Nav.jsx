import { IoIosArrowRoundBack } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

import React from "react";

export default function Nav() {
  return (
    <nav>
      <div className="mob-nav ">
        <div className="nav inline-block xl:hidden">
          <div className="flex flex-row">
            <div className="mt-4 ml-4 grow">
              <a href="/">
                <IoIosArrowRoundBack
                  size={40}
                  className="back-icon rounded-full drop-shadow-lg bg-slate-50"
                />
              </a>
            </div>
            <div>
              <RxHamburgerMenu
                size={40}
                className="p-2 back-icon rounded-full drop-shadow-lg bg-slate-50 absolute top-0 right-4 mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

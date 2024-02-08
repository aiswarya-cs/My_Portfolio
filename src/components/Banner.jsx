import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { close, bulb } from "../assets";

const Banner = () => {
  const [hide, setHide] = useState(true);

  useEffect(() => {
    const bannerTimer = setTimeout(() => {
      setHide(false);
    }, 5000);

    return () => clearTimeout(bannerTimer);
  }, []);

  return (
    <div
      id="sticky-banner"
      tabIndex={-1}
      className={`${
        hide ? "hidden" : "block"
      } absolute h-20 top-0 left-0 z-50 flex justify-between w-full p-4 bg-primary shadow-md opacity-[0.98]`}
    >
      {/* <div className="flex items-center mx-auto">
        <p className="flex items-center text-sm font-normal text-gray-500 ">
         
          
        </p>
      </div> */}
      <div className="flex items-center">
        <button
          data-dismiss-target="#sticky-banner"
          onClick={() => setHide(true)}
          type="button"
          className="flex-shrink-0 inline-flex justify-center items-center text-gray-400 hover:bg-gray-800 rounded-lg text-sm p-1.5 "
        >
          <img src={close} alt="close" height={12} width={12} />
          <span className="sr-only">Close banner</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;

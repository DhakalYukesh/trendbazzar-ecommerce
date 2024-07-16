import React from "react";

const Banner = ({ visible }) => {
  return (
    <div
      className={`navbar ${
        visible ? "navbarVisible" : "navbarHidden"
      } bg-black text-gray-300 text-[0.78rem] text-center py-2`}
    >
      <p className="opacity-90">
        Summer Sale! Save upto 20% on the current collections.{" "}
        <a href="#" className="underline">
          Discover Now
        </a>
      </p>
    </div>
  );
};

export default Banner;

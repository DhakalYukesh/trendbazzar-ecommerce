"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoBagHandleOutline } from "react-icons/io5";
import Banner from "./Banner";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 80) ||
          currentScrollPos < 10
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <>
      <div
        className={`navbar bg-white ${
          visible ? "navbarVisible" : "navbarHidden"
        }`}
      >
        <Banner visible={visible} />
        <div className="container flex justify-between items-center pt-10 pb-2">
          <Image
            src="/images/logo.png"
            width={30}
            height={30}
            alt="trendbazzar"
          />

          <nav className="flex gap-4 text-sm pl-14 font-bold tracking-tight">
            <a
              href="#"
              className="hover:text-orange-500 transition-all ease-in-out"
            >
              Women
            </a>
            <a
              href="#"
              className="hover:text-orange-500 transition-all ease-in-out"
            >
              Men
            </a>
            <a
              href="#"
              className="hover:text-orange-500 transition-all ease-in-out"
            >
              Children
            </a>
            <a
              href="#"
              className="hover:text-orange-500 transition-all ease-in-out"
            >
              Sports
            </a>
          </nav>

          <div className="flex gap-2">
            <a
              href="#"
              className="hover:text-orange-500 transition-all ease-in-out"
            >
              <FiSearch size={20} />
            </a>
            <a
              href="#"
              className="hover:text-orange-500 transition-all ease-in-out"
            >
              <FaRegHeart size={20} />
            </a>
            <a
              href="#"
              className="hover:text-orange-500 transition-all ease-in-out"
            >
              <CgProfile size={20} />
            </a>
            <a
              href="#"
              className="hover:text-orange-500 transition-all ease-in-out"
            >
              <IoBagHandleOutline size={20} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

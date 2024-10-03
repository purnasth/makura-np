import React, { useState } from "react";
import { TbMenu2, TbMailFilled } from "react-icons/tb";
import { MdClose, MdCall } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import logo from "../../assets/logo.png";

import { AiFillInstagram } from "react-icons/ai";

import ProductsSlider from "./ProductsSlider";

import { PiWatchBold } from "react-icons/pi";
import { PiHandbagBold } from "react-icons/pi";
import { PiImageSquareBold } from "react-icons/pi";
import { TbRosetteDiscountCheck } from "react-icons/tb";

const SideNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "auto";
  };

  const closeNav = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <button onClick={toggleNav} className="text-xl md:text-2xl text-light">
        <TbMenu2 />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={closeNav}
        />
      )}

      <div
        className={`fixed top-0 left-0 size-full h-screen text-dark transition-all duration-500 bg-green-600 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } z-50`}
      >
        <div
          className="absolute inset-0 size-full bg-cover -z-10"
          style={{
            backgroundImage:
              'url("https://media.istockphoto.com/id/1704870086/vector/abstract-gray-and-white-color-gradient-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=U_tzoW8Rktdydkc8Ng-O-1kPI-r7BcJun-o2O3n2nvM=")',
          }}
        ></div>
        <div className="px-2 md:px-12 py-2 md:pb-14 flex items-center justify-between flex-col gap-2 md:gap-16 size-full">
          <div className="flex items-center justify-between relative w-full">
            <ul className="w-1/3 flex items-center gap-3">
              <li>
                <a
                  href="#"
                  className="text-xs md:text-base inline-flex items-center justify-end gap-1 tracking-wide uppercase"
                >
                  <MdCall className="text-base md:text-xl" /> +9779808021753
                </a>
              </li>
            </ul>
            <a href="/" className="flex-grow flex justify-center">
              <img
                src={logo}
                alt="Logo"
                className={`filter-black size-16 md:size-20 object-contain transition-all duration-500`}
              />
            </a>
            <button
              onClick={closeNav}
              className="w-1/3 text-xs inline-flex items-center justify-end gap-1 tracking-widest uppercase"
            >
              Close
              <MdClose className="text-xl md:text-3xl" />
            </button>
          </div>
          <div className="w-full">
            <div className="relative grid grid-cols-1 md:grid-cols-4">
              <div className="col-span-1">
                {/* <span className="uppercase text-dark/40 mb-8">Menu</span> */}
                <ul className="links flex items-start justify-start gap-2 md:gap-24 flex-col">
                  <li className="w-full group">
                    <a
                      href="/products"
                      className="navlink w-full pb-2 inline-flex justify-between font-luxury text-base md:text-2xl 2xl:text-3xl text-dark tracking-widest uppercase group-hover:tracking-[0.25em] group-hover:font-extrabold transition-all duration-300 group-hover:text-black"
                      aria-label="Watch"
                    >
                      Watch
                      <PiWatchBold className="opacity-0 group-hover:opacity-100 inline-block mr-20 group-hover:mr-2 md:group-hover:mr-12 transition-all duration-300 ease-linear" />
                    </a>
                  </li>
                  <li className="group w-full">
                    <a
                      href="/products"
                      className="navlink w-full pb-2 inline-flex justify-between font-luxury text-base md:text-2xl 2xl:text-3xl text-dark tracking-widest uppercase group-hover:tracking-[0.25em] group-hover:font-extrabold transition-all duration-300 group-hover:text-black"
                      aria-label="Products"
                    >
                      Products
                      <PiHandbagBold className="opacity-0 group-hover:opacity-100 inline-block mr-20 group-hover:mr-2 md:group-hover:mr-12 transition-all duration-300 ease-linear" />
                    </a>
                  </li>
                  <li className="group w-full">
                    <a
                      href="/offers"
                      className="navlink w-full pb-2 inline-flex justify-between font-luxury text-base md:text-2xl 2xl:text-3xl text-dark tracking-widest uppercase group-hover:tracking-[0.25em] group-hover:font-extrabold transition-all duration-300 group-hover:text-black"
                      aria-label="Offers"
                    >
                      Offers
                      <TbRosetteDiscountCheck className="opacity-0 group-hover:opacity-100 inline-block mr-20 group-hover:mr-2 md:group-hover:mr-12 transition-all duration-300 ease-linear" />
                    </a>
                  </li>
                  <li className="group w-full">
                    <a
                      href="/gallery"
                      className="navlink w-full pb-2 inline-flex justify-between font-luxury text-base md:text-2xl 2xl:text-3xl text-dark tracking-widest uppercase group-hover:tracking-[0.25em] group-hover:font-extrabold transition-all duration-300 group-hover:text-black"
                      aria-label="Gallery"
                    >
                      Gallery
                      <PiImageSquareBold className="opacity-0 group-hover:opacity-100 inline-block mr-20 group-hover:mr-2 md:group-hover:mr-12 transition-all duration-300 ease-linear" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-span-3">
                <div>
                  <span className="hidden md:block uppercase text-dark/80">
                    Trending Products
                  </span>

                  <ProductsSlider />
                </div>

                <div>
                  <p className="hidden md:block max-w-3xl text-dark">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                    ipsam porro illum voluptatum consectetur, officia, magni
                    reiciendis quam sit veritatis, quisquam id dolor sapiente
                    minima recusandae quasi atque.
                  </p>
                  <ul className="flex items-center gap-4 mt-5">
                    <li className="group">
                      <a
                        href="#"
                        className="text-sm font-semibold text-dark/70 drop-shadow flex items-center gap-1"
                      >
                        <AiFillInstagram className="text-xl" />
                        <label className="text-dark/60 hover:text-dark hover:underline hidden group-hover:block transition-all duration-300">
                          makura_np
                        </label>
                      </a>
                    </li>
                    <li className="group">
                      <a
                        href="#"
                        className="text-sm font-semibold text-dark/70 drop-shadow flex items-center gap-1"
                      >
                        <IoLogoWhatsapp className="text-xl" />
                        <label className="text-dark/60 hover:text-dark hover:underline hidden group-hover:block transition-all duration-300">
                          +977-9808021753
                        </label>
                      </a>
                    </li>
                    <li className="group">
                      <a
                        href="#"
                        className="text-sm font-semibold text-dark/70 drop-shadow flex items-center gap-1"
                      >
                        <TbMailFilled className="text-xl" />
                        <label className="text-dark/60 hover:text-dark hover:underline hidden group-hover:block transition-all duration-300">
                          info@makura.com
                        </label>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:items-center justify-between flex-col md:flex-row relative w-full">
            <p>&copy; 2024 Makura. All Rights Reserved.</p>
            <p className="flex item-center group">
              Developed by
              <a
                className="ml-1 font-semibold flex items-center gap-1"
                rel="noreferrer"
                href="https://www.purnashrestha.com.np/"
                target="_blank"
              >
                <span className="h-[1px] w-1 group-hover:w-6 bg-dark/80 transition-all duration-300"></span>
                Purna Shrestha
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;

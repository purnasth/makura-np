import React, { useState } from "react";
import { TbMenu2, TbMailFilled } from "react-icons/tb";
import { MdClose, MdCall } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import logo from "../../assets/logo.png";

import { AiFillInstagram } from "react-icons/ai";

import ProductsSlider from "./ProductsSlider";

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
      <button onClick={toggleNav} className="text-2xl text-light">
        <TbMenu2 />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={closeNav}
        />
      )}

      <div
        className={`fixed top-0 left-0 w-full h-screen overflow-y-auto text-dark transition-all duration-500 ${
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
        <div className="px-12 pt-2 pb-14 flex items-center justify-between flex-col gap-16 size-full">
          <div className="flex items-center justify-between relative w-full">
            <ul className="w-1/3 flex items-center gap-3">
              <li>
                <a
                  href="#"
                  className="text-base inline-flex items-center justify-end gap-1 tracking-wide uppercase"
                >
                  <MdCall className="text-xl" /> +977-9808021753
                </a>
              </li>
            </ul>
            <a href="/" className="flex-grow flex justify-center">
              <img
                src={logo}
                alt="Logo"
                className={`filter-black size-20 object-contain transition-all duration-500`}
              />
            </a>
            <button
              onClick={closeNav}
              className="w-1/3 text-xs inline-flex items-center justify-end gap-1 tracking-widest uppercase"
            >
              Close
              <MdClose className="text-3xl" />
            </button>
          </div>
          <div className="w-full">
            <div className="relative grid grid-cols-4">
              <div className="col-span-1">
                {/* <span className="uppercase text-dark/40 mb-8">Menu</span> */}
                <ul className="links flex items-start justify-start gap-2 md:gap-24 flex-col">
                  <li className="w-full">
                    <a
                      href="#"
                      className="navlink w-full pb-2 inline-block font-luxury text-3xl text-dark tracking-widest uppercase"
                      aria-label="Watch"
                    >
                      Watch
                    </a>
                  </li>
                  <li className="w-full">
                    <a
                      href="#"
                      className="navlink w-full pb-2 inline-block font-luxury text-3xl text-dark tracking-widest uppercase"
                      aria-label="Products"
                    >
                      Products
                    </a>
                  </li>
                  <li className="w-full">
                    <a
                      href="#"
                      className="navlink w-full pb-2 inline-block font-luxury text-3xl text-dark tracking-widest uppercase"
                      aria-label="Offers"
                    >
                      Offers
                    </a>
                  </li>
                  <li className="w-full">
                    <a
                      href="aboutPage.html"
                      className="navlink w-full pb-2 inline-block font-luxury text-3xl text-dark tracking-widest uppercase"
                      aria-label="Gallery"
                    >
                      Gallery
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-span-3">
                <div>
                  <span className="uppercase text-dark/80">
                    Trending Products
                  </span>

                  <ProductsSlider />
                </div>

                <div>
                  <p className="max-w-3xl text-dark">
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
          <div className="flex items-center justify-between relative w-full">
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

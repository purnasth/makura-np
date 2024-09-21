import React from "react";
import logo from "../../assets/logo.svg";
import img1 from "../../assets/img1.jpg";
import makuraVideo from "../../assets/video/makura.mp4";

import { TbMailFilled } from "react-icons/tb";
import { MdCall } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

import { AiFillInstagram } from "react-icons/ai";

const Footer: React.FC = () => {
  return (
    <>
      <main className="bg-dark text-light mb-[40vh] 2xl:mb-[50vh] pb-12">
        <div className="container">
          <div className="grid grid-cols-4 gap-12">
            <div className="col-span-1">
              <a href="/" className="">
                <img
                  src={logo}
                  alt="Logo"
                  className={`filter-white size-20 object-contain transition-all duration-500`}
                />
              </a>
              <h2 className="text-2xl mt-8 mb-2">Makura</h2>
              <p className="text-xs text-extralight opacity-80 text-pretty">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                labore, unde libero magni quisquam eos architecto enim impedit,
                quia nostrum!
              </p>

              <ul className="flex items-center gap-4 mt-5">
                <li className="group">
                  <a
                    href="#"
                    className="text-light/70 group-hover:text-light group-hover:scale-125 drop-shadow flex items-center gap-1 transition-all duration-300 ease-linear"
                  >
                    <AiFillInstagram className="text-base" />
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#"
                    className="text-light/70 group-hover:text-light group-hover:scale-125 drop-shadow flex items-center gap-1 transition-all duration-300 ease-linear"
                  >
                    <IoLogoWhatsapp className="text-base" />
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#"
                    className="text-light/70 group-hover:text-light group-hover:scale-125 drop-shadow flex items-center gap-1 transition-all duration-300 ease-linear"
                  >
                    <TbMailFilled className="text-base" />
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#"
                    className="text-light/70 group-hover:text-light group-hover:scale-125 drop-shadow flex items-center gap-1 transition-all duration-300 ease-linear"
                  >
                    <MdCall className="text-base" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1 ml-16">
              <span className="text-xs uppercase text-light/40">Menu</span>

              <ul className="mt-10 space-y-6">
                <li>
                  <a
                    href="/"
                    className="text-light text-sm uppercase font-luxury"
                  >
                    Watch
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-light text-sm uppercase font-luxury"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-light text-sm uppercase font-luxury"
                  >
                    Offers
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-light text-sm uppercase font-luxury"
                  >
                    Gallery
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2">
              <span className="text-xs uppercase text-light/40">
                Instagram wall
              </span>

              <div className="mt-10 grid grid-cols-4 gap-4">
                <img
                  src={img1}
                  alt=""
                  className="outline outline-light/20 shadow"
                />
                <img
                  src={img1}
                  alt=""
                  className="outline outline-light/20 shadow"
                />
                <img
                  src={img1}
                  alt=""
                  className="outline outline-light/20 shadow"
                />
                <img
                  src={img1}
                  alt=""
                  className="outline outline-light/20 shadow"
                />
              </div>
            </div>
          </div>

          <hr className="border-light/5 my-12" />
          {/* <div className="bg-gradient-to-r from-light/5 via-light/5 to-light/5 w-full h-px my-12" /> */}

          <div className="flex items-center justify-between text-sm">
            <p className="font-extralight">
              &copy; 2024 Makura. All Rights Reserved.
            </p>
            <p className="flex item-center group font-extralight">
              Developed by
              <a
                className="ml-1 font-semibold flex items-center gap-1"
                rel="noreferrer"
                href="https://www.purnashrestha.com.np/"
                target="_blank"
              >
                <span className="h-[1px] w-1 group-hover:w-6 bg-light/80 transition-all duration-300"></span>
                Purna Shrestha
              </a>
            </p>
          </div>
        </div>
      </main>
      <section className="fixed bottom-0 w-full flex items-center justify-center -z-10">
        {/* <img
          src={img1}
          alt=""
          className="w-full h-[40vh] 2xl:h-[50vh] object-cover object-bottom"
        /> */}
        <video
          className={`w-full h-[40vh] 2xl:h-[50vh] object-cover`}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={img1}
        >
          <source src={makuraVideo} type="video/mp4" />
          <track
            src="#"
            kind="captions"
            srcLang="en"
            label="english_captions"
          ></track>
          Your browser does not support the video tag.
        </video>
        <h2 className="absolute text-3xl text-light">
          Makura Proudly Made in Nepal
        </h2>
      </section>
    </>
  );
};

export default Footer;

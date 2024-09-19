import React from "react";
import img1 from "../assets/img1.jpg";

const About: React.FC = () => {
  return (
    <main>
      <div className="text-center space-y-4">
        <span className="text-xs md:text-base uppercase">
          “PROUDLY” Made in NEPAL (🇳🇵) Est. 2021
        </span>
        <h3 className="text-xl md:text-2xl lg:text-3xl leading-snug lg:leading-snug">
          We Run The Web (TM²T)
        </h3>
      </div>

      <section className="mt-20">
        <div className="grid grid-cols-3 gap-24 content-center">
          <div className="space-y-24">
            <div className="flex items-end justify-end">
              <img src={img1} alt="" className="w-44 h-60 object-cover" />
            </div>
            <div className="flex items-end">
              <img src={img1} alt="" className="w-80 h-full object-cover" />
            </div>
            <div className="flex items-end justify-end">
              <img src={img1} alt="" className="w-44 h-60 object-cover" />
            </div>
            <div className="flex items-end">
              <img src={img1} alt="" className="w-80 h-full object-cover" />
            </div>
            <div className="flex items-end justify-end">
              <img
                src={img1}
                alt=""
                className="w-full h-52 object-cover pl-16"
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 flex-col max-h-screen sticky top-0">
            <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-snug lg:leading-snug uppercase">
              Makura
            </h3>
            <p className="text-sm text-center text-dark/60">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              cum itaque nulla iste rem tempora, sequi ducimus a sit dicta,
              ullam minus vero. Similique magni nihil, quia provident soluta
              illo harum cupiditate, excepturi totam nobis sunt assumenda, et
              eius porro a sit perferendis fugit voluptate voluptas architecto
              exercitationem saepe. Velit!
            </p>
          </div>
          <div className="space-y-24">
            <div className="flex items-end justify-end">
              <img src={img1} alt="" className="w-80 h-full object-cover" />
            </div>
            <div className="flex">
              <img src={img1} alt="" className="w-44 h-60 object-cover" />
            </div>
            <div className="flex items-end justify-end">
              <img src={img1} alt="" className="w-80 h-full object-cover" />
            </div>
            <div className="flex">
              <img src={img1} alt="" className="w-44 h-60 object-cover" />
            </div>
            <div className="flex">
              <img
                src={img1}
                alt=""
                className="w-full h-52 object-cover px-16"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

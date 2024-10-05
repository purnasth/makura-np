import React from "react";
import { TbBrandInstagram } from "react-icons/tb";

const Instagram: React.FC = () => {
  return (
    <>
      <div
        id="instagram-icon"
        className="fixed right-5 bottom-6 z-[99] flex items-center justify-center gap-1"
      >
        <p className="border shadow text-xs bg-light px-2 py-1 rounded-full animate-pulse font-normal">
          Need Help?
        </p>
        <div className="size-auto rounded-xl instagram shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-150 ease-in-out">
          <a
            href="https://wa.me/+9779808021753"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="instagram"
          >
            <TbBrandInstagram className="text-4xl text-light" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Instagram;

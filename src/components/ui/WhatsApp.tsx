import React from "react";
import { MdWhatsapp } from "react-icons/md";

const WhatsApp: React.FC = () => {
  return (
    <>
      <div
        id="instagram-icon"
        className="fixed right-4 bottom-4 z-[99] flex items-center justify-center gap-1 group"
      >
        <p className="border shadow text-xs bg-light px-2 py-1 rounded-full animate-pulse font-semibold translate-x-16 scale-0 group-hover:translate-x-0 group-hover:scale-100 transition-all duration-300">
          Need Help?
        </p>
        <div className="size-10 bg-light rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-150 ease-in-out -z-10">
          <a
            href="https://wa.me/+9779808021753"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="whatsapp"
          >
            <MdWhatsapp className="text-3xl text-green-600" />
          </a>
        </div>
      </div>
    </>
  );
};

export default WhatsApp;

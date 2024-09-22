import React from "react";
import logo from "../../assets/logo.svg";

const LogoBar: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center bg-light">
      <span className="before:content-[''] before:absolute before:left-0 before:w-[47%] before:h-[1px] before:bg-dark/10 after:content-[''] after:absolute after:right-0 after:w-[47%] after:h-[1px] after:bg-dark/10"></span>
      <img src={logo} alt="Makura" className="z-10 size-16 object-contain opacity-50" />
    </div>
  );
};

export default LogoBar;

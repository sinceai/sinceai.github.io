import React from "react";
interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <>
      
      <img
        src="assets/logo/logo_full.png"
        className={className ? className : "w-auto h-[100px]"}
        alt="Since AI Logo"
      />
    </>
  );
};

export default Logo;

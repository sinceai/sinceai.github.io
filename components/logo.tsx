import React from "react";
interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  const defaultClass = "logo-default-size";
  return (
    <>
      <style jsx>{`
        .logo-default-size {
          width: auto;
          height: 100px;
        }
      `}</style>
      <img
        src="assets/logo/logo_full.png"
        className={className ? className : defaultClass}
        alt="Since AI Logo"
      />
    </>
  );
};

export default Logo;

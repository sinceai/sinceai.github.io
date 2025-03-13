import React from "react";
interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return <div className={`font-bold ${className || ""}`}>Since AI</div>;
};

export default Logo;

import { Link } from "react-router-dom";
import React from "react";

interface ButtonProps {
  name: string;
}

const Button: React.FC<ButtonProps> = ({ name }) => {
  return (
    <Link
      to="/products"
      onClick={() => window.scroll(0, 0)}
      className="px-6 py-2.5 bg-[#EC72AF] text-white"
    >
      {name}
    </Link>
  );
};

export default Button;

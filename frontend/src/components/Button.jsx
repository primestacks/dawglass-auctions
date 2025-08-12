import React from "react";

const Button = ({
  children,
  className = "",
  type = "button",
  onClick,
  ...props
}) => {
  return (
    <button
      type={type}
      className={`px-4 py-1 rounded transition mx-4 text-[#2563EB] bg-[#FFFFFF] ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

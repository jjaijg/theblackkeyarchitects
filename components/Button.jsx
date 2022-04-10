import React from "react";

const ButtonEle = ({ children, variant, type = "button", onClick }) => {
  const classes =
    variant === "text"
      ? `text-black border-b-2 border-orange-400 hover:border-b-6 rounded-sm`
      : `p-3 bg-black text-white tracking-vwider uppercase`;
  return (
    <button
      type={type}
      onClick={onClick}
      className={` cursor-pointer ${classes}`}
    >
      {children}
    </button>
  );
};

const Button = ({ children, ...props }) => {
  return (
    <div>
      <ButtonEle {...props}>{children}</ButtonEle>
    </div>
  );
};

export default Button;

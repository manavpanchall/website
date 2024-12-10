import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[12px]",
};

const variants = {
  fill: {
    light_blue_700: "bg-light_blue-700 text-white",
    cyan_300_01: "bg-cyan-300_01 text-white",
    gray_100_01: "bg-gray-100_01 text-blue_gray-600",
  },
  outline: {
    gray_800_59: "border-gray-800_59 border-[0.5px] border-solid",
  },
};

const sizes = {
  xl: "h-[60px] px-[22px] text-[18px]",
  lg: "h-[48px] px-3.5 text-[14px]",
  md: "h-[46px] px-2.5",
  sm: "h-[42px] px-2.5",
  xs: "h-[26px] px-1.5 text-[11px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "gray_100_01",
  ...restProps
}) => {
  return (
    <button
      className={`flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap 
        ${className} 
        ${shape ? shapes[shape] : ""} 
        ${size ? sizes[size] : ""} 
        ${variant && variants[variant] && variants[variant][color] ? variants[variant][color] : ""}`}
      {...restProps}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  size: PropTypes.oneOf(["xl", "lg", "md", "sm", "xs"]),
  color: PropTypes.oneOf([
    "light_blue_700",
    "cyan_300_01",
    "gray_100_01",
    "gray_800_59",
  ]),
};

export { Button };

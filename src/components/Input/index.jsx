"use client";
import React from "react";
import PropTypes from "prop-types";

// Shape styles
const shapes = {
  round: "rounded-md",
};

// Variant styles
const variants = {
  fill: {
    white: "bg-white text-gray-500_02",
    gray_50_02: "bg-gray-50_02",
  },
};

// Size styles
const sizes = {
  sm: "h-[58px] px-5 text-[18px]",
  xs: "h-[50px] px-3.5 text-[14px]",
};

// Input component
const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      shape = "round",
      variant = "fill",
      size = "sm",
      color = "white",
      onChange,
      ...restProps
    },
    ref
  ) => {
    return (
      <label
        className={`flex items-center justify-center cursor-text flex-grow ${className} ${shape && shapes[shape]} ${
          variant && variants[variant]?.[color]
        } ${size && sizes[size]}`}
      >
        {label && <span>{label}</span>}
        {prefix && <span>{prefix}</span>}
        <input
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          className="flex-grow"
          {...restProps}
        />
        {suffix && <span>{suffix}</span>}
      </label>
    );
  }
);

// PropTypes validation
Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["sm", "xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white", "gray_50_02"]),
  onChange: PropTypes.func,
};

export { Input };

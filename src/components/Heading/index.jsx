import React from "react";

const sizes = {
  texts: "text-[10px] font-medium",
  textlg: "text-[16px] font-medium lg:text-[13px]",
  textxl: "text-[20px] font-medium lg:text-[17px]",
  text4xl: "text-[35px] font-medium lg:text-[29px] md:text-[33px] sm:text-[31px]",
  text5xl: "text-[43px] font-medium lg:text-[36px] md:text-[39px] sm:text-[33px]",
  headingxs: "text-[14px] font-bold",
  headings: "text-[18px] font-bold lg:text-[15px]",
};

const Heading = ({ children, className = "", size = "textlg", as, ...restProps }) => {
  const Component = as || "h6"; // Default to 'h6' if no 'as' prop is provided
  return (
    <Component
      className={`font-cabinetgrotesk ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export default Heading;

"use client";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Slider = React.forwardRef(
  (
    {
      items = [],
      activeIndex = 0,
      centerMode = false,
      magnifiedIndex = 0,
      activeSlideCss = "scale-75",
      ...props
    },
    ref
  ) => {
    const isSmall = (index) => {
      if (activeIndex + magnifiedIndex >= items?.length) {
        return index === activeIndex + magnifiedIndex - items?.length;
      }
      return index === activeIndex + magnifiedIndex;
    };

    const slideItems = centerMode
      ? items?.map((child, index) => {
          if (isSmall(index)) {
            return React.cloneElement(child, {
              ...child.props,
              className: [
                child.props?.className,
                activeSlideCss
              ].filter(Boolean).join(" "),
            });
          }
          return React.cloneElement(child);
        })
      : items;

    return (
      <AliceCarousel
        items={slideItems}
        infinite
        ref={ref}
        {...props}
        touchTracking
        mouseTracking
        disableButtonsControls
      />
    );
  }
);

export { Slider };

"use client";

import React, { useState, useRef } from "react";
import { Button, Img, Text, Heading, Slider } from "../../components";
import ProductCard from "../../components/ProductCard";

export default function RelatedArticlesSection() {
  const [sliderState, setSliderState] = useState(0);
  const sliderRef = useRef(null);

  return (
    <div>
      <Heading>Related Articles</Heading>
      <Slider>
        <ProductCard />
        {/* Add more ProductCard components as needed */}
      </Slider>
    </div>
  );
}

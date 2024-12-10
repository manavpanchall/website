"use client";

import React, { useState, Suspense } from "react";
import Text from "../../components/Text";
import Heading from "../../components/Heading";
import Img from "../../components/Img";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import RoundTableImage from "../../components/RoundTableImage";
import ProductRecommendationSection from "./ProductRecommendationSection";
import RelatedArticlesSection from "./RelatedArticlesSection";
import SignUpSection from "./SignUpSection";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const ProductSinglePage = () => {
  const [quantity, setQuantity] = useState(1);

  const accordionData = [
    { deliveryText: "Livraisons" },
    { deliveryText: "Questions" },
  ];

  return (
    <div>
      <Header />
      <main>
        <Heading>Product Single Page</Heading>
        <Text>This is the product single page.</Text>
        <Img src="/path/to/image.jpg" alt="Product Image" />
        <Button>Buy Now</Button>
        <Accordion>
          {accordionData.map((item, index) => (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>{item.deliveryText}</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <Text>Content for {item.deliveryText}</Text>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
        <ProductRecommendationSection />
        <RelatedArticlesSection />
        <SignUpSection />
      </main>
      <Footer />
    </div>
  );
};

export default ProductSinglePage;

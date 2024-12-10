import React, { Suspense } from "react";

export default function ProductRecommendationSection() {
  return (
    <>
      <div className="mt-[46px] flex flex-col items-center">
        <div className="container-xs flex flex-col gap-[22px] lg:px-5 md:px-5">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <Heading
              size="text4xl"
              as="h5"
              className="self-center font-cabinetgrotesk text-[35px] font-medium text-gray-800 lg:text-[29px] md:text-[29px] sm:text-[27px]"
            >
              Ces produits pourraient vous intéresser
            </Heading>
            <Heading
              as="h6"
              className="mt-3.5 font-cabinetgrotesk text-[16px] font-medium uppercase text-gray-800 underline lg:text-[13px]"
            >
              Voir toute la collection
            </Heading>
          </div>
          <div className="flex gap-2.5 md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {[...Array(3)].map((_, index) => (
                <ProductSingleProductCard key={`productlist-${index}`} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}

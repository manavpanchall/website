import { Button, Text, Img, Heading } from "•/..";
import React from "react";

export default function ProductSingleCard({ ...props }) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col w-[32%] md:w-full gap-2`}
    >
      <div className="flex flex-col items-center gap-[26px] self-stretch rounded-lg bg-gray-100 px-2.5 py-3.5">
        <div className="flex items-center justify-between gap-5 self-stretch">
          <Img
            src="img_icons.svg"
            width={32}
            height={32}
            alt="Icon Image"
            className="ml-1.5 h-[32px]"
          />
          <Heading
            size="text-xs"
            className="mb-1 flex items-center justify-center self-end rounded bg-white px-2 text-[10px] font-medium uppercase text-gray-900"
          >
            Art de la table
          </Heading>
        </div>
        <Img
          src="img_table_ronde_165cm_224x224.png"
          width={224}
          height={224}
          alt="Round Table Image"
          className="mb-12 h-[224px] w-[46%] object-contain"
        />
        <Text
          size="text-2xl"
          as="p"
          className="self-center font-playfairdisplay text-[24px] font-normal text-gray-800"
        >
          Title
        </Text>
        <Text
          size="text-2xl"
          as="p"
          className="font-geist text-[24px] font-medium text-gray-800"
        >
          <span>o</span>
          <span className="font-normal">€</span>
        </Text>
      </div>
      <div className="flex items-center justify-between gap-5">
        <Text as="p" className="text-[14px] font-normal text-gray-500">
          <span>0,35€/Pièce &nbsp;</span>
          <span className="text-[10px]">RÉF : VABGN5</span>
        </Text>
        <Button shape="round" className="min-w-[68px] rounded-[12px] px-1.5 font-medium">
          20 pieces
        </Button>
      </div>
    </div>
  );
}

"use client";

import { Button, Img, Input, Text, Heading } from "../../components";
import React from "react";

export default function SignUpSection() {
  return (
    <>
      <div className="relative mt-[-108px] flex">
        <div className="container-xs flex justify-center gap-[18px] lg:px-5 md:flex-col md:px-5">
          {/* Image Section */}
          <div className="flex rounded-[20px] bg-gray-50">
            <Img
              src="img_buffet_037_1.png"
              width={702}
              height={300}
              alt="Buffet Image"
              className="h-[300px] w-full rounded-[20px] object-cover lg:h-auto md:h-auto"
            />
          </div>

          {/* Form Section */}
          <div className="flex-1 rounded-[20px] bg-gray-50 p-[26px] md:self-stretch sm:p-4">
            <div className="mb-6 flex flex-col gap-5">
              {/* Heading and Subtext */}
              <div className="flex flex-col items-start gap-1">
                <Heading
                  size="text5xl"
                  as="p"
                  className="font-cabinetgrotesk text-[43px] font-medium text-gray-800 lg:text-[36px] md:text-[27px] sm:text-[21px]"
                >
                  <span className="text-gray-800">
                    S'inscrire & économiser&nbsp;
                  </span>
                  <span className="text-cyan-300_01">10%</span>
                </Heading>
                <Text
                  as="p"
                  className="w-full text-[14px] font-medium leading-[22px] text-gray-400"
                >
                  Office ipsum you must be muted, synergize helicopter
                  prioritize anyway job due harvest most opportunity didn&#39;t.
                  Yet busy any meeting shark light marginalised 4-blocker
                  message. Productize corporate nail caught synergy highlights
                  lunch. Company another pushback items dear or any.
                </Text>
              </div>

              {/* Input and Button */}
              <div className="mr-2 flex items-center justify-center gap-3 md:mr-0 md:flex-col">
                <Input
                  shape="round"
                  type="email"
                  name="Email Input"
                  placeholder="john@doe.com"
                  className="rounded-lg border border-solid border-pink-50 px-5 font-light"
                />
                <Button
                  color="cyan_300_01"
                  size="xl"
                  rightIcon={
                    <Img
                      src="img_arrow_right.svg"
                      width={22}
                      height={22}
                      alt="Arrow Right"
                      className="mt-0.5 h-[22px] w-[22px] object-contain"
                    />
                  }
                  className="min-w-[166px] gap-2 rounded-lg px-[22px] font-cabinetgrotesk font-bold uppercase sm:px-4"
                >
                  S'inscrire
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

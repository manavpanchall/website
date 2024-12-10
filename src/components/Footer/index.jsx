import React from "react";
import Link from "next/link";
import { Button, Img, Heading, Text } from "../";

export default function Footer({ ...props }) {
  return (
    <footer
      {...props}
      className={`${props.className} flex flex-col mt-[92px] mb-[414px]`}
    >
      <div className="flex w-full flex-col items-center gap-[34px]">
        {/* Divider */}
        <div className="h-[0.5px] w-full self-stretch bg-gray-800_30" />

        <div className="container-xs lg:px-5 md:px-5">
          <div className="mr-[22px] flex items-start justify-between gap-5 md:mr-0 md:flex-col">
            {/* Info Sections */}
            <div className="flex w-[52%] items-center justify-center gap-10 self-center md:w-full md:flex-col">
              <div className="flex w-[18%] flex-col items-center gap-3 md:w-full">
                <Img
                  src="img_checkmark.svg"
                  width={64}
                  height={36}
                  alt="Checkmark Image"
                  className="h-[36px] w-[48%] object-contain"
                />
                <Img
                  src="img_group.svg"
                  width={132}
                  height={14}
                  alt="Group Image"
                  className="h-[14px] w-full"
                />
              </div>

              {/* Practical Info */}
              <div className="flex w-[36%] flex-col items-start gap-1 md:w-full">
                <Heading
                  size="headings"
                  as="h6"
                  className="font-cabinetgrotesk text-[18px] font-bold text-gray-800 lg:text-[15px]"
                >
                  INFOS PRATIQUES
                </Heading>
                <ul className="flex flex-col items-start gap-1">
                  <li>
                    <Link href="#">
                      <Text
                        as="p"
                        className="text-[14px] font-normal text-gray-800"
                      >
                        A propos
                      </Text>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Text
                        as="p"
                        className="text-[14px] font-normal text-gray-800"
                      >
                        Livraisons & Reprises
                      </Text>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Text
                        as="p"
                        className="text-[14px] font-normal text-gray-800"
                      >
                        Mode d'emploi
                      </Text>
                    </Link>
                  </li>
                  <li>
                    <Link href="F.A.Q" target="_blank" rel="noreferrer">
                      <Text
                        as="p"
                        className="text-[14px] font-normal text-gray-800"
                      >
                        F.A.Q
                      </Text>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal Info */}
              <div className="flex w-[40%] flex-col items-start gap-1 md:w-full">
                <Heading
                  size="headings"
                  as="h6"
                  className="font-cabinetgrotesk text-[18px] font-bold text-gray-800 lg:text-[15px]"
                >
                  LÉGAL
                </Heading>
                <ul className="flex flex-col items-start gap-1">
                  <li>
                    <Link href="#">
                      <Text
                        as="p"
                        className="text-[14px] font-normal text-gray-800"
                      >
                        Mentions légales
                      </Text>
                    </Link>
                  </li>
                  <li>
                    <Link href="CGU" target="_blank" rel="noreferrer">
                      <Text
                        as="p"
                        className="text-[14px] font-normal text-gray-800"
                      >
                        CGU
                      </Text>
                    </Link>
                  </li>
                  <li>
                    <Link href="CGV" target="_blank" rel="noreferrer">
                      <Text
                        as="p"
                        className="text-[14px] font-normal text-gray-800"
                      >
                        CGV
                      </Text>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Text
                        as="p"
                        className="text-[14px] font-normal text-gray-800"
                      >
                        Politique de confidentialité
                      </Text>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex w-[10%] flex-col items-end gap-2.5 md:w-full">
              <Heading
                size="headings"
                as="h6"
                className="font-cabinetgrotesk text-[18px] font-bold text-gray-800 lg:text-[15px]"
              >
                NOUS SUIVRE
              </Heading>
              <div className="flex justify-end gap-2.5 self-stretch">
                <Button
                  color="gray_800_59"
                  size="sm"
                  variant="outline"
                  className="w-[42px] rounded-md border-[0.5px] px-2.5"
                >
                  <Img src="img_twitter.svg" width={22} height={22} />
                </Button>
                <Button
                  color="gray_800_59"
                  size="sm"
                  variant="outline"
                  className="w-[42px] rounded-md border-[0.5px] px-2.5"
                >
                  <Img src="img_info.svg" width={18} height={18} />
                </Button>
                <Button
                  color="gray_800_59"
                  size="sm"
                  variant="outline"
                  className="w-[42px] rounded-md border-[0.5px] px-2.5"
                >
                  <Img src="img_linkedin_in.svg" width={22} height={22} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

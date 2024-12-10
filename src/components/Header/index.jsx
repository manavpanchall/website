"use client";
import { closesvg } from "../Input/close";
import Text from "../Text";
import Heading from "../Heading";
import Img from "../Img";
import Button from "../Button";
import Input from "../Input";
import Link from "next/link";
import React, { useState } from "react";

const Header = ({ ...props }) => {
  const [searchBarValue, setSearchBarValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      {...props}
      className={`${props.className} flex flex-col items-center border-gray-200 border-b border-solid bg-white`}
    >
      <Button onClick={toggleMenu}>
        <Img src={closesvg} alt="Close" />
      </Button>
      <div className="container-xs mt-7 flex flex-col items-center gap-8 lg:px-5 md:px-5">
        {/* Top Section */}
        <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
          {/* Logo and Search Bar */}
          <div className="flex w-[58%] items-start justify-center gap-2.5 self-center md:w-full md:flex-col">
            <Img
              src="img_header_logo.png"
              width={132}
              height={64}
              alt="Header Logo"
              className="h-[64px] w-[132px] self-end object-contain"
            />
            <Input
              color="gray_50_02"
              size="xs"
              shape="round"
              name="Search Field"
              placeholder="Rechercher un produit"
              value={searchBarValue}
              onChange={(e) => setSearchBarValue(e.target.value)}
              suffix={
                searchBarValue?.length > 0 ? (
                  <closesvg
                    onClick={() => setSearchBarValue("")}
                    height={24}
                    width={24}
                    fillColor="#003348"
                  />
                ) : (
                  <Img
                    src="img_search.svg"
                    width={24}
                    height={24}
                    alt="Search"
                    className="h-[24px] w-[24px] object-contain"
                  />
                )
              }
              className="gap-4 rounded-md px-3.5 text-blue_gray-500"
            />
          </div>

          {/* Favorites and Cart */}
          <div className="flex w-[34%] items-center justify-center md:w-full sm:flex-col">
            <div className="flex items-center gap-2">
              <Link href="#">
                <Img
                  src="img_lightbulb_01.svg"
                  width={18}
                  height={18}
                  alt="Inspiration Icon"
                  className="h-[18px]"
                />
              </Link>
              <Text
                as="p"
                className="font-poppins text-[14px] font-medium text-blue_gray-800"
              >
                Inspirations
              </Text>
            </div>
            <Button
              color="light_blue_700"
              size="lg"
              leftIcon={
                <Img
                  src="img_shoppingcart01.svg"
                  width={20}
                  height={20}
                  alt="Shopping Cart"
                  className="h-[20px] w-[20px] object-contain"
                />
              }
              className="ml-3 min-w-[104px] gap-2 rounded-md border border-solid border-light_blue-800 px-3.5 font-poppins font-medium sm:ml-0"
            >
              Panier
            </Button>
          </div>
        </div>

        {/* Navigation Menu */}
        <ul className="flex items-start gap-[38px] md:flex-col">
          {[
            "Art de la table",
            "Mobilier",
            "Nappage",
            "Matériel de salle",
            "Cuisine",
            "Barbecue",
            "Tente",
            "Chauffage",
            "Podium - Piste de danse",
            "Son et lumière",
            "Packs",
            "Consommables",
          ].map((item, index) => (
            <li key={index}>
              <Link href="#" className="cursor-pointer">
                <Text
                  as="p"
                  className="font-inter text-[14px] font-medium uppercase text-gray-600 hover:font-bold hover:text-light_blue-700"
                >
                  Cosommables
                </Text>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <nav>
        <Link href="/">
          <a>
            <Heading>Home</Heading>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <Text>About</Text>
          </a>
        </Link>
        {/* Add more links as needed */}
      </nav>
      <Input type="search" placeholder="Search..." />
    </header>
  );
};

export default Header;

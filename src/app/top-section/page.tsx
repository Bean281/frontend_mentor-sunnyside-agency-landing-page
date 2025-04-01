"use client";

import Image from "next/image";
import imageHeaderMobile from "@/public/images/mobile/image-header.jpg";
import imageHeaderDesktop from "@/public/images/desktop/image-header.jpg";
import logoImage from "@/public/images/logo.svg";
import iconHam from "@/public/images/icon-hamburger.svg";
import iconArrowDown from "@/public/images/icon-arrow-down.svg";
import Link from "next/link";
import { useState } from "react";

export default function TopSection() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div className="container-top-section h-screen">
      <div className="img-container relative">
        <Image
          src={imageHeaderMobile}
          alt="image-header-mobile"
          className="md:hidden lg:hidden"
        />
        <Image
          src={imageHeaderDesktop}
          alt="image-header-desktop"
          className="hidden md:block"
        />

        <div className="absolute top-20 w-full md:hidden lg:hidden">
          {openModal && (
            <div className="container-navbar">
              <ul className="nav-ctn bg-neutral-white font-barlow text-neutral-grayish mx-10 flex h-80 flex-col items-center justify-between p-10 text-xl font-semibold">
                <li className="hover:bg-primary-yellow hover:text-neutral-desaturated relative ml-5 px-4 py-1 hover:rounded-4xl hover:px-2.25 hover:font-bold hover:uppercase">
                  <Link href="/">About</Link>
                </li>
                <li className="hover:bg-primary-yellow hover:text-neutral-desaturated relative ml-5 px-4 py-1 hover:rounded-4xl hover:px-2.25 hover:font-bold hover:uppercase">
                  <Link href="/">Services</Link>
                </li>
                <li className="hover:bg-primary-yellow hover:text-neutral-desaturated relative ml-5 px-4 py-1 hover:rounded-4xl hover:px-2.25 hover:font-bold hover:uppercase">
                  <Link href="/">Projects</Link>
                </li>
                <li className="hover:bg-primary-yellow hover:text-neutral-desaturated relative ml-5 px-4 py-1 hover:rounded-4xl hover:px-2.25 hover:font-bold hover:uppercase">
                  <Link href="/">Contact</Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="nav-container absolute top-10 flex w-full items-center justify-between px-7">
          <div className="logo-ctn">
            <Image src={logoImage} alt="image-logo" className="logo" />
          </div>

          <div className="nav-box">
            <div className="icon-ham-ctn md:hidden lg:hidden">
              <Image
                src={iconHam}
                alt="icon-ham"
                className="logo cursor-pointer"
                onClick={() => setOpenModal(!openModal)}
              />
            </div>

            <ul className="menu-nav font-barlow hidden gap-10 md:flex md:justify-between">
              <li className="text-neutral-desaturated relative ml-5 px-4 py-1 hover:rounded-4xl hover:bg-amber-50 hover:px-2.25 hover:font-semibold hover:uppercase">
                <Link href="/">About</Link>
              </li>
              <li className="text-neutral-desaturated relative ml-5 px-4 py-1 hover:rounded-4xl hover:bg-amber-50 hover:px-2.25 hover:font-semibold hover:uppercase">
                <Link href="/">Services</Link>
              </li>
              <li className="text-neutral-desaturated relative ml-5 px-4 py-1 hover:rounded-4xl hover:bg-amber-50 hover:px-2.25 hover:font-semibold hover:uppercase">
                <Link href="/">Projects</Link>
              </li>
              <li className="text-neutral-desaturated relative ml-5 px-4 py-1 hover:rounded-4xl hover:bg-amber-50 hover:px-2.25 hover:font-semibold hover:uppercase">
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="title-top-section absolute top-0 w-screen h-screen flex flex-col gap-10 lg:gap-25 lg:justify-center items-center">
          <p className="text-5xl text-center lg:text-6xl font-barlow mt-40 lg:mt-0">WE ARE CREATIVES</p>
          <Image src={iconArrowDown} alt="arrow-down"/>
        </div>
      </div>
    </div>
  );
}

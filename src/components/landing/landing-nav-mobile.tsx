"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import LandingWrapper from "../wrapper/landing-wrapper";
import Link from "next/link";
import { useState } from "react";
import { landingNavLinks } from "@/app/constants";

const LandingNavMobile = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="z-50 absolute w-full flex flex-col py-4">
      <LandingWrapper className="flex flex-row justify-between items-center">
        <div>
          <Image width={150} height={75} src="/images/logo.png" alt="Logo" />
        </div>

        <div onClick={() => setToggle((prev) => !prev)} className="md:hidden">
          <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
            {toggle ? <X color="white" /> : <Menu color="white" />}
          </div>
        </div>

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-primary absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl z-20`}
        >
          <ul className="list-none flex-col justify-end items-center flex-1">
            {landingNavLinks.map((nav, index) => (
              <li
                key={nav.title}
                className={`font-dmSans font-normal cursor-pointer text-[16px] ${
                  index === landingNavLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white mr-10`}
              >
                <Link href={`${nav.href}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </LandingWrapper>
    </nav>
  );
};

export default LandingNavMobile;

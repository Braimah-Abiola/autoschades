"use client";

import Link from "next/link";
import LandingWrapper from "../wrapper/landing-wrapper";

import { MoveDown } from "lucide-react";
import Image from "next/image";

const LandingHero = () => {
  return (
    <div className="">
      <LandingWrapper className="flex flex-col items-center justify-center text-start">
        <div className="z-10 w-full items-start justify-center flex flex-col -mt-10 md:-mt-0 h-screen">
          <p className="mt-2 md:mt-5 w-full md:w-[60%] text-xl md:text-2xl uppercase text-white text-start">
            EXPERT AUTO REPARATIES VOOR ELKE BEHOEFTE.
          </p>
          <h1 className="md:max-w-5xl text-5xl font-semibold md:text-6xl lg:text-[72px] lg:leading-[1.2] text-white mt-6 md:-mt-0">
            Rijd met <span className="text-primary">vertrouwen</span>.
          </h1>
          <h1 className="md:max-w-5xl text-5xl font-semibold md:text-6xl lg:text-[72px] lg:leading-[1.2] text-white md:-mt-0">
            Kies voor <span className="text-primary">ons</span>.
          </h1>
          <p className="mt-6 md:mt-5 w-full md:w-[60%] text-lg md:text-2xl text-white text-start">
            Vertrouw op onze bekwame technici om ervoor te zorgen dat uw
            voertuig soepel en veilig blijft rijden met eersteklas auto
            reparatiediensten.
          </p>
        </div>

        <div className="w-full h-screen object-cover top-0 absolute min-h-screen md:max-w-none">
          <Image
            fill
            src="/images/hero_banner.png"
            className="object-cover"
            alt="Mechanics"
          />
        </div>

        <div className="mx-auto w-fit max-w-fit px-5 md:px-60 bottom-5 md:bottom-20 md:left-0 absolute flex flex-row items-center space-x-5">
          <Link href="#start">
            <div className="flex flex-row items-center md:space-x-4">
              <div className="flex items-center justify-center border-2 border-white rounded-full h-16 w-10">
                <MoveDown className="arrow-icon-down" color="white" />
              </div>
              <p className="text-white hidden md:block">
                Scroll om te ontdekken.
              </p>
            </div>
          </Link>
        </div>
      </LandingWrapper>
    </div>
  );
};

export default LandingHero;

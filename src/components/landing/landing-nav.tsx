"use client";

import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import LandingWrapper from "../wrapper/landing-wrapper";
import { useEffect, useState } from "react";

const LandingNav = () => {
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="">
      <nav
        className={`flex flex-col w-full ${
          isScrolled ? " bg-white/95 shadow-sm" : "bg-transparent"
        } fixed top-0 z-50`}
      >
        <LandingWrapper className="flex flex-col items-center justify-center text-center py-4">
          {/* <div className="flex flex-row w-full justify-between">
          <div className="text-white items-center flex flex-row gap-4">
            <MapPin />
            <p>Industry road 101 8071DD Nunspeet</p>
          </div>

          <div className="text-white items-center flex flex-row gap-4">
            <Clock />
            <p>Maandag tot en met vrijdag: 07.00 - 17.00 uur</p>
            <Separator className="h-4" orientation="vertical" />
            <p>Zaterdag: 07.00 - 13.00 uur</p>
          </div>

          <div>
            <Button size="lg" variant="outline">
              <Phone className="mr-4" />
              0341-251 300
            </Button>
          </div>
        </div> */}

          <div className="flex flex-row w-full justify-between items-center">
            <div>
              <Image
                width={160}
                height={100}
                src="/images/logo.png"
                alt="Logo"
              />
            </div>
            <div
              className={`flex flex-row ${
                isScrolled ? "text-black" : "text-white"
              } space-x-16 transition-all`}
            >
              <Link href="/">
                <p className="hover:underline underline-offset-8 transition-all">
                  DIENSTEN
                </p>
              </Link>
              <Link href="/">
                <p className="hover:underline underline-offset-8 transition-all">
                  PRODUCTEN
                </p>
              </Link>
              <Link href="/">
                <p className="hover:underline underline-offset-8 transition-all">
                  {" "}
                  OVER ONS
                </p>
              </Link>
              <Link href="/">
                <p className="hover:underline underline-offset-8 transition-all">
                  ONS TEAM
                </p>
              </Link>
            </div>

            <div>
              <Button size="lg">
                <Phone className="mr-4" />
                0341-251 300
              </Button>
            </div>
          </div>
        </LandingWrapper>
      </nav>
    </div>
  );
};

export default LandingNav;

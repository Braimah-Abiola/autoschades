import Image from "next/image";
import LandingWrapper from "../wrapper/landing-wrapper";
import { Clock, MapPin, Phone } from "lucide-react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Link from "next/link";

const LandingNav = () => {
  return (
    <nav className="flex flex-col w-full z-50 absolute">
      <LandingWrapper className="flex flex-col items-center justify-center text-center pt-4">
        <div className="flex flex-row w-full justify-between">
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
        </div>

        <div className="flex flex-row w-full justify-between items-center pt-10">
          <div className="flex flex-row text-white space-x-16">
            <Link href="/">
              <p>DIENSTEN</p>
            </Link>
            <Link href="/">
              <p>PRODUCTEN</p>
            </Link>
            <Link href="/">
              <p> OVER ONS</p>
            </Link>
          </div>

          <div>
            <Image width={210} height={100} src="/images/logo.png" alt="Logo" />
          </div>

          <div className="flex flex-row text-white space-x-16">
            <Link href="/">
              <p>ONS TEAM</p>
            </Link>
            <Link href="/">
              <p>BLOG</p>
            </Link>
            <Link href="/">
              <p>CONTACT</p>
            </Link>
          </div>
        </div>
      </LandingWrapper>
    </nav>
  );
};

export default LandingNav;

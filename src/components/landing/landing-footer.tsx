import Image from "next/image";
import LandingWrapper from "../wrapper/landing-wrapper";
import {
  Clock,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { Separator } from "../ui/separator";
import Link from "next/link";

const LandingFooter = () => {
  return (
    <footer className="pt-32 pb-20 bg-black">
      <LandingWrapper className="flex flex-col items-start justify-center text-start">
        <div className="w-full flex flex-col md:flex-row gap-10 md:gap-0 md:justify-between">
          <div className="md:hidden">
            <Image width={120} height={70} src="/images/logo.png" alt="Logo" />
          </div>
          <div className="hidden md:block">
            <Image width={160} height={100} src="/images/logo.png" alt="Logo" />{" "}
          </div>

          <div className="flex flex-col text-white">
            <h4 className="text-white text-xl md:text-3xl font-medium">
              Vind Ons
            </h4>
            <div className="flex flex-row space-x-4 mt-6 items-start">
              <MapPin />
              <p>
                Industry road 101 8071DD <br /> Nunspeet
              </p>
            </div>
            <div className="flex flex-row space-x-4 mt-6">
              <Phone />
              <p>0341-251 300</p>
            </div>
            <div className="flex flex-row space-x-4 mt-6">
              <Mail />
              <p>info@autoschades.nl</p>
            </div>
          </div>

          <div className="flex flex-col text-white">
            <h4 className="text-white text-xl md:text-3xl font-medium">
              Openingstijden
            </h4>
            <div className="flex flex-row space-x-4 mt-6 items-start">
              <Clock />
              <p>
                Maandag tot en met vrijdag <br /> 07.00 - 17.00 uur
              </p>
            </div>
            <div className="flex flex-row items-start space-x-4 mt-6">
              <Clock />
              <p>
                Zaterdag <br /> 07.00 - 13.00 uur
              </p>
            </div>
          </div>

          <div className="flex flex-col text-white">
            <h4 className="text-white text-xl md:text-3xl font-medium">
              Volg ons.
            </h4>
            <div className="flex flex-row space-x-4 mt-6 items-start">
              <Link href="https://asdf.com">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-all">
                  <Image
                    width={28}
                    height={28}
                    src="/icons/ln.svg"
                    alt="LinkedIn"
                  />
                </div>
              </Link>

              <Link href="https://asdf.com">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-all">
                  <Image
                    width={34}
                    height={34}
                    src="/icons/fb.svg"
                    alt="Facebook"
                  />
                </div>
              </Link>

              <Link href="https://asdf.com">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-all">
                  <Image width={28} height={28} src="/icons/x.svg" alt="X" />
                </div>
              </Link>
            </div>

            <p className="mt-6">
              Blijf op de hoogte van al het <br /> laatste nieuws en promoties.
            </p>
          </div>
        </div>
        <Separator className="bg-white/10 mt-20" orientation="horizontal" />
        <div className="flex flex-col md:flex-row w-full justify-between text-center md:text-start text-sm md:text-base text-white/50 mt-20">
          <p>AUTOSCHADES.NL © 2023 Alle rechten voorbehouden</p>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-6 md:mt-0">
            <p>Privacybeleid</p>
            <p>Algemene voorwaarden</p>
          </div>
        </div>
      </LandingWrapper>
    </footer>
  );
};

export default LandingFooter;

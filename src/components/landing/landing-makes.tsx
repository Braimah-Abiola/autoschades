import Marquee from "react-fast-marquee";
import LandingWrapper from "../wrapper/landing-wrapper";
import Image from "next/image";

const LandingMakes = () => {
  return (
    <div className="w-full bg-primary py-16 md:py-24">
      <LandingWrapper className="flex flex-col items-start justify-center text-start">
        <div className="flex flex-col md:flex-row justify-between w-full">
          <h3 className="text-white text-4xl font-semibold">
            Merken die wij onderhouden.
          </h3>

          <p className="text-lg text-white mt-8 md:mt-0">
            Wij onderhouden uw voertuig.
          </p>
        </div>
      </LandingWrapper>

      <Marquee className="mt-20">
        <Image
          className="ml-20"
          height={80}
          width={80}
          src="/makes/bmw.png"
          alt="Bmw"
        />
        <Image
          className="ml-20"
          height={80}
          width={80}
          src="/makes/honda.png"
          alt="Honda"
        />
        <Image
          className="ml-20"
          height={80}
          width={80}
          src="/makes/kia.png"
          alt="Kia"
        />
        <Image
          className="ml-20"
          height={80}
          width={80}
          src="/makes/nissan.png"
          alt="Nissan"
        />
        <Image
          className="ml-20"
          height={80}
          width={80}
          src="/makes/mazda.png"
          alt="Mazda"
        />
        <Image
          className="ml-20"
          height={80}
          width={80}
          src="/makes/toyota.png"
          alt="Toyota"
        />
        <Image
          className="ml-20"
          height={80}
          width={80}
          src="/makes/vw.png"
          alt="VW"
        />
        <Image
          className="ml-20"
          height={80}
          width={80}
          src="/makes/lexus.png"
          alt="Lexus"
        />
        <Image
          className="ml-20"
          height={80}
          width={80}
          src="/makes/hyundai.png"
          alt="Hyundai"
        />
        <Image
          className="ml-20"
          height={80}
          width={80}
          src="/makes/lambo.png"
          alt="Lamborghini"
        />
        <Image
          className="ml-20"
          height={80}
          width={80}
          src="/makes/tesla.png"
          alt="Tesla"
        />
        <Image
          className="ml-20"
          height={80}
          width={80}
          src="/makes/rover.png"
          alt="Land Rover"
        />
      </Marquee>
    </div>
  );
};

export default LandingMakes;

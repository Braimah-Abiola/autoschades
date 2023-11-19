import Image from "next/image";
import LandingWrapper from "../wrapper/landing-wrapper";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const LandingServices = () => {
  return (
    <div className="">
      <LandingWrapper className=" bg-[#FFE6CC] flex flex-col items-start justify-center text-start py-20 md:py-28 px-5 md:px-20 xl:px-20 2xl:px-40">
        <h2 className="text-black text-5xl font-semibold">
          Onze diensten en producten.
        </h2>
        <p className="text-lg text-black/60 mt-4">
          Ontdek onze diensten en producten voor topzorg aan uw auto,{" "}
          <br className="hidden md:block" /> met ervaren professionals en
          moderne apparatuur.
        </p>

        <div className="w-full flex flex-col md:flex-row gap-5 md:gap-12 xl:gap-4 2xl:gap-8 mt-12 md:mt-10">
          <div className="flex flex-col h-[450px] md:h-[450px] w-full md:w-[450px] relative">
            <Image
              className="rounded-2xl object-cover"
              fill
              src="/images/service_one.png"
              alt="Services"
            />
            <div className="absolute bottom-0 px-6 md:px-4 py-6 md:py-4 xl:py-10 xl:px-10 2xl:px-10 2xl:py-10">
              <h4 className="text-xl md:text-xl 2xl:text-2xl uppercase font-medium text-white">
                UITGEBREIDE AUTO REPARATIES VOOR ALLE MERKEN EN MODELLEN.
              </h4>
              <Button size="xl" className=" uppercase mt-4">
                Bekijk onze diensten
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col h-[450px] md:h-[450px] w-full md:w-[450px] relative">
            <Image
              className="rounded-2xl object-cover"
              fill
              src="/images/service_two.png"
              alt="Services"
            />
            <div className="absolute bottom-0 px-6 md:px-4 py-6 md:py-4 xl:py-10 xl:px-10 2xl:px-10 2xl:py-10">
              <h4 className="text-xl md:text-xl 2xl:text-2xl uppercase font-medium text-white">
                KWALITEIT AUTOMOBIEL ACCESSOIRES VOOR VERBETERDE PRESTATIES.
              </h4>
              <Button size="xl" className=" uppercase mt-4">
                Bekijk onze producten
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col h-[450px] md:h-[450px] w-full md:w-[450px] relative">
            <Image
              className="rounded-2xl object-cover"
              fill
              src="/images/value_one.png"
              alt="Services"
            />
            <div className="absolute bottom-0 px-6 md:px-4 py-6 md:py-4 xl:py-10 xl:px-10 2xl:px-10 2xl:py-10">
              <h4 className="text-xl md:text-xl 2xl:text-2xl uppercase font-medium text-white">
                UITGEBREID ONDERHOUD VOOR OPTIMALE VOERTUIGPRESTATIES.
              </h4>
              <Button size="xl" className=" uppercase mt-4">
                Bekijk onze producten
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </LandingWrapper>
    </div>
  );
};

export default LandingServices;

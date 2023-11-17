import Image from "next/image";
import LandingWrapper from "../wrapper/landing-wrapper";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const LandingServices = () => {
  return (
    <div className="">
      <LandingWrapper className=" bg-[#FFE6CC] flex flex-col items-start justify-center text-start py-20 md:py-40">
        <h2 className="text-black text-5xl font-semibold">
          Onze diensten en producten.
        </h2>

        <div className="w-full flex flex-col md:flex-row gap-10 md:gap-16 mt-20">
          <div className="flex flex-col h-[450px] md:h-[605px] w-full md:w-[605px] relative">
            <Image
              className="rounded-2xl object-cover"
              fill
              src="/images/service_one.png"
              alt="Services"
            />
            <div className="absolute bottom-0 px-6 md:px-8 py-6 md:py-8">
              <h4 className="text-xl md:text-2xl uppercase font-medium text-white">
                UITGEBREIDE AUTO REPARATIES VOOR ALLE MERKEN EN MODELLEN.
              </h4>
              <Button size="xl" className=" uppercase mt-4">
                Bekijk onze diensten.
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col h-[450px] md:h-[605px] w-full md:w-[605px] relative">
            <Image
              className="rounded-2xl object-cover"
              fill
              src="/images/service_two.png"
              alt="Services"
            />
            <div className="absolute bottom-0 px-6 md:px-8 py-6 md:py-8">
              <h4 className="text-xl md:text-2xl uppercase font-medium text-white">
                KWALITEIT AUTOMOBIEL ACCESSOIRES VOOR VERBETERDE PRESTATIES.
              </h4>
              <Button size="xl" className=" uppercase mt-4">
                Bekijk onze producten.
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

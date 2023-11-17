import { Quote } from "lucide-react";
import LandingWrapper from "../wrapper/landing-wrapper";
import Image from "next/image";

const LandingTestimonials = () => {
  return (
    <div className="w-full py-40">
      <LandingWrapper className="flex flex-col items-start justify-center text-start">
        <div className="flex w-full items-center justify-center text-start md:text-center mb-20">
          <h2 className="text-black text-4xl md:text-5xl font-semibold">
            Wat onze klanten zeggen
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="bg-[#F6F6F6] p-8 rounded-2xl w-full md:w-[600px]">
            <Quote fill="black" />
            <p className="mt-4 text-lg">
              Ik breng al jaren mijn voertuigen naar EVS 24 Auto Repair en ben
              altijd onder de indruk van hun expertise en vriendelijke service.
              Ze hebben onlangs een hardnekkig elektrisch probleem in mijn SUV
              opgelost dat andere garages niet konden achterhalen. Ik vertrouw
              hen met al mijn autoreparaties.
            </p>

            <div className="flex flex-row items-center gap-4 mt-8">
              <Image
                height={50}
                width={50}
                src="/images/user_one.png"
                alt="Happy customer"
              />
              <div className="flex flex-col">
                <h4 className="text-xl font-medium">EMILY RODRIGUEZ</h4>
                <p className="text-lg">Lamborghini Urus</p>
              </div>
            </div>
          </div>

          <div className="bg-[#F6F6F6] p-8 rounded-2xl w-full md:w-[600px]">
            <Quote fill="black" />
            <p className="mt-4 text-lg">
              Ik breng al jaren mijn voertuigen naar EVS 24 Auto Repair en ben
              altijd onder de indruk van hun expertise en vriendelijke service.
              Ze hebben onlangs een hardnekkig elektrisch probleem in mijn SUV
              opgelost dat andere garages niet konden achterhalen. Ik vertrouw
              hen met al mijn autoreparaties.
            </p>

            <div className="flex flex-row items-center gap-4 mt-8">
              <Image
                height={50}
                width={50}
                src="/images/user_one.png"
                alt="Happy customer"
              />
              <div className="flex flex-col">
                <h4 className="text-xl font-medium">EMILY RODRIGUEZ</h4>
                <p className="text-lg">Lamborghini Urus</p>
              </div>
            </div>
          </div>
        </div>
      </LandingWrapper>
    </div>
  );
};

export default LandingTestimonials;

import { Quote } from "lucide-react";
import LandingWrapper from "../wrapper/landing-wrapper";
import Image from "next/image";

const LandingTestimonials = () => {
  return (
    <div className="w-full py-16 md:py-40">
      <LandingWrapper className="flex flex-col items-start justify-center text-start">
        <div className="flex flex-col w-full items-center justify-center text-start md:text-center mb-10 md:mb-4">
          <h2 className="text-black text-4xl md:text-5xl font-semibold">
            Wat onze klanten zeggen
          </h2>
          <p className="text-lg text-black/60 mt-6">
            Geloof niet alleen ons woord, luister naar wat onze klanten te
            zeggen hebben.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-5 xl:gap-8 2xl:gap-12 mt-0 xl:mt-8 2xl:mt-10">
          <div className="bg-[#F6F6F6] p-8 rounded-2xl w-full">
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

          <div className="bg-[#F6F6F6] p-8 rounded-2xl w-full">
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

        <div className="flex flex-col md:flex-row gap-5 xl:gap-8 2xl:gap-12 mt-5 xl:mt-8 2xl:mt-10">
          <div className="bg-[#F6F6F6] p-8 rounded-2xl w-full">
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

          <div className="bg-[#F6F6F6] p-8 rounded-2xl w-full">
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

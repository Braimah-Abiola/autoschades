import Image from "next/image";
import { Button } from "../ui/button";
import LandingWrapper from "../wrapper/landing-wrapper";
import { Wrench } from "lucide-react";

const LandingValue = () => {
  return (
    <div>
      <LandingWrapper className="flex flex-col items-start justify-center text-start py-16 md:py-40">
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="flex flex-col">
            <h2 className="text-black text-4xl md:text-5xl font-semibold">
              Onze waardepropositie
            </h2>
            <p className="text-lg text-black/60 w-full md:w-[55%] mt-4">
              Ontdek onze waardepropositie - een toewijding aan uitmuntendheid,
              topklasse professionals en de beste gereedschappen om ervoor te
              zorgen dat uw voertuig ongeëvenaarde zorg ontvangt.
            </p>
          </div>
          <Button size="xl" className=" uppercase mt-8 md:mt-0 w-fit">
            Leer meer over ons
          </Button>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-10 w-full mt-12 md:mt-20">
          <div className="w-full py-20 md:py-20 flex items-center justify-center bg-[#f0f0f0] shadow-sm rounded-xl px-4">
            <div className="flex flex-col items-center text-center">
              <Image
                width={90}
                height={90}
                src="/icons/professional.svg"
                alt="Facebook"
              />
              <h3 className="text-2xl text-black font-medium mt-8">
                Topklasse <span className="text-primary">Professionals</span>
              </h3>
              <p className="text-black/60 text-lg w-full mt-3">
                Ervaren professionals van topklasse, toonaangevend in
                deskundigheid en hoogwaardige servicekwaliteit voor een
                ongeëvenaarde auto-ervaring.
              </p>
            </div>
          </div>

          <div className="w-full py-20 md:py-20 flex items-center justify-center bg-[#f0f0f0] shadow-sm rounded-xl px-4">
            <div className="flex flex-col items-center text-center">
              <Image
                width={90}
                height={90}
                src="/icons/perform.svg"
                alt="Facebook"
              />
              <h3 className="text-2xl text-black font-medium mt-8">
                Toewijding om te <span className="text-primary">presteren</span>
                .
              </h3>
              <p className="text-black/60 text-lg w-full mt-3">
                Toewijding aan uitzonderlijke prestaties, altijd strevend naar
                perfectie en klanttevredenheid met betrouwbare dienstverlening.
              </p>
            </div>
          </div>

          <div className="w-full py-20 md:py-20 flex items-center justify-center bg-[#f0f0f0] shadow-sm rounded-xl px-4">
            <div className="flex flex-col items-center text-center">
              <Image
                width={90}
                height={90}
                src="/icons/tool.svg"
                alt="Facebook"
              />
              <h3 className="text-2xl text-black font-medium mt-8">
                Beste <span className="text-primary">gereedschappen</span>.
              </h3>
              <p className="text-black/60 text-lg w-full mt-3">
                Gebruik van geavanceerde en hoogwaardige gereedschappen,
                garanderend dat uw voertuig de best mogelijke zorg en service
                ontvangt.
              </p>
            </div>
          </div>
        </div>
      </LandingWrapper>
    </div>
  );
};

export default LandingValue;

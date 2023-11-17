import Image from "next/image";
import { Button } from "../ui/button";
import LandingWrapper from "../wrapper/landing-wrapper";

const LandingValue = () => {
  return (
    <div>
      <LandingWrapper className="flex flex-col items-start justify-center text-start py-40">
        <div className="flex flex-col md:flex-row justify-between w-full">
          <h2 className="text-black text-4xl md:text-5xl font-semibold">
            Onze waardepropositie
          </h2>
          <Button size="xl" className=" uppercase mt-8 md:mt-0 w-fit">
            Leer meer over ons.
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-10 w-full mt-20">
          <div className="flex flex-col">
            <div className="w-full md:w-[400px] h-[555px] relative">
              <Image
                className="rounded-2xl object-cover"
                fill
                src="/images/value_one.png"
                alt="Services"
              />
            </div>
            <h3 className="text-3xl text-black font-medium mt-8">
              Topklasse <span className="text-primary">Professionals</span>
            </h3>
            <p className="text-black/60 text-lg">
              Met jarenlange ervaring en een passie voor alles op het gebied van
              auto&apos;s, zijn onze bekwame technici de drijvende kracht achter
              onze reputatie voor uitzonderlijke service.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="w-full md:w-[400px] h-[555px] relative">
              <Image
                className="rounded-2xl object-cover"
                fill
                src="/images/value_two.png"
                alt="Services"
              />
            </div>
            <h3 className="text-3xl text-black font-medium mt-8">
              Toewijding om te <span className="text-primary">presteren</span>.
            </h3>
            <p className="text-black/60 text-lg w-[85%]">
              Bij ons Auto Reparatiebedrijf staan uw veiligheid en de prestaties
              van uw auto voorop. Wij handhaven onze toewijding om u een veilige
              en betrouwbare rijervaring te bieden.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="w-full md:w-[400px] h-[555px] relative">
              <Image
                className="rounded-2xl object-cover"
                fill
                src="/images/value_three.png"
                alt="Services"
              />
            </div>
            <h3 className="text-3xl text-black font-medium mt-8">
              Beste <span className="text-primary">gereedschappen</span>.
            </h3>
            <p className="text-black/60 text-lg">
              Wij gebruiken de beste en modernste gereedschappen om ervoor te
              zorgen dat uw voertuig de best mogelijke zorg krijgt.
            </p>
          </div>
        </div>
      </LandingWrapper>
    </div>
  );
};

export default LandingValue;

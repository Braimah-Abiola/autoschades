import Image from "next/image";
import LandingWrapper from "../wrapper/landing-wrapper";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";

const LandingAbout = () => {
  return (
    <div id="start">
      <LandingWrapper className="flex flex-col items-start justify-center text-start pt-24 pb-16 md:pt-40 md:pb-40">
        <h2 className="text-black text-4xl md:text-5xl font-semibold md:hidden">
          Welkom bij ons auto <br /> reparatiecentrum.
        </h2>

        <div className="w-full flex flex-col md:flex-row mt-4 md:mt-12 gap-12 md:gap-12 items-center">
          <div className="w-full">
            {/* <h4 className="mb-8 hidden md:block text-2xl text-black font-medium">
              WELKOM BIJ EEN NIEUW NIVEAU VAN <br className="hidden md:block" />{" "}
              AUTO REPARATIE-UITMUNTENDHEID.
            </h4> */}
            <h2 className="text-black text-4xl md:text-5xl font-semibold hidden md:block">
              Welkom bij ons auto <br /> reparatiecentrum.
            </h2>
            <p className="text-lg text-black/60 w-full md:w-[75%] 2xl:w-[50%] md:mt-5">
              Van routinematig onderhoud tot complexe reparaties, wij beschikken
              over de expertise en geavanceerde apparatuur om u veilig en snel
              weer op weg te helpen. Ervaar het verschil van samenwerken met
              professionals die oprecht geven om uw voertuig en uw tevredenheid.
            </p>

            <Button size="xl" className=" uppercase mt-8 md:mt-6">
              Leer meer over ons
              <ArrowUpRight className="ml-2" />
            </Button>
          </div>

          <div className="h-[400px] w-full md:w-full 2xl:w-[1000px] md:h-[600px] relative">
            <Image
              fill
              className="rounded-2xl"
              src="/images/about.png"
              alt="About image"
            />
          </div>
        </div>
      </LandingWrapper>
    </div>
  );
};

export default LandingAbout;

import { Menu } from "lucide-react";
import Image from "next/image";
import LandingWrapper from "../wrapper/landing-wrapper";

const LandingNavMobile = () => {
  return (
    <nav className="z-50 absolute w-full flex flex-col py-4">
      <LandingWrapper className="flex flex-row justify-between items-center">
        <div>
          <Image width={150} height={75} src="/images/logo.png" alt="Logo" />
        </div>

        <div className="flex w-12 h-12 rounded-xl items-center justify-center bg-primary">
          <Menu color="white" />
        </div>
      </LandingWrapper>
    </nav>
  );
};

export default LandingNavMobile;

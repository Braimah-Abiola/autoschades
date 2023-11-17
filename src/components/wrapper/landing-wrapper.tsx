import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const LandingWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-[1920px] px-4 md:px-60",
        className
    )}
    >
      {children}
    </div>
  );
};

export default LandingWrapper;

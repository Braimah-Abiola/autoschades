import LandingAbout from "@/components/landing/landing-about";
import LandingFooter from "@/components/landing/landing-footer";
import LandingHero from "@/components/landing/landing-hero";
import LandingMakes from "@/components/landing/landing-makes";
import LandingNav from "@/components/landing/landing-nav";
import LandingNavMobile from "@/components/landing/landing-nav-mobile";
import LandingServices from "@/components/landing/landing-services";
import LandingTestimonials from "@/components/landing/landing-testimonials";
import LandingValue from "@/components/landing/landing-value";

export default function Home() {
  return (
    <main>
      <div className="lg:hidden">
        <LandingNavMobile />
      </div>
      <div className="hidden lg:block">
        <LandingNav />
      </div>
      <LandingHero />
      <LandingAbout />
      <LandingServices />
      <LandingValue />
      <LandingMakes />
      <LandingTestimonials />
      <LandingFooter />
    </main>
  );
}

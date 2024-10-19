import CTA from "@/components/home/CTA";
import MyGallery from "@/components/home/Gallery";
// import Feature from "@/components/home/Feature";
import Hero from "@/components/home/Hero";
// import Pricing from "@/components/home/Pricing";
import ScrollingLogos from "@/components/home/ScrollingLogos";
import SocialProof from "@/components/home/SocialProof";
import WallOfLove from "@/components/home/WallOfLove";

export const runtime = 'edge';

export default function LangHome() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      <SocialProof />
      {/* display technology stack, partners, project honors, etc. */}
      <ScrollingLogos />

      {/* Gallery Section*/}
      <MyGallery />

      {/* USP (Unique Selling Proposition) */}
      {/* <Feature id="Features" /> */}

      {/* Pricing */}
      {/* <Pricing id="Pricing" /> */}

      {/* Testimonials / Wall of Love */}
      <WallOfLove id="WallOfLove" />

      {/* FAQ (Frequently Asked Questions) */}
      {/* <FAQ id="FAQ" /> */}

      {/* CTA (Call to Action) */}
      <CTA />
    </>
  );
}


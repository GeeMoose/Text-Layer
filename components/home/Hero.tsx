import { LineText } from "@/components/LineText";
import MotionWarpper from "@/components/common/MotionWarpper";
import CTAButton from "@/components/home/CTAButton";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("LandingPage");
  return (
    <>
      <MotionWarpper>
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-16 md:pt-24 text-center">
          <h1>
            {t("Hero.title1")} <LineText>{t("Hero.title2")}</LineText>{" "}
            {t("Hero.title3")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-2xl tracking-tight text-slate-700 dark:text-slate-400">
            {/* {siteConfig.description} */}
            {t("Hero.description")}
          </p>
        </section>
      </MotionWarpper>
      <CTAButton></CTAButton>
    </>
  );
};

export default Hero;


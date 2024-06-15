/* eslint-disable react/no-unescaped-entities */
import CTAButton from "@/components/home/CTAButton";
import { useTranslations } from "next-intl";

import { RoughNotation } from "react-rough-notation";

const CTA = () => {
  const t = useTranslations("LandingPage");
  return (
    <section className="flex flex-col justify-center max-w-[88%] items-center py-16 gap-12">
      <div className="flex flex-col text-center gap-4">
        <h2 className="text-center">{t("CTA.title")}</h2>
        <p className="text-large text-default-500">
          <RoughNotation type="box" color="#b71c1c" show={true}>
            {t("CTA.description1")}
          </RoughNotation>{" "}
          {t("CTA.description2")}{" "}
          <RoughNotation type="box" color="#b71c1c" show={true}>
            {t("CTA.description3")}
          </RoughNotation>{" "}
          {t("CTA.description4")}{" "}
          <RoughNotation type="box" color="#b71c1c" show={true}>
            {t("CTA.description5")}
          </RoughNotation>
          {t("CTA.description6")}
        </p>
      </div>
      <CTAButton />
    </section>
  );
};

export default CTA;


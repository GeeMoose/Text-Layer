"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
  Spacer,
} from "@nextui-org/react";

import { useTranslations } from "next-intl";
import { FaCheck } from "react-icons/fa";
import { RoughNotation } from "react-rough-notation";

interface PlanItem {
  key: string;
  title: string;
  price: string;
  description: string;
  features: string[];
}

const Pricing = ({ id }: { id: string }) => {
  const t = useTranslations("LandingPage");
  const plans: PlanItem[] = t.raw("Pricing.plans").map((item: PlanItem) => ({
    key: item.title,
    title: item.title,
    price: item.price,
    description: item.description,
    features: item.features,
  }));

  return (
    <section
      id={id}
      className="flex flex-col justify-center max-w-4xl items-center pt-16"
    >
      <div className="flex flex-col text-center max-w-xl">
        <h2 className="text-center text-white">
          <RoughNotation type="highlight" show={true} color="#2563EB">
            {t("Pricing.title")}
          </RoughNotation>
        </h2>
        <h3 className="text-4xl font-medium tracking-tight">
          {t("Pricing.title2")}
        </h3>
        <Spacer y={4} />
        <p className="text-large text-default-500">
          {t("Pricing.description")}
        </p>
      </div>
      <Spacer y={8} />
      <div className="grid grid-cols-3 gap-2 justify-items-center">
        {plans?.map((plan) => (
          <Card key={plan.key} className="p-3 flex-1 w-[90%]" shadow="md">
            <CardHeader className="flex flex-col items-start gap-2 pb-6">
              <h3 className="text-large font-medium">{plan.title}</h3>
              <p className="text-medium text-default-500">{plan.description}</p>
            </CardHeader>
            <Divider />
            <CardBody className="gap-8">
              <p className="flex items-baseline gap-1 pt-2">
                <span className="inline bg-gradient-to-br from-foreground to-foreground-600 bg-clip-text text-2xl font-semibold leading-7 tracking-tight text-transparent">
                  {plan.price}
                </span>
                {typeof plan.price !== "string" ? (
                  <span className="text-small font-medium text-default-400">
                    {plan.price}
                  </span>
                ) : null}
              </p>
              <ul className="flex flex-col gap-2">
                {plan.features?.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <FaCheck className="text-blue-500" />
                    <p className="text-default-500">{feature}</p>
                  </li>
                ))}
              </ul>
            </CardBody>
            <CardFooter>
              <Button
                fullWidth
                as={Link}
                color={"default"}
                href={"#"}
                variant={"solid"}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                {t("Pricing.buttonText")}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Pricing;


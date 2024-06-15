"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { PlusIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { RoughNotation } from "react-rough-notation";

// update rough notation highlight
function triggerResizeEvent() {
  const event = new Event("resize");
  window.dispatchEvent(event);
}

interface FAQItem {
  title: string;
  content: string;
}

const FAQ = ({ id }: { id: string }) => {
  const t = useTranslations("LandingPage");

  const FAQS = t.raw("FAQ.list").map((item: FAQItem) => ({
    title: item.title,
    content: item.content,
  }));
  return (
    <section
      id={id}
      className="flex flex-col justify-center max-w-[88%] items-center py-16 gap-12"
    >
      <div className="flex flex-col text-center gap-4">
        <h2 className="text-center text-white">
          <RoughNotation type="highlight" show={true} color="#2563EB">
            {t("FAQ.title")}
          </RoughNotation>
        </h2>
        <p className="text-large text-default-500">{t("FAQ.description")}</p>
      </div>
      <Accordion
        fullWidth
        keepContentMounted
        className="gap-3"
        itemClasses={{
          base: "px-6 !bg-default-100 !shadow-none hover:!bg-default-200/50",
          title: "font-medium",
          trigger: "py-6",
          content: "pt-0 pb-6 text-base text-default-500",
        }}
        items={FAQS}
        selectionMode="multiple"
        variant="splitted"
        onSelectionChange={triggerResizeEvent}
      >
        {FAQS?.map((item: FAQItem) => (
          <AccordionItem
            key={item.title}
            indicator={<PlusIcon />}
            title={item.title}
            textValue={item.content}
            HeadingComponent={"h3"}
          >
            <p>{item.content}</p>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;


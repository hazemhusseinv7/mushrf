"use client";

import { useTranslations } from "next-intl";

import { Timeline } from "@/components/ui/timeline";

const HowItWorks = () => {
  const t = useTranslations("HowItWorks");

  const data = [
    {
      title: t("cards.card_1.title"),
      description: t("cards.card_1.description"),
      images: ["/how-it-works/image-1.png", "/how-it-works/image-2.png"],
    },
    {
      title: t("cards.card_2.title"),
      description: t("cards.card_2.description"),
      images: ["/how-it-works/image-3.png", "/how-it-works/image-4.png"],
    },
    {
      title: t("cards.card_3.title"),
      description: t("cards.card_3.description"),
      images: ["/how-it-works/image-5.png", "/how-it-works/image-6.png"],
    },
    {
      title: t("cards.card_4.title"),
      description: t("cards.card_4.description"),
      images: ["/how-it-works/image-7.png", "/how-it-works/image-8.png"],
    },
    {
      title: t("cards.card_5.title"),
      description: t("cards.card_5.description"),
      images: ["/how-it-works/image-9.png", "/how-it-works/image-10.png"],
    },
  ];
  return (
    <section id="how-it-works">
      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
    </section>
  );
};

export default HowItWorks;

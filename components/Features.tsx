import { getTranslations } from "next-intl/server";

import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Features = async () => {
  const t = await getTranslations("Features");

  const words = t("title");

  const data = [
    {
      title: t("cards.card_1.title"),
      description: t("cards.card_1.description"),
      src: "/features/image-1.svg",
    },
    {
      title: t("cards.card_2.title"),
      description: t("cards.card_2.description"),
      src: "/features/image-2.svg",
    },
    {
      title: t("cards.card_3.title"),
      description: t("cards.card_3.description"),
      src: "/features/image-3.svg",
    },
    {
      title: t("cards.card_4.title"),
      description: t("cards.card_4.description"),
      src: "/features/image-4.svg",
    },
    {
      title: t("cards.card_5.title"),
      description: t("cards.card_5.description"),
      src: "/features/image-5.svg",
    },
    {
      title: t("cards.card_6.title"),
      description: t("cards.card_6.description"),
      src: "/features/image-6.svg",
    },
    {
      title: t("cards.card_7.title"),
      description: t("cards.card_7.description"),
      src: "/features/image-7.svg",
    },
    {
      title: t("cards.card_8.title"),
      description: t("cards.card_8.description"),
      src: "/features/image-8.svg",
    },
    {
      title: t("cards.card_9.title"),
      description: t("cards.card_9.description"),
      src: "/features/image-9.svg",
    },
  ];

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));
  return (
    <section id="features" dir="ltr">
      <div className="w-full h-full py-40">
        <h2 className="max-w-7xl ps-4 mx-auto" dir="rtl">
          <TextGenerateEffect
            words={words}
            className="text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200"
          />
        </h2>
        <Carousel items={cards} />
      </div>
    </section>
  );
};

export default Features;

"use client";

import { Accordion, AccordionItem } from "@heroui/react";

import { useTranslations } from "next-intl";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Page() {
  const t = useTranslations("FAQ");

  const words = {
    title: t("title"),
    description: t("description"),
  };

  const data = [
    {
      title: t("accordion.item_1.title"),
      description: t("accordion.item_1.description"),
    },
    {
      title: t("accordion.item_2.title"),
      description: t("accordion.item_2.description"),
    },
    {
      title: t("accordion.item_3.title"),
      description: t("accordion.item_3.description"),
    },
    {
      title: t("accordion.item_4.title"),
      description: t("accordion.item_4.description"),
    },
    {
      title: t("accordion.item_5.title"),
      description: t("accordion.item_5.description"),
    },
    {
      title: t("accordion.item_6.title"),
      description: t("accordion.item_6.description"),
    },
    {
      title: t("accordion.item_7.title"),
      description: t("accordion.item_7.description"),
    },
    {
      title: t("accordion.item_8.title"),
      description: t("accordion.item_8.description"),
    },
    {
      title: t("accordion.item_9.title"),
      description: t("accordion.item_9.description"),
    },
    {
      title: t("accordion.item_10.title"),
      description: t("accordion.item_10.description"),
    },
    {
      title: t("accordion.item_11.title"),
      description: t("accordion.item_11.description"),
    },
    {
      title: t("accordion.item_12.title"),
      description: t("accordion.item_12.description"),
    },
  ];

  return (
    <main className="min-h-screen bg-linear-to-bl from-blue-300/70 via-transparent dark:from-blue-950 dark:via-transparent">
      <div className="max-w-[85rem] px-4 pt-32 pb-10 sm:px-6 lg:px-8 lg:pb-14 mx-auto">
        {/* Grid */}
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <div className="max-w-xs">
              <h1>
                <TextGenerateEffect
                  words={words.title}
                  className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white"
                />
              </h1>
              <span>
                <TextGenerateEffect
                  words={words.description}
                  className="mt-1 hidden md:block text-gray-600 dark:text-neutral-400"
                />
              </span>
            </div>
          </div>
          {/* End Col */}

          <div className="md:col-span-3">
            {/* Accordion */}
            <Accordion defaultExpandedKeys={["1"]}>
              {data.map((item, i) => (
                <AccordionItem
                  key={i + 1}
                  aria-label={item.title}
                  title={item.title}
                >
                  {item.description}
                </AccordionItem>
              ))}
            </Accordion>
            {/* End Accordion */}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
    </main>
  );
}
